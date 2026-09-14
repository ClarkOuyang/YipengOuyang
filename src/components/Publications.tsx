import { useMemo, useState } from 'react'
import { publications } from '../data/publications'
import { profile } from '../data/profile'
import type { Publication, PubLinkType } from '../types'
import {
  Check,
  Code2,
  Copy,
  ExternalLink,
  FileText,
  Presentation,
  Quote,
  type LucideIcon,
} from 'lucide-react'
import { useLang, resolveText } from '../i18n/LanguageContext'
import { getString } from '../i18n/strings'

const LINK_ICONS: Record<PubLinkType, LucideIcon> = {
  pdf: FileText,
  code: Code2,
  project: ExternalLink,
  slides: Presentation,
  doi: ExternalLink,
}

const LINK_LABELS: Record<PubLinkType, string> = {
  pdf: 'link.pdf',
  code: 'link.code',
  project: 'link.project',
  slides: 'link.slides',
  doi: 'link.doi',
}

function AuthorList({ authors }: { authors: string[] }) {
  const highlightName = profile.name
  return (
    <span className="text-sm text-slate-600 dark:text-slate-400">
      {authors.map((a, i) => (
        <span key={a}>
          <span
            className={
              a === highlightName
                ? 'font-semibold text-brand-700 underline decoration-brand-300 decoration-2 underline-offset-2 dark:text-brand-200'
                : ''
            }
          >
            {a}
          </span>
          {i < authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </span>
  )
}

function PubCard({ pub, lang }: { pub: Publication; lang: 'en' | 'zh' }) {
  const [showBib, setShowBib] = useState(false)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(pub.bibtex)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard may be unavailable; ignore */
    }
  }

  return (
    <article className="paper-panel group relative scroll-mt-20 p-5 transition-colors hover:border-brand-300 dark:hover:border-brand-600">
      <div className="flex gap-4">
        {/* Year rail */}
        <div className="hidden w-14 shrink-0 flex-col items-center sm:flex">
          <span className="rounded-md bg-brand-50 px-2 py-1 text-sm font-bold tabular-nums text-brand-700 dark:bg-brand-800/50 dark:text-brand-100">
            {pub.year}
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
            {resolveText(pub.kind, lang)}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-2">
            <h3 className="font-serif text-base font-semibold leading-snug text-brand-900 dark:text-white">
              {resolveText(pub.title, lang)}
            </h3>
            {pub.highlight && (
              <span className="mt-0.5 shrink-0 rounded-full bg-olive-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-olive-700 dark:bg-olive-800/50 dark:text-olive-200">
                ★ Selected
              </span>
            )}
          </div>

          <p className="mt-1">
            <AuthorList authors={pub.authors} />
          </p>
          <p className="mt-0.5 text-sm italic text-slate-500 dark:text-slate-400">
            {resolveText(pub.venue, lang)}
          </p>

          {/* Tags */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {pub.tags.map((t, i) => (
              <span
                key={i}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {resolveText(t, lang)}
              </span>
            ))}
          </div>

          {/* Quick buttons */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {pub.links.map((l) => {
              const Icon = LINK_ICONS[l.type]
              return (
                <a
                  key={l.type + l.href}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {l.label ?? getString(LINK_LABELS[l.type], lang)}
                </a>
              )
            })}

            <button
              type="button"
              onClick={() => setShowBib((s) => !s)}
              aria-expanded={showBib}
              className="link-btn"
            >
              <Quote className="h-3.5 w-3.5" />
              {getString('link.bibtex', lang)}
            </button>
          </div>

          {/* Expandable BibTeX */}
          {showBib && (
            <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  BibTeX
                </span>
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-brand-600 hover:bg-brand-100 dark:text-brand-300 dark:hover:bg-brand-800/50"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> {getString('link.copied', lang)}
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> {getString('link.copy', lang)}
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto whitespace-pre text-[12px] leading-relaxed text-slate-700 dark:text-slate-300">
                <code>{pub.bibtex}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Publications() {
  const { lang } = useLang()
  const byYear = useMemo(() => {
    const sorted = [...publications].sort((a, b) => b.year - a.year)
    const map = new Map<number, Publication[]>()
    for (const p of sorted) {
      const arr = map.get(p.year) ?? []
      arr.push(p)
      map.set(p.year, arr)
    }
    return Array.from(map.entries())
  }, [])

  return (
    <section id="publications" className="container-page scroll-mt-20 py-16 sm:py-20">
      <h2 className="section-heading">{getString('heading.publications', lang)}</h2>

      <div className="mt-8 space-y-10">
        {byYear.map(([year, pubs]) => (
          <div key={year}>
            <div className="mb-3 flex items-center gap-3">
              <h3 className="font-serif text-xl font-semibold text-brand-800 dark:text-brand-100">
                {year}
              </h3>
              <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
              <span className="text-xs font-medium text-slate-400">
                {getString('pub.yearPapers', lang).replace('{n}', String(pubs.length))}
              </span>
            </div>
            <div className="space-y-3">
              {pubs.map((p) => (
                <PubCard key={p.id} pub={p} lang={lang} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
