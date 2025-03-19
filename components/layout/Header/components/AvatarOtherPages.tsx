import { AnimatePresence, motion } from 'framer-motion'
import React, { type FC } from 'react'

import { Avatar } from '~/components/Avatar'

import { useTestIsHomePage } from '../Header.hooks'

interface AvatarOtherPagesProps {}

export const AvatarOtherPages: FC<AvatarOtherPagesProps> = (props) => {
  const {} = props

  const { isHomePage } = useTestIsHomePage()

  return (
    <motion.div
      className="flex flex-1"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
      }}
    >
      <AnimatePresence>
        {!isHomePage && (
          <motion.div layoutId="avatar" layout>
            <Avatar>
              <Avatar.Image />
            </Avatar>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
