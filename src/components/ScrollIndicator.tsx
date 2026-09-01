import { ChevronDown } from 'lucide-react'
import styles from './ScrollIndicator.module.scss'

type ScrollIndicatorProps = {
  href: string
  label?: string
}

export function ScrollIndicator({
  href,
  label = 'Rolar para baixo',
}: ScrollIndicatorProps) {
  return (
    <a className={styles.indicator} href={href} aria-label={label}>
      <ChevronDown className={styles.icon} size={28} strokeWidth={1.75} />
    </a>
  )
}
