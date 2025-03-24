import { fetchLatestBlogPosts } from '~/sanity/queries'

import { ArticleCard } from './ArticleCard'

export async function Articles({ limit = 3 }) {
  const posts = (await fetchLatestBlogPosts({ limit, forDisplay: true })) || []

  return (
    <div className="flex flex-col gap-16">
      {posts.map((post) => (
        <ArticleCard post={post} key={post._id} />
      ))}
    </div>
  )
}
