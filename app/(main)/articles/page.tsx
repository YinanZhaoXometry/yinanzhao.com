import { Main } from '~/components/layout'

import { Articles } from './components'

const title = '✍🏼 My writings'
const description =
  'My writings exploring software design, productivity, and beyond.'
export const metadata = {
  title: title,
  description,
  openGraph: {
    title: title,
    description,
  },
}

export default function ArticlesPage() {
  return (
    <Main headerTitle={title} headerDescription={description}>
      <Articles limit={20} />
    </Main>
  )
}

export const revalidate = 60
