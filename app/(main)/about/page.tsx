import { Main } from '~/components/layout'
import { Resume } from '~/components/Resume'
import { fetchSettings } from '~/sanity/queries'

import { Greetings } from './components/Greetings/Greetings'

export const revalidate = 60

export default async function AboutPage() {
  const settings = await fetchSettings()

  return (
    <Main
      headerTitle="👨🏻‍💻 About me"
      headerDescription="Checkout my work experience, and Greetings from me"
    >
      <div className="gay-y-20 grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8">
        <Resume resumes={settings.resume} />
        <Greetings />
      </div>
    </Main>
  )
}
