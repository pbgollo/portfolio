import type { PersonalInfo } from '../data/profile'
import styles from './Avatar.module.scss'

type AvatarProps = {
  src: string
  alt: string
  personal: PersonalInfo[]
}

type JsonValueProps = {
  value: string | string[]
}

function JsonValue({ value }: JsonValueProps) {
  if (Array.isArray(value)) {
    return (
      <>
        <span className={styles.bracket}>[</span>
        {value.map((item, index) => (
          <span key={item}>
            <span className={styles.string}>"{item}"</span>
            {index < value.length - 1 && (
              <span className={styles.punctuation}>, </span>
            )}
          </span>
        ))}
        <span className={styles.bracket}>]</span>
      </>
    )
  }

  return <span className={styles.string}>"{value}"</span>
}

function personalSummary(personal: PersonalInfo[]) {
  return personal
    .map((item) => {
      const value = Array.isArray(item.value)
        ? item.value.join(', ')
        : item.value
      return `${item.key}: ${value}`
    })
    .join('. ')
}

export function Avatar({ src, alt, personal }: AvatarProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.coin}>
        <div className={styles.front}>
          <img className={styles.image} src={src} alt={alt} />
        </div>

        <div
          className={styles.back}
          aria-label={`Informações pessoais: ${personalSummary(personal)}`}
        >
          <pre className={styles.jsonBlock}>
            <code className={styles.json}>
              <span className={styles.line}>
                <span className={styles.brace}>{'{'}</span>
              </span>

              {personal.map((item, index) => (
                <span key={item.key} className={styles.line}>
                  <span className={styles.indent} />
                  <span className={styles.key}>"{item.key}"</span>
                  <span className={styles.punctuation}>: </span>
                  <JsonValue value={item.value} />
                  {index < personal.length - 1 && (
                    <span className={styles.punctuation}>,</span>
                  )}
                </span>
              ))}

              <span className={styles.line}>
                <span className={styles.brace}>{'}'}</span>
              </span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
