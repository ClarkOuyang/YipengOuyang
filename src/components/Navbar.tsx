import { useEffect, useRef, useState } from 'react'
import { Globe, Menu, Moon, Palette, Sun, X } from 'lucide-react'
import { profile } from '../data/profile'
import { useLang } from '../i18n/LanguageContext'
import { getString } from '../i18n/strings'
import { useAccent } from '../hooks/useAccent'

interface NavLink {
  key: string
  href: string
}

const LINKS: NavLink[] = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.news', href: '#news' },
  { key: 'nav.gallery', href: '#gallery' },
  { key: 'nav.publications', href: '#publications' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.interests', href: '#interests' },
]

export default function Navbar({
  theme,
  onToggleTheme,
}: {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState(LINKS[0].href)
  const { lang, toggleLang } = useLang()
  const { accent, setAccent, presets } = useAccent()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scrollspy: highlight the nav link for whichever section is most visible.
  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        // Prefer the entry closest to the top of the viewport.
        const top = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        )
        setActiveHref(`#${top.target.id}`)
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-paper/80 backdrop-blur-md dark:border-slate-800 dark:bg-[#0d1320]/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#about"
          onClick={close}
          className="group flex items-center gap-2 text-base font-bold tracking-tight text-brand-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-700 text-sm font-extrabold text-white transition-colors group-hover:bg-brand-600">
            {profile.name
              .split(' ')
              .map((w) => w[0])
              .slice(0, 2)
              .join('')}
          </span>
          <span className="hidden font-serif text-lg font-semibold tracking-normal sm:inline">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeHref === item.href
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-800/60 dark:text-white'
                  : 'text-slate-600 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-brand-800/50 dark:hover:text-white'
              }`}
            >
              {getString(item.key, lang)}
            </a>
          ))}
          <LangToggle lang={lang} onToggle={toggleLang} />
          <AccentPicker accent={accent} setAccent={setAccent} presets={presets} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <LangToggle lang={lang} onToggle={toggleLang} />
          <AccentPicker accent={accent} setAccent={setAccent} presets={presets} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-md p-2 text-slate-600 hover:bg-brand-50 dark:text-slate-300 dark:hover:bg-brand-800/50"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-slate-200 bg-paper md:hidden dark:border-slate-800 dark:bg-[#0d1320]">
          <div className="container-page flex flex-col py-2">
            {LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                  activeHref === item.href
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-800/60 dark:text-white'
                    : 'text-slate-700 hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-brand-800/50'
                }`}
              >
                {getString(item.key, lang)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function LangToggle({
  lang,
  onToggle,
}: {
  lang: 'en' | 'zh'
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={getString('nav.toggleLang', lang)}
      title={getString('nav.toggleLang', lang)}
      className="ml-1 flex items-center gap-1 rounded-md border border-slate-200 px-2.5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-white"
    >
      <Globe className="h-4 w-4" />
      {lang === 'en' ? '中' : 'EN'}
    </button>
  )
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: 'light' | 'dark'
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      className="ml-1 rounded-md border border-slate-200 p-2 text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-white"
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}

function AccentPicker({
  accent,
  setAccent,
  presets,
}: {
  accent: string
  setAccent: (hex: string) => void
  presets: { name: string; hex: string }[]
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close the popover when clicking outside.
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change accent color"
        title="Change accent color"
        aria-expanded={open}
        className="ml-1 flex items-center gap-1 rounded-md border border-slate-200 p-2 text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-white"
      >
        <Palette className="h-5 w-5" style={{ color: accent }} />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-3 shadow-soft dark:border-slate-700 dark:bg-slate-900">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Accent color
          </p>
          <div className="grid grid-cols-4 gap-2">
            {presets.map((p) => (
              <button
                key={p.hex}
                type="button"
                onClick={() => setAccent(p.hex)}
                title={p.name}
                aria-label={p.name}
                className={`h-7 w-7 rounded-full border-2 transition-transform hover:scale-110 ${
                  accent.toLowerCase() === p.hex.toLowerCase()
                    ? 'border-slate-400'
                    : 'border-transparent'
                }`}
                style={{ backgroundColor: p.hex }}
              />
            ))}
          </div>
          <label className="mt-3 flex items-center justify-between gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
            <span>Custom</span>
            <input
              type="color"
              value={accent}
              onChange={(e) => setAccent(e.target.value)}
              className="h-7 w-10 cursor-pointer rounded border border-slate-200 bg-white p-0.5 dark:border-slate-700"
            />
          </label>
        </div>
      )}
    </div>
  )
}
