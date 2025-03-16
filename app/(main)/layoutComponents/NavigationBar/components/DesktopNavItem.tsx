import { clsxm } from '@zolplay/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function DesktopNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsxm(
          'relative block whitespace-nowrap px-3 py-2 transition',
          isActive
            ? 'text-cyan-600 dark:text-cyan-400'
            : 'hover:text-cyan-600 dark:hover:text-cyan-400'
        )}
      >
        {children}
        {isActive && (
          <motion.span
            className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-cyan-700/0 via-cyan-700/70 to-cyan-700/0 dark:from-cyan-400/0 dark:via-cyan-400/40 dark:to-cyan-400/0"
            layoutId="active-nav-item"
          />
        )}
      </Link>
    </li>
  )
}
