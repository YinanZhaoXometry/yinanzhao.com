import { getLatestBlogPosts } from '~/sanity/queries'

import { ArticleCard } from './ArticleCard'

export async function Articles({ limit = 5 }) {
  const posts = (await getLatestBlogPosts({ limit, forDisplay: true })) || []

  return (
    <div className="flex flex-col gap-16">
      {posts.map((post) => (
        <ArticleCard post={post} key={post._id} />
      ))}
    </div>
  )
}
