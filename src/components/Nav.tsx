import { navItems } from '../data/navigation'
import { getSectionId } from '../sections'
import styles from './Nav.module.scss'

type NavProps = {
  activeSection: string
}

export function Nav({ activeSection }: NavProps) {
  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      <ul className={styles.list}>
        {navItems.map((item) => {
          const id = getSectionId(item.href)
          const isActive = id === activeSection

          return (
            <li key={item.href}>
              <a
                className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
