import { useLocale } from '../hooks/useLocale'
import type { Locale } from '../i18n/locale'
import styles from './LanguageToggle.module.scss'

const options: { id: Locale; label: string }[] = [
  { id: 'pt', label: 'PT' },
  { id: 'en', label: 'EN' },
]

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div className={styles.selector} role="group" aria-label={t.languageAria}>
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className={`${styles.option} ${
            locale === option.id ? styles.optionActive : ''
          }`}
          onClick={() => setLocale(option.id)}
          aria-pressed={locale === option.id}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
