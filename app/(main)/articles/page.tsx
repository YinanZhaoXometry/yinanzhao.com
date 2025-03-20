import { Main } from '~/components/layout'

import { Articles } from './components'

const description =
  '写博客文章是我比较喜欢的沉淀分享方式，我希望能够把好用的技术知识传递给更多的人。我比较喜欢围绕着技术为主的话题，但是也会写一些非技术的话题，比如设计、创业、企业管理、生活随笔等等。'
export const metadata = {
  title: '我的博客',
  description,
  openGraph: {
    title: '我的博客',
    description,
  },
  twitter: {
    title: '我的博客',
    description,
    card: 'summary_large_image',
  },
}

export default function ArticlesPage() {
  return (
    <Main
      headerTitle="Writing on software design, productivity and more."
      headerDescription="All of my long-form thoughts on programming, productivity and more, collected in chronological order."
    >
      <Articles limit={20} />
    </Main>
  )
}

export const revalidate = 60
