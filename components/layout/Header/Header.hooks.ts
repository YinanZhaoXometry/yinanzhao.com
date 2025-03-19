import { usePathname } from 'next/navigation'

export const useTestIsHomePage = () => {
  const isHomePage = usePathname() === '/'
  return { isHomePage }
}
