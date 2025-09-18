import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { env } from '~/env.mjs'
import { url } from '~/lib'
// import { redis } from '~/lib/redis'
import { fetchBlogPost } from '~/sanity/queries'

import { Article } from './components/Article'

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const post = await fetchBlogPost(params.slug)
  if (!post) {
    notFound()
  }

  const { title, description, mainImage } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: mainImage.asset.url,
        },
      ],
      type: 'article',
    },
    twitter: {
      images: [
        {
          url: mainImage.asset.url,
        },
      ],
      title,
      description,
      card: 'summary_large_image',
      site: '@thecalicastle',
      creator: '@thecalicastle',
    },
  } satisfies Metadata
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await fetchBlogPost(params.slug)
  if (!post) {
    notFound()
  }

  let views: number
  if (env.VERCEL_ENV === 'production') {
    // views = await redis.incr(kvKeys.postViews(post._id))
  } else {
    views = 578
  }

  let reactions: number[] = []
  try {
    if (env.VERCEL_ENV === 'production') {
      const res = await fetch(url(`/api/reactions?id=${post._id}`), {
        next: {
          tags: [`reactions:${post._id}`],
        },
      })
      const data = await res.json()
      if (Array.isArray(data)) {
        reactions = data
      }
    } else {
      reactions = Array.from({ length: 4 }, () => 0)
    }
  } catch (error) {
    console.error(error)
  }

  let relatedViews: number[] = []
  if (typeof post.related !== 'undefined' && post.related.length > 0) {
    if (env.VERCEL_ENV === 'development') {
      relatedViews = post.related.map(() => Math.floor(Math.random() * 1000))
    } else {
      // const postIdKeys = post.related.map(({ _id }) => kvKeys.postViews(_id))
      // relatedViews = await redis.mget<number[]>(...postIdKeys)
    }
  }

  return (
    <Article
      post={post}
      views={views}
      relatedViews={relatedViews}
      reactions={reactions.length > 0 ? reactions : undefined}
    />
  )
}

export const revalidate = 60
