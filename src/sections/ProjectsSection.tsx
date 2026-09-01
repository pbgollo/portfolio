import { projects } from '../data/projects'
import { useLocale } from '../hooks/useLocale'
import { pick } from '../i18n/locale'
import styles from './ProjectsSection.module.scss'

export function ProjectsSection() {
  const { locale, t } = useLocale()

  return (
    <div className={styles.projects}>
      <h2 className={styles.title}>
        <span className={styles.tag}>// </span>
        {t.projectsTitle}
      </h2>

      <ul className={styles.grid}>
        {projects.map((project, index) => {
          const href = project.url ?? project.repo
          const cover = (
            <div className={styles.cover}>
              {project.image ? (
                <img
                  className={styles.coverImage}
                  src={project.image}
                  alt=""
                />
              ) : (
                <span className={styles.coverIndex}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              )}
            </div>
          )

          const body = (
            <div className={styles.body}>
              <h3 className={styles.name}>{project.title}</h3>
              <span className={styles.year}>{project.year}</span>
              <p className={styles.description}>
                {pick(project.description, locale)}
              </p>
              <p className={styles.stacks}>{project.stacks.join(' · ')}</p>
            </div>
          )

          return (
            <li key={project.title} className={styles.card}>
              {href ? (
                <a
                  className={styles.link}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {cover}
                  {body}
                </a>
              ) : (
                <>
                  {cover}
                  {body}
                </>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
