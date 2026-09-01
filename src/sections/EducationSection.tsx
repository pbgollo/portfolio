import { education } from '../data/education'
import { useLocale } from '../hooks/useLocale'
import { pick } from '../i18n/locale'
import styles from './EducationSection.module.scss'

export function EducationSection() {
  const { locale, t } = useLocale()

  return (
    <div className={styles.education}>
      <h2 className={styles.title}>
        <span className={styles.tag}>// </span>
        {t.educationTitle}
      </h2>

      <ol className={styles.list}>
        {education.map((item) => (
          <li key={item.degree.pt + item.period.pt} className={styles.item}>
            <span className={styles.period}>{pick(item.period, locale)}</span>
            <h3 className={styles.degree}>{pick(item.degree, locale)}</h3>
            <p className={styles.institution}>{item.institution}</p>
            {item.note && (
              <p className={styles.note}>{pick(item.note, locale)}</p>
            )}
            <p className={styles.location}>{pick(item.location, locale)}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
