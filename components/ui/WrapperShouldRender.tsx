import React, { type FC, type PropsWithChildren } from 'react'

interface WrapperRenderProps extends PropsWithChildren {
  shouldRender: boolean
}

export const WrapperShouldRender: FC<WrapperRenderProps> = (props) => {
  const { shouldRender, children } = props

  if (!shouldRender) {
    return null
  }
  return <div>{children}</div>
}
