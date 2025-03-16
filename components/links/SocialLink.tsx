'use client'

import { clsxm } from '@zolplay/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { type FC, useMemo } from 'react'

import { Tooltip } from '~/components/ui/Tooltip'

import {
  getSocialConfigByPlatform,
  getSocialConfigByUrl,
} from './SocialLink.helpers'
import { type SocialLinkProps } from './SocialLink.types'

export const SocialLink: FC<SocialLinkProps> = (props) => {
  const { platform, href, ...linkProps } = props
  const [open, setOpen] = React.useState(false)

  const socialConfig = useMemo(
    () =>
      platform
        ? getSocialConfigByPlatform(platform)
        : getSocialConfigByUrl(href.toString()),
    [platform, href]
  )

  if (!socialConfig) {
    console.warn(`No socialConfig found for ${href.toString()}`)

    return <Link href={href} {...props} />
  }

  return (
    <Tooltip.Provider disableHoverableContent>
      <Tooltip.Root open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger asChild>
          <Link
            className="group -m-1 p-1"
            href={href}
            target="_blank"
            prefetch={false}
            aria-label={socialConfig.label}
            {...linkProps}
          >
            <socialConfig.icon
              className={clsxm('h-6 w-6 transition', {
                'fill-zinc-500 group-hover:fill-zinc-700':
                  socialConfig.iconType === 'fill',
                'text-zinc-400 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200':
                  socialConfig.iconType === 'stroke',
              })}
            />
          </Link>
        </Tooltip.Trigger>
        <AnimatePresence>
          {open && (
            <Tooltip.Portal forceMount>
              <Tooltip.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  {socialConfig.label}
                </motion.div>
              </Tooltip.Content>
            </Tooltip.Portal>
          )}
        </AnimatePresence>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
