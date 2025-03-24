import './Spinner.types'

import React, { type FunctionComponent, useMemo } from 'react'

import {
  DEFAULT_COLOR,
  DEFAULT_WAI_ARIA_ATTRIBUTE,
  OPACITY_LEVELS,
  POINTS,
} from './Spinner.constants'
import './Spinner.css'
import { SpinnerProps } from './Spinner.types'
export const Spinner: FunctionComponent<SpinnerProps> = (
  props
): React.ReactElement | null => {
  const {
    strokeColor = DEFAULT_COLOR,
    strokeWidth = '3',
    animationDuration = '0.75',
    width = '20',
    visible = true,
    ariaLabel = 'rotating-lines-loading',
  } = props

  const lines = useMemo(() => {
    return POINTS.map((point, index) => (
      <polyline
        key={point}
        points="24,12 24,4"
        style={{
          strokeWidth: `${strokeWidth}px`,
          strokeLinecap: 'round',
          strokeOpacity: OPACITY_LEVELS[index % 12],
          transform: `rotate(${point}deg)`,
          transformOrigin: '24px 24px',
        }}
      />
    ))
  }, [strokeWidth])

  if (!visible) return null

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      style={{
        animation: `spinnerRotating ${animationDuration}s steps(12, end) infinite`,
      }}
      stroke={strokeColor}
      data-testid="rotating-lines-svg"
      aria-label={ariaLabel}
      className="inline-block"
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      {lines}
    </svg>
  )
}
