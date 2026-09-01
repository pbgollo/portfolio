import { SkillsMarquee } from '../components/SkillsMarquee'
import { about } from '../data/about'
import styles from './AboutSection.module.scss'

export function AboutSection() {
  return (
    <article className={styles.about}>
      <h2 className={styles.title}>
        <span className={styles.tag}>// </span>
        {about.title}
      </h2>

      <p className={styles.text}>{about.text}</p>

      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>
          <span className={styles.tag}>// </span>
          Skills
        </h3>

        <SkillsMarquee />
      </div>
    </article>
  )
}
