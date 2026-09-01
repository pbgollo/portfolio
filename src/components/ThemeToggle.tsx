import { Moon, Sun } from 'lucide-react'
import { useLocale } from '../hooks/useLocale'
import type { Theme } from '../hooks/useTheme'
import styles from './ThemeToggle.module.scss'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const { t } = useLocale()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? t.themeToLight : t.themeToDark}
      className={styles.toggle}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
