import type { Theme } from '../hooks/useTheme'
import { Nav } from './Nav'
import { ThemeToggle } from './ThemeToggle'
import styles from './Header.module.scss'

type HeaderProps = {
  theme: Theme
  activeSection: string
  onToggleTheme: () => void
}

export function Header({ theme, activeSection, onToggleTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.nav}>
          <Nav activeSection={activeSection} />
        </div>

        <div className={styles.actions}>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  )
}
