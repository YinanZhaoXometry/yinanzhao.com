import { motion } from 'framer-motion'
import React, { type FC } from 'react'

import { type ContainerProps } from '~/app/app'
import { type Resume } from '~/sanity/queries'

interface ResumeItemMainProps extends ContainerProps {
  resume: Resume
  isCollasped: boolean
}

export const ResumeItemMain: FC<ResumeItemMainProps> = (props) => {
  const { resume, isCollasped, ...containerProps } = props

  return (
    <motion.div
      aria-expanded={!isCollasped}
      className="mt-2 overflow-hidden whitespace-break-spaces text-xs sm:text-sm"
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: isCollasped ? 0 : 1,
        height: isCollasped ? 0 : 'auto',
      }}
      transition={{ duration: 0.3 }}
      layout
      {...containerProps}
    >
      {resume.descriptions?.map((description, descriptionIndex) => (
        <p className="mb-2" key={descriptionIndex}>
          {description}
        </p>
      ))}
    </motion.div>
  )
}
