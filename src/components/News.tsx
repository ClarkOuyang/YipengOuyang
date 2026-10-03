import { news } from '../data/news'
import type { NewsItem } from '../types'
import { ExternalLink } from 'lucide-react'
import { useLang, resolveText } from '../i18n/LanguageContext'
import { getString } from '../i18n/strings'

/** Minimal **bold** markdown renderer — no HTML injection, just text runs. */
function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-slate-800 dark:text-slate-100">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}

function sortNews(items: NewsItem[]): NewsItem[] {
  return [...items].sort((a, b) => {
    const ka = a.iso ?? a.date
    const kb = b.iso ?? b.date
    return ka < kb ? 1 : ka > kb ? -1 : 0
  })
}

export default function News() {
  const { lang } = useLang()
  const items = sortNews(news)

  return (
    <section id="news" className="container-page scroll-mt-20 py-16 sm:py-20">
      <h2 className="section-heading">{getString('heading.news', lang)}</h2>

      <ol className="relative mt-2 border-l-2 border-slate-200 pl-6 dark:border-slate-700">
        {items.map((item) => (
          <li key={item.id} className="relative mb-8 last:mb-0">
            <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-600 shadow dark:border-[#0d1320]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <time className="shrink-0 text-sm font-semibold tabular-nums text-olive-600 dark:text-olive-400">
                {item.date}
              </time>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-medium text-slate-800 dark:text-slate-100">
                  {resolveText(item.title, lang)}
                </span>
              </div>
            </div>
            {item.description && (
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {renderBold(resolveText(item.description, lang))}
              </p>
            )}
            {item.link && (
              <a
                href={item.link.href}
                target={item.link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline dark:text-brand-300"
              >
                {item.link.label}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
