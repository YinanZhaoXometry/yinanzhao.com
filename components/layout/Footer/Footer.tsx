import Link from 'next/link'
import React from 'react'

import { UsersIcon } from '~/assets'
import { Container } from '~/components/ui/Container'
import { navigationItems } from '~/config/nav'
import { env } from '~/env.mjs'
import { prettifyNumber } from '~/lib/math'

import { LastVisitorInfo } from './LastVisitorInfo'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-blue-500 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  )
}

function Links() {
  return (
    <nav className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
      {navigationItems.map(({ href, text }) => (
        <NavLink key={href} href={href}>
          {text}
        </NavLink>
      ))}
    </nav>
  )
}

function TotalPageViews() {
  let views: number
  if (env.VERCEL_ENV === 'production') {
    // views = await redis.incr(kvKeys.totalPageViews)
  } else {
    views = 836
  }

  return (
    <span className="flex items-center justify-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 md:justify-start">
      <UsersIcon className="h-4 w-4" />
      <span title={`Total Views ${Intl.NumberFormat('en-US').format(views)}`}>
        Total Views&nbsp;
        <span className="font-medium">{prettifyNumber(views, false)}</span>
      </span>
    </span>
  )
}

export function Footer() {
  return (
    <footer className="mt-auto">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-12 pt-12 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-wrap items-center justify-between gap-6 sm:flex-row">
              <Links />

              <p className="text-sm text-zinc-500/80 dark:text-zinc-400/80">
                &copy; {new Date().getFullYear()} Yinan Zhao
              </p>

              <p className="flex">
                <React.Suspense>
                  <TotalPageViews />
                </React.Suspense>
                <React.Suspense>
                  <LastVisitorInfo />
                </React.Suspense>
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
