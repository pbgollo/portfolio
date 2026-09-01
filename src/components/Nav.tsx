import { navItems } from '../data/navigation'
import styles from './Nav.module.scss'

export function Nav() {
  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li key={item.href}>
            <a className={styles.link} href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
