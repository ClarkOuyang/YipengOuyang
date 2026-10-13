import { Award } from 'lucide-react'
import { honors } from '../data/honors'
import { useLang, resolveText } from '../i18n/LanguageContext'
import { getString } from '../i18n/strings'

export default function Honors() {
  const { lang } = useLang()

  return (
    <section id="honors" className="container-page scroll-mt-20 py-16 sm:py-20">
      <h2 className="section-heading">{getString('heading.honors', lang)}</h2>

      <ul className="mt-8 space-y-3">
        {honors.map((h) => (
          <li key={h.id} className="paper-panel flex gap-3 p-4">
            <Award className="mt-0.5 h-5 w-5 shrink-0 text-olive-600 dark:text-olive-400" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <p className="font-serif text-base font-semibold leading-snug text-brand-900 dark:text-white">
                  {resolveText(h.title, lang)}
                </p>
                {h.date && (
                  <p className="shrink-0 text-xs font-medium tabular-nums text-olive-600 dark:text-olive-400">
                    {h.date}
                  </p>
                )}
              </div>
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                {resolveText(h.issuer, lang)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
