import { useLocale } from '../hooks/useLocale'
import styles from './BackToTop.module.scss'

type BackToTopProps = {
  href?: string
}

export function BackToTop({ href = '#contato' }: BackToTopProps) {
  const { t } = useLocale()

  return (
    <a className={styles.button} href={href}>
      {t.backToTop}
    </a>
  )
}
