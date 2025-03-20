import React from 'react'

import { Header } from '~/app/(main)/home/components/Header'
import { Photos } from '~/app/(main)/home/components/Photos'
import { Resume } from '~/app/(main)/home/components/Resume'
import { IconPencilSwoosh } from '~/assets'
import { Container } from '~/components/UI/Container'
import { getSettings } from '~/sanity/queries'

import { Articles } from './components/Articles'

export const revalidate = 60

export default async function HomePage() {
  const settings = await getSettings()

  return (
    <>
      <Container className="mt-10">
        <Header />
      </Container>

      {settings?.heroPhotos && <Photos photos={settings.heroPhotos} />}

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-6 pt-6">
            <h2 className="mb-6 flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <IconPencilSwoosh className="h-5 w-5 flex-none" />
              <span className="ml-2">Recent Articles</span>
            </h2>
            <Articles />
          </div>
          <aside className="space-y-10 lg:sticky lg:top-8 lg:h-fit lg:pl-16 xl:pl-20">
            {settings?.resume && <Resume resume={settings.resume} />}
          </aside>
        </div>
      </Container>
    </>
  )
}
