import styles from './Avatar.module.scss'

type AvatarProps = {
  src: string
  alt: string
}

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  )
}
