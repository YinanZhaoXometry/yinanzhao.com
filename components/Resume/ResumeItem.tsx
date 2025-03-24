'use client'

import React, { type FC } from 'react'

import { useVisible } from '~/app/hooks/useVisible'
import { type Resume } from '~/sanity/queries'

import { ResumeItemHeader } from './ResumeItemHeader'
import { ResumeItemLogo } from './ResumeItemLogo'
import { ResumeItemMain } from './ResumeItemMain'

interface ResumeItemProps {
  resume: Resume
}

export const ResumeItem: FC<ResumeItemProps> = (props) => {
  const { resume } = props
  const { visible, toggle } = useVisible()

  return (
    <li className="flex select-none gap-4">
      <ResumeItemLogo resume={resume} />
      <aside className="group cursor-pointer" onClick={toggle}>
        <ResumeItemHeader resume={resume} isCollasped={!visible} />
        <ResumeItemMain resume={resume} isCollasped={!visible} />
      </aside>
    </li>
  )
}
