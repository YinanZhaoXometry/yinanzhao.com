import { MailIcon, YouTubeIcon } from '~/assets'
import { IconSocial_Github } from '~/assets/icons/IconSocial_Github'
import { IconSocial_Linkedin } from '~/assets/icons/IconSocial_Linkedin'

import { type Platform, type SocialConfig } from './SocialLink.types'

export const regexStrToSocialConfigMapper: { [key: string]: SocialConfig } = {
  '(?:github.com)': {
    icon: IconSocial_Github,
    platform: 'github',
    label: 'GitHub',
    iconType: 'fill',
  },
  '((?:youtu.be)|(?:youtube.com))': {
    icon: YouTubeIcon,
    iconType: 'stroke',
    platform: 'youtube',
    label: 'YouTube',
  },
  '(?:mailto:)': {
    icon: MailIcon,
    platform: 'mail',
    label: 'Email',
    iconType: 'stroke',
  },
  '(?:linkedin.com:)': {
    icon: IconSocial_Linkedin,
    iconType: 'fill',
    platform: 'linkedin',
    label: 'Linkedin',
  },
}

export function getSocialConfigByPlatform(
  platform: Platform | undefined
): SocialConfig | undefined {
  if (!platform) {
    return undefined
  }

  for (const info of Object.values(regexStrToSocialConfigMapper)) {
    if (info.platform === platform) {
      return info
    }
  }

  return undefined
}

export function getSocialConfigByUrl(url: string): SocialConfig | undefined {
  for (const regexStr in regexStrToSocialConfigMapper) {
    const regex = new RegExp(
      `^(?:https?:\/\/)?(?:[^@/\\n]+@)?(?:www.)?` + regexStr
    )
    if (regex.test(url)) {
      return regexStrToSocialConfigMapper[regexStr]
    }
  }

  return undefined
}
