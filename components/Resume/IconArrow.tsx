import { type IconProps } from '~/assets'
import { cn } from '~/utils/cn'

export function IconArrow(props: IconProps = {}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        'lucide lucide-chevron-right size-4 translate-x-0 rotate-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
        props.className
      )}
    >
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  )
}
