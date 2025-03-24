import { clsxm } from '@zolplay/utils'
import React, { type FC, type ReactNode } from 'react'

import { type ContainerProps } from '~/app/app'
import { Container } from '~/components/UI'

interface MainProps extends ContainerProps {
  headerTitle: ReactNode
  headerDescription?: ReactNode
}

export const Main: FC<MainProps> = (props) => {
  const { headerTitle, headerDescription, children, className } = props

  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {headerTitle}
        </h1>
        {headerDescription && (
          <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
            {headerDescription}
          </p>
        )}
      </header>
      <div className={clsxm('mt-12 sm:mt-16', className)}>{children}</div>
    </Container>
  )
}
