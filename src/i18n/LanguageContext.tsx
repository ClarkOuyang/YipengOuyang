import { createContext, useContext, type ReactNode } from 'react'

export type Lang = 'en' | 'zh'

const LangContext = createContext<{ lang: Lang }>({ lang: 'en' })

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <LangContext.Provider value={{ lang: 'en' }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

/**
 * Resolve a value that may be a plain string or a { en, zh } object.
 * Returns the string for the active language (falls back to `en`).
 */
export function resolveText(
  value: string | { en: string; zh: string } | undefined,
  lang: Lang,
): string {
  if (value == null) return ''
  if (typeof value === 'string') return value
  return value[lang] ?? value.en
}
