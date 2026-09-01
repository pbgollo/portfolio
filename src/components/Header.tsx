import type { Theme } from '../hooks/useTheme'
import { Nav } from './Nav'
import { ThemeToggle } from './ThemeToggle'
import styles from './Header.module.scss'

type HeaderProps = {
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.nav}>
          <Nav />
        </div>

        <div className={styles.actions}>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  )
}
