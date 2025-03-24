import React from 'react'

import { type Resume } from '~/sanity/queries'

import { IconArrow } from './IconArrow'

export function ResumeItemHeader({
  resume,
  isCollasped,
}: {
  resume: Resume
  isCollasped: boolean
}) {
  return (
    <dl className="flex flex-auto flex-wrap gap-x-2">
      <dt className="sr-only">Company</dt>
      <div className="flex w-full items-center gap-x-2">
        <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {resume.company}
        </dd>
        <IconArrow className={!isCollasped && 'rotate-90'} />
      </div>
      <dt className="sr-only">Position</dt>
      <dd className="text-xs text-zinc-500 dark:text-zinc-400">
        {resume.title}
      </dd>
      <dt className="sr-only">Date</dt>
      <dd className="ml-auto text-xs text-zinc-500/80 dark:text-zinc-400/80">
        {resume.start}&nbsp;
        <span aria-hidden="true">-</span>
        &nbsp;{resume.end ?? 'Present'}
      </dd>
    </dl>
  )
}
