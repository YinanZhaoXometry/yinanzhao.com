import { motion } from 'framer-motion'
import React, { type FC } from 'react'

import { ThemeSwithcerUI } from './ThemeSwitcherUI'

interface ThemeSwithcerProps {}

export const ThemeSwithcer: FC<ThemeSwithcerProps> = (props) => {
  const {} = props

  return (
    <motion.div
      className="flex justify-end gap-3 md:flex-1"
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
    >
      <div className="pointer-events-auto">
        <ThemeSwithcerUI />
      </div>
    </motion.div>
  )
}
