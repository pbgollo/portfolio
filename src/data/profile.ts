import { assetUrl } from '../utils/assetUrl'

export type SocialIcon = 'github' | 'linkedin' | 'instagram' | 'email'

export type SocialLink = {
  label: string
  href: string
  icon: SocialIcon
}

export type PersonalInfo = {
  key: string
  value: string | string[]
}

export const profile = {
  name: 'Pedro Gollo',
  title: 'Software Developer',
  avatar: assetUrl('avatar.png'),
  personal: [
    { key: 'born', value: '13/11/02' },
    { key: 'loc', value: 'Coimbra' },
    { key: 'lang', value: ['PT', 'EN'] },
  ] satisfies PersonalInfo[],
  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/pbgollo',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/pedro-gollo-a58711234',
      icon: 'linkedin',
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/pbgollo_',
      icon: 'instagram',
    },
    {
      label: 'Email',
      href: 'mailto:pedrobgollo@gmail.com',
      icon: 'email',
    },
  ] satisfies SocialLink[],
}
