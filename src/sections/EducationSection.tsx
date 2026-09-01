import { education } from '../data/education'
import styles from './EducationSection.module.scss'

export function EducationSection() {
  return (
    <div className={styles.education}>
      <h2 className={styles.title}>
        <span className={styles.tag}>// </span>
        Formação
      </h2>

      <ol className={styles.list}>
        {education.map((item) => (
          <li key={item.degree + item.period} className={styles.item}>
            <span className={styles.period}>{item.period}</span>
            <h3 className={styles.degree}>{item.degree}</h3>
            <p className={styles.institution}>{item.institution}</p>
            {item.note && <p className={styles.note}>{item.note}</p>}
            <p className={styles.location}>{item.location}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
