import Image from 'next/image'
import React, { type FC } from 'react'

import { type ContainerProps } from '~/app/app'
import { type Resume } from '~/sanity/queries'
import { cn } from '~/utils/cn'

interface ResumeItemLogoProps extends ContainerProps {
  resume: Resume
}

export const ResumeItemLogo: FC<ResumeItemLogoProps> = (props) => {
  const { resume, className } = props

  return (
    <div
      className={cn(
        'relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0',
        className
      )}
    >
      <Image
        src={resume.logo}
        alt={resume.company}
        className="h-8 w-8 rounded-full"
        width={100}
        height={100}
        unoptimized
      />
    </div>
  )
}
