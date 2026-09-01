import styles from './ProfileHeader.module.scss'

type ProfileHeaderProps = {
  name: string
  title: string
}

export function ProfileHeader({ name, title }: ProfileHeaderProps) {
  return (
    <div className={styles.profile}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.title}>{title}</p>
    </div>
  )
}
