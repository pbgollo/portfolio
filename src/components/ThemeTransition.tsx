import type { ThemeTransition as ThemeTransitionDirection } from '../hooks/useTheme'
import styles from './ThemeTransition.module.scss'

type ThemeTransitionProps = {
  direction: ThemeTransitionDirection | null
}

export function ThemeTransition({ direction }: ThemeTransitionProps) {
  if (!direction) return null

  return (
    <div
      className={`${styles.overlay} ${styles[direction]}`}
      aria-hidden="true"
    />
  )
}
