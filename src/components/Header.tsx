import { LanguageToggle } from './LanguageToggle'
import { Nav } from './Nav'
import { ThemeToggle } from './ThemeToggle'
import type { Theme } from '../hooks/useTheme'
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
          <LanguageToggle />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  )
}
