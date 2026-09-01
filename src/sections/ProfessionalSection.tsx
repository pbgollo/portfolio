import { experience } from '../data/experience'
import styles from './ProfessionalSection.module.scss'

export function ProfessionalSection() {
  return (
    <div className={styles.professional}>
      <h2 className={styles.title}>
        <span className={styles.tag}>// </span>
        Profissional
      </h2>

      <ol className={styles.list}>
        {experience.map((item) => (
          <li key={item.role + item.period} className={styles.item}>
            <span className={styles.period}>{item.period}</span>
            <h3 className={styles.role}>{item.role}</h3>
            <p className={styles.company}>{item.company}</p>
            <p className={styles.location}>{item.location}</p>
            <p className={styles.highlights}>{item.highlights.join(' · ')}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
