import { navItems } from '../data/navigation'
import { useLocale } from '../hooks/useLocale'
import { getSectionId } from '../sections'
import styles from './Nav.module.scss'

type NavProps = {
  activeSection: string
}

export function Nav({ activeSection }: NavProps) {
  const { t } = useLocale()

  return (
    <nav className={styles.nav} aria-label={t.navAria}>
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
                {t.nav[item.id]}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
