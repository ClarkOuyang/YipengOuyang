import { useState } from 'react'
import { featuredProjects } from '../data/featuredProjects'
import type { FeaturedProject } from '../types'
import { useLang, resolveText } from '../i18n/LanguageContext'
import { getString } from '../i18n/strings'
import { withBase } from '../lib/url'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const { lang } = useLang()
  const sorted = [...featuredProjects].sort((a, b) => (a.sortKey < b.sortKey ? 1 : -1))

  return (
    <section id="gallery" className="container-page scroll-mt-20 py-16 sm:py-20">
      <h2 className="section-heading">{getString('heading.gallery', lang)}</h2>

      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        {sorted.map((p) => (
          <ProjectCard key={p.id} project={p} lang={lang} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project: p, lang }: { project: FeaturedProject; lang: 'en' | 'zh' }) {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  const hasDetail = !!p.detail

  // Build the image list: prefer a photos gallery, then a single photo.
  const images = p.photos && p.photos.length > 0
    ? p.photos
    : p.photo
      ? [p.photo]
      : []
  const showCarousel = images.length > 1
  const current = images[idx] ?? ''

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length)
  const next = () => setIdx((i) => (i + 1) % images.length)

  return (
    <div className="paper-panel p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {/* Left: photo frame (half the previous size), content never cropped. */}
        <div className="relative w-full shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:w-[360px] dark:bg-slate-800">
          {current ? (
            <img
              src={withBase(current)}
              alt={`${resolveText(p.title, lang)} (${idx + 1}/${images.length})`}
              className="h-44 w-full object-contain sm:h-[220px]"
            />
          ) : (
            <div className="flex h-44 w-full items-center justify-center sm:h-[220px]">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                {getString('gallery.photoPending', lang)}
              </span>
            </div>
          )}

          {showCarousel && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-slate-700 shadow transition-colors hover:bg-white dark:bg-slate-900/70 dark:text-slate-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-slate-700 shadow transition-colors hover:bg-white dark:bg-slate-900/70 dark:text-slate-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIdx(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === idx ? 'bg-brand-600' : 'bg-slate-300 hover:bg-slate-400 dark:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right: text content (wider now that the photo is smaller). */}
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-lg font-semibold leading-snug text-brand-900 dark:text-white">
            {resolveText(p.title, lang)}
          </h3>
          <p className="mt-1 text-xs font-medium text-olive-600 dark:text-olive-400">
            {p.period}
          </p>
          {hasDetail && (
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-300"
            >
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
              {open ? getString('detail.hide', lang) : getString('detail.show', lang)}
            </button>
          )}

          {hasDetail && open && p.detail && (
            <div className="mt-3 border-t border-slate-100 pt-3 dark:border-slate-800">
              {p.detail.status && (
                <span className="mb-2 inline-block rounded-full border border-olive-200 bg-olive-50 px-2.5 py-0.5 text-[11px] font-semibold text-olive-700 dark:border-olive-700 dark:bg-olive-800/40 dark:text-olive-200">
                  {resolveText(p.detail.status, lang)}
                </span>
              )}
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {resolveText(p.detail.description, lang)}
              </p>
              {p.detail.keywords && p.detail.keywords.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.detail.keywords.map((k, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-800/40 dark:text-brand-100"
                    >
                      {resolveText(k, lang)}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
