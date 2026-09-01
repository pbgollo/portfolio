export type Locale = 'pt' | 'en'

export type Localized<T = string> = Record<Locale, T>

export function getInitialLocale(): Locale {
  const stored = localStorage.getItem('locale')
  if (stored === 'pt' || stored === 'en') return stored
  return 'pt'
}

export function applyLocale(locale: Locale): void {
  document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR'
}

export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale]
}
