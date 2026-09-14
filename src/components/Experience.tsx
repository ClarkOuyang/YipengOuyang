import { useState } from 'react'
import { education, experience } from '../data/timeline'
import type { TimelineItem } from '../types'
import { useLang, resolveText } from '../i18n/LanguageContext'
import { getString } from '../i18n/strings'
import { withBase } from '../lib/url'
import { ChevronDown } from 'lucide-react'

function LogoBadge({ logo, name }: { logo?: string; name: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
  if (logo) {
    return (
      <img
        src={withBase(logo)}
        alt={name}
        className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-xl border border-slate-200 bg-white object-contain p-1.5 dark:border-slate-700"
      />
    )
  }
  return (
    <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-xl bg-brand-700 text-base font-bold text-white">
      {initials}
    </span>
  )
}

function TimelineEntry({ item, lang }: { item: TimelineItem; lang: 'en' | 'zh' }) {
  const [open, setOpen] = useState(false)
  const hasDetail = !!(item.detail && (item.detail.major || (item.detail.bullets && item.detail.bullets.length > 0)))

  return (
    <li className="relative mb-8 pl-6 last:mb-0">
      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-olive-500 shadow dark:border-[#0d1320]" />
      <div className="flex items-start gap-3">
        <LogoBadge logo={item.logo} name={resolveText(item.role, lang)} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-serif text-base font-semibold text-brand-900 dark:text-white">
              {resolveText(item.role, lang)}
            </h3>
            <span className="shrink-0 text-sm font-medium tabular-nums text-olive-600 dark:text-olive-400">
              {item.start ? `${item.start} – ${item.end}` : item.end}
            </span>
          </div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {resolveText(item.organization, lang)}
            {item.location && <span className="text-slate-400"> · {item.location}</span>}
          </p>
          {item.description && (
            <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {resolveText(item.description, lang)}
            </p>
          )}

          {hasDetail && (
            <>
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-300"
              >
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
                />
                {open ? getString('detail.hide', lang) : getString('detail.show', lang)}
              </button>
              {open && (
                <div className="mt-2 space-y-2 border-l-2 border-slate-100 pl-3 dark:border-slate-800">
                  {item.detail?.major && (
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {resolveText(item.detail.major, lang)}
                    </p>
                  )}
                  {item.detail?.bullets && item.detail.bullets.length > 0 && (
                    <ul className="list-disc space-y-1 pl-5 text-sm text-slate-500 dark:text-slate-400">
                      {item.detail.bullets.map((b, i) => (
                        <li key={i}>{resolveText(b, lang)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </li>
  )
}

function Timeline({ items, lang }: { items: TimelineItem[]; lang: 'en' | 'zh' }) {
  return (
    <ol className="relative border-l-2 border-slate-200 dark:border-slate-700">
      {items.map((item) => (
        <TimelineEntry key={item.id} item={item} lang={lang} />
      ))}
    </ol>
  )
}

export default function Experience() {
  const { lang } = useLang()
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-slate-200 bg-black/[0.02] py-16 sm:py-20 dark:border-slate-800 dark:bg-white/[0.02]"
    >
      <div className="container-page">
        <h2 className="section-heading">{getString('heading.experience', lang)}</h2>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-serif text-lg font-semibold text-brand-800 dark:text-brand-100">
              {getString('heading.education', lang)}
            </h3>
            <Timeline items={education} lang={lang} />
          </div>
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-serif text-lg font-semibold text-brand-800 dark:text-brand-100">
              {getString('heading.internship', lang)}
            </h3>
            <Timeline items={experience} lang={lang} />
          </div>
        </div>
      </div>
    </section>
  )
}
