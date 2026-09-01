import { experience } from '../data/experience'
import { useLocale } from '../hooks/useLocale'
import { pick } from '../i18n/locale'
import styles from './ProfessionalSection.module.scss'

export function ProfessionalSection() {
  const { locale, t } = useLocale()

  return (
    <div className={styles.professional}>
      <h2 className={styles.title}>
        <span className={styles.tag}>// </span>
        {t.professionalTitle}
      </h2>

      <ol className={styles.list}>
        {experience.map((item) => (
          <li key={item.role.pt + item.period.pt} className={styles.item}>
            <span className={styles.period}>{pick(item.period, locale)}</span>
            <h3 className={styles.role}>{pick(item.role, locale)}</h3>
            <p className={styles.company}>{pick(item.company, locale)}</p>
            <p className={styles.location}>{pick(item.location, locale)}</p>
            <p className={styles.highlights}>
              {pick(item.highlights, locale).join(' · ')}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
