import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Main } from '~/components/layout'

const title = '我的项目'
const description =
  '多年来，我一直在做各种各样的小项目，这里就是我筛选出来我觉得还不错的项目合集，也是我在技术领域中尝试和探索的最好见证。'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Main
      className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
      headerTitle="My Projects"
    >
      {<Projects />}
    </Main>
  )
}

export const revalidate = 3600
