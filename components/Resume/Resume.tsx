import { isEmpty } from 'lodash-es'
import React from 'react'

import { BriefcaseIcon } from '~/assets'
import { type Resume } from '~/sanity/queries'

import { ResumeItem } from './ResumeItem'

export function Resume({ resumes }: { resumes: Resume[] | undefined }) {
  if (isEmpty(resumes)) {
    return null
  }

  return (
    <div className="h-fit rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="mb-6 flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-5 w-5 flex-none" />
        <span className="ml-2">Work</span>
      </h2>
      <ol className="space-y-4">
        {resumes.map((resume, roleIndex) => (
          <ResumeItem resume={resume} key={roleIndex} />
        ))}
      </ol>
    </div>
  )
}
