import { Avatar } from '../components/Avatar'
import { ProfileHeader } from '../components/ProfileHeader'
import { SocialLinks } from '../components/SocialLinks'
import { profile } from '../data/profile'
import styles from './ContactSection.module.scss'

export function ContactSection() {
  return (
    <>
      <div className={styles.emergeAvatar}>
        <Avatar
          src={profile.avatar}
          alt={profile.name}
          personal={profile.personal}
        />
      </div>

      <div className={styles.emergeProfile}>
        <ProfileHeader name={profile.name} title={profile.title} />
      </div>

      <div className={styles.emergeSocial}>
        <SocialLinks links={profile.social} />
      </div>
    </>
  )
}
