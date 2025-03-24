import { kvKeys } from '~/config/kv'
import { env } from '~/env.mjs'
import { redis } from '~/lib/redis'
import { fetchLatestBlogPosts } from '~/sanity/queries'

import { ArticleCard } from './ArticleCard'

export async function Articles({ limit = 5 }) {
  const posts = (await fetchLatestBlogPosts({ limit, forDisplay: true })) || []
  const postIdKeys = posts.map(({ _id }) => kvKeys.postViews(_id))

  let views: number[] = []
  if (env.VERCEL_ENV === 'development') {
    views = posts.map(() => Math.floor(Math.random() * 1000))
  } else {
    if (postIdKeys.length > 0) {
      views = await redis.mget<number[]>(...postIdKeys)
    }
  }

  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="flex max-w-3xl flex-col space-y-16">
        {posts.map((post, idx) => (
          <ArticleCard post={post} views={views[idx] ?? 0} key={post._id} />
        ))}
      </div>
    </div>
  )
}
