import { ChevronDown } from 'lucide-react'
import { useLocale } from '../hooks/useLocale'
import styles from './ScrollIndicator.module.scss'

type ScrollIndicatorProps = {
  href: string
}

export function ScrollIndicator({ href }: ScrollIndicatorProps) {
  const { t } = useLocale()

  return (
    <a className={styles.indicator} href={href} aria-label={t.scrollDown}>
      <ChevronDown className={styles.icon} size={28} strokeWidth={1.75} />
    </a>
  )
}
