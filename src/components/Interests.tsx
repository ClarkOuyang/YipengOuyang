import { interests } from '../data/interests'
import { useLang, resolveText } from '../i18n/LanguageContext'
import { getString } from '../i18n/strings'
import { ExternalLink } from 'lucide-react'

export default function Interests() {
  const { lang } = useLang()
  return (
    <section id="interests" className="container-page scroll-mt-20 py-16 sm:py-20">
      <h2 className="section-heading">{getString('heading.interests', lang)}</h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {interests.map((it, i) =>
          it.link ? (
            <a
              key={i}
              href={it.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-transparent px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-700 dark:border-slate-600 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-white"
            >
              <span className="text-lg leading-none">{it.icon}</span>
              {resolveText(it.label, lang)}
              <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
            </a>
          ) : (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-transparent px-4 py-2 text-sm font-medium text-slate-600 dark:border-slate-600 dark:text-slate-300"
            >
              <span className="text-lg leading-none">{it.icon}</span>
              {resolveText(it.label, lang)}
            </span>
          )
        )}
      </div>
    </section>
  )
}
