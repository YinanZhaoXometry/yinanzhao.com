import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Main } from '~/components/layout'

const title = '🏗️ Projects I built'
const description =
  'I like building things, the development of these projects not only strengthened my technical skills, it also honed my attention to fine details.'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Main headerTitle={title} headerDescription={description}>
      {<Projects />}
    </Main>
  )
}

export const revalidate = 3600
