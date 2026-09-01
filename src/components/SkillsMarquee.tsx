import { stacks } from '../data/stacks'
import { useLocale } from '../hooks/useLocale'
import styles from './SkillsMarquee.module.scss'

function StackRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul className={styles.row} aria-hidden={hidden || undefined}>
      {stacks.map((stack) => (
        <li key={stack.name} className={styles.item}>
          <img className={styles.logo} src={stack.src} alt="" />
          <span className={styles.label}>{stack.name}</span>
        </li>
      ))}
    </ul>
  )
}

export function SkillsMarquee() {
  const { t } = useLocale()

  return (
    <div className={styles.marquee} aria-label={t.skillsAria}>
      <div className={styles.viewport}>
        <div className={styles.track}>
          <StackRow />
          <StackRow hidden />
        </div>
      </div>
    </div>
  )
}
