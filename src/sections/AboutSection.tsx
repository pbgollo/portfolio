import { SkillsMarquee } from '../components/SkillsMarquee'
import { useLocale } from '../hooks/useLocale'
import styles from './AboutSection.module.scss'

export function AboutSection() {
  const { t } = useLocale()

  return (
    <article className={styles.about}>
      <h2 className={styles.title}>
        <span className={styles.tag}>// </span>
        {t.aboutTitle}
      </h2>

      <p className={styles.text}>{t.aboutText}</p>

      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>
          <span className={styles.tag}>// </span>
          {t.skills}
        </h3>

        <SkillsMarquee />
      </div>
    </article>
  )
}
