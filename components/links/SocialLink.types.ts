import { type LinkProps } from 'next/link'

import { type IconProps } from '~/assets'

export type Icon = (props: IconProps) => JSX.Element

export type Platform =
  | 'github'
  | 'twitter'
  | 'youtube'
  | 'telegram'
  | 'bilibili'
  | 'mail'
  | 'rss'
  | 'linkedin'

export type SocialConfig = {
  icon: Icon
  iconType: 'fill' | 'stroke'
  platform: Platform
  label: string
}

export type SocialLinkProps = { platform?: Platform } & LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>
