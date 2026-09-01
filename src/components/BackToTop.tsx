import styles from './BackToTop.module.scss'

type BackToTopProps = {
  href?: string
}

export function BackToTop({ href = '#contato' }: BackToTopProps) {
  return (
    <a className={styles.button} href={href}>
      Voltar ao início
    </a>
  )
}
