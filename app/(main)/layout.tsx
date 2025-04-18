import './articles/[slug]/Article.css'

import { Analytics } from '@vercel/analytics/react'
import { Suspense } from 'react'

import { QueryProvider } from '~/app/QueryProvider'
import { Footer, Header } from '~/components/layout'

export default function AppMainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 select-none" />
      <span className="pointer-events-none fixed top-0 block h-[800px] w-full select-none bg-[radial-gradient(103.72%_46.58%_at_50%_0%,rgba(5,5,5,0.045)_0%,rgba(0,0,0,0)_100%)] dark:bg-[radial-gradient(103.72%_46.58%_at_50%_0%,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0)_100%)]" />

      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900/80 dark:ring-zinc-400/20" />
        </div>
      </div>

      <QueryProvider>
        <div className="relative flex flex-1 flex-col text-zinc-800 dark:text-zinc-200">
          <Header />
          <main className="mb-32">{children}</main>
          <Suspense>
            <Footer />
          </Suspense>
        </div>
      </QueryProvider>

      <Analytics />
    </>
  )
}
