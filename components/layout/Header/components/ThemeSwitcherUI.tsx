'use client'

import { useTheme } from 'next-themes'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { IconMoon, IconSun } from '~/assets'
import { IconDevice } from '~/assets/icons/IconDevice'
import { ElegantTooltip } from '~/components/UI/Tooltip'

const themes = [
  {
    label: 'Device',
    value: 'system',
    icon: IconDevice,
  },
  {
    label: 'Light',
    value: 'light',
    icon: IconSun,
  },
  {
    label: 'Dark',
    value: 'dark',
    icon: IconMoon,
  },
]
export function ThemeSwithcerUI() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const ThemeIcon = useMemo(
    () => themes.find((t) => t.value === theme)?.icon ?? IconDevice,
    [theme]
  )

  useEffect(() => setMounted(true), [])

  const toggleTheme = useCallback(() => {
    const currThemeIndex = themes.findIndex((item) => item.value === theme)
    const targetThemeIndex =
      currThemeIndex + 1 > themes.length - 1 ? 0 : currThemeIndex + 1
    const targetTheme = themes[targetThemeIndex]

    setTheme(targetTheme.value)
  }, [setTheme, theme])

  if (!mounted) {
    return null
  }

  return (
    <ElegantTooltip
      delayDuration={500}
      content={themes.find((t) => t.value === theme)?.label}
    >
      <button
        className="group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        type="button"
        aria-label="Switch Theme Color"
        onClick={toggleTheme}
      >
        <ThemeIcon className="h-6 w-6 p-0.5 text-zinc-500 transition group-hover:text-zinc-700 dark:text-teal-400 dark:group-hover:text-teal-400" />
      </button>
    </ElegantTooltip>
  )
}
