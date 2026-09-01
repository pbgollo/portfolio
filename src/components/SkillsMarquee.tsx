import { stacks } from '../data/stacks'
import styles from './SkillsMarquee.module.scss'

function StackRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul className={styles.row} aria-hidden={hidden || undefined}>
      {stacks.map((stack) => (
        <li key={stack.name} className={styles.item}>
          <span
            className={styles.logo}
            style={{
              maskImage: `url(${stack.src})`,
              WebkitMaskImage: `url(${stack.src})`,
            }}
          />
          <span className={styles.label}>{stack.name}</span>
        </li>
      ))}
    </ul>
  )
}

export function SkillsMarquee() {
  return (
    <div className={styles.marquee} aria-label="Principais stacks">
      <div className={styles.track}>
        <StackRow />
        <StackRow hidden />
      </div>
    </div>
  )
}
