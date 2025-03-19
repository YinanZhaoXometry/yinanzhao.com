import { Popover, Transition } from '@headlessui/react'
import React from 'react'

import { navigationItems } from '~/config/nav'

import { MobileNavItem } from './MobileNavItem'

export function Mobile() {
  return (
    <div className="flex flex-1 justify-end md:hidden md:justify-center">
      <Popover className="pointer-events-auto relative z-50">
        <Popover.Button className="group flex items-center rounded-full bg-gradient-to-b from-zinc-50/20 to-white/80 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md focus:outline-none focus-visible:ring-2 dark:from-zinc-900/30 dark:to-zinc-800/80 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 dark:focus-visible:ring-yellow-500/80">
          Go to
          {/* Chevron */}
          <svg
            viewBox="0 0 8 6"
            aria-hidden="true"
            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          >
            <path
              d="M1.75 1.75 4 4.25l2.25-2.5"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={React.Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur dark:bg-black/80" />
          </Transition.Child>
          <Transition.Child
            as={React.Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-gradient-to-b from-zinc-100/75 to-white p-8 ring-1 ring-zinc-900/5 dark:from-zinc-900/50 dark:to-zinc-900 dark:ring-zinc-800"
            >
              <div className="flex flex-row-reverse items-center justify-between">
                <Popover.Button aria-label="关闭菜单" className="-m-1 p-1">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                  >
                    <path
                      d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Popover.Button>
                <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Site Navigation
                </h2>
              </div>
              <nav className="mt-6">
                <ul className="-my-2 divide-y divide-zinc-500/20 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                  {navigationItems.map(({ href, text }) => (
                    <MobileNavItem key={href} href={href}>
                      {text}
                    </MobileNavItem>
                  ))}
                </ul>
              </nav>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    </div>
  )
}
