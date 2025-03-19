'use client'

import { clsxm } from '@zolplay/utils'
import { motion } from 'framer-motion'
import { type CSSProperties, useRef } from 'react'

import { Container } from '~/components/UI'

import { AvatarHomePage } from './components/AvatarHomePage'
import { AvatarOtherPages } from './components/AvatarOtherPages'
import { NavigationBar } from './components/NavigationBar'
import { ThemeSwithcer } from './components/ThemeSwithcer'
import { useTestIsHomePage } from './Header.hooks'
export function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const { isHomePage } = useTestIsHomePage()

  return (
    <>
      <motion.header
        className={clsxm(
          'pointer-events-none relative z-50 mb-[var(--header-mb,0px)] flex flex-col',
          isHomePage
            ? 'h-[var(--header-height,180px)]'
            : 'h-[var(--header-height,64px)]'
        )}
        layout
        layoutRoot
      >
        <AvatarHomePage headerRef={headerRef} />

        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{
            position: 'var(--header-position)' as CSSProperties['position'],
          }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{
              position:
                'var(--header-inner-position)' as CSSProperties['position'],
            }}
          >
            <div className="relative flex gap-4">
              <AvatarOtherPages />
              <NavigationBar.Desktop />
              <NavigationBar.Mobile />
              <ThemeSwithcer />
            </div>
          </Container>
        </div>
      </motion.header>

      {isHomePage && <div className="h-[--content-offset]" />}
    </>
  )
}
