import { AnimatePresence, motion } from 'framer-motion'
import React, {
  type CSSProperties,
  type FC,
  type MutableRefObject,
} from 'react'

import { Avatar } from '~/components/Avatar'
import { Container } from '~/components/ui'

import { useTestIsHomePage } from '../Header.hooks'
import { useOnScrollAvatarAnimationEffect } from './AvatarHomePage.hooks'

interface AvatarHomePageProps {
  headerRef: MutableRefObject<HTMLDivElement>
}

export const AvatarHomePage: FC<AvatarHomePageProps> = (props) => {
  const { headerRef } = props
  const { isHomePage } = useTestIsHomePage()

  const { avatarRef, avatarBorderTransform, avatarTransform } =
    useOnScrollAvatarAnimationEffect({ isHomePage, headerRef })

  return (
    <AnimatePresence>
      {isHomePage && (
        <>
          <div
            ref={avatarRef}
            className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
          />
          <Container
            className="top-0 order-last -mb-3 pt-3"
            style={{
              position: 'var(--header-position)' as CSSProperties['position'],
            }}
          >
            <motion.div
              className="top-[var(--avatar-top,theme(spacing.3))] w-full select-none"
              style={{
                position:
                  'var(--header-inner-position)' as CSSProperties['position'],
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 200,
              }}
            >
              <motion.div
                className="relative inline-flex"
                layoutId="avatar"
                layout
              >
                <motion.div
                  className="absolute left-0 top-3 origin-left opacity-[var(--avatar-border-opacity,0)] transition-opacity"
                  style={{
                    transform: avatarBorderTransform,
                  }}
                >
                  <Avatar />
                </motion.div>

                <motion.div
                  className="block h-16 w-16 origin-left"
                  style={{
                    transform: avatarTransform,
                  }}
                >
                  <Avatar.Image large className="block h-full w-full" />
                </motion.div>
              </motion.div>
            </motion.div>
          </Container>
        </>
      )}
    </AnimatePresence>
  )
}
