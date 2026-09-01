import { Avatar } from '../components/Avatar'
import { ProfileHeader } from '../components/ProfileHeader'
import { SocialLinks } from '../components/SocialLinks'
import { profile } from '../data/profile'

export function ContactSection() {
  return (
    <>
      <Avatar
        src={profile.avatar}
        alt={profile.name}
        personal={profile.personal}
      />
      <ProfileHeader name={profile.name} title={profile.title} />
      <SocialLinks links={profile.social} />
    </>
  )
}
