import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'
import styles from './ThemeToggle.module.scss'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      className={styles.toggle}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
