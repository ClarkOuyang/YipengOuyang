// ---------------------------------------------------------------------------
// Shared TypeScript interfaces for the academic website data layer.
// The data lives in src/data/*.ts as plain, JSON-like objects so it is easy to
// edit. Swap these for your own real content — the components stay unchanged.
//
// A field typed as `Bilingual` accepts either a plain string (shown in every
// language) or an { en, zh } object for per-language text. Resolve with
// resolveText() from src/i18n/LanguageContext.
// ---------------------------------------------------------------------------

export type Bilingual = string | { en: string; zh: string }

export type SocialType =
  | 'scholar'
  | 'github'
  | 'linkedin'
  | 'email'
  | 'cv'
  | 'twitter'
  | 'orcid'
  | 'website'

export interface SocialLink {
  type: SocialType
  href: string
  label: string
}

export interface AffiliationLink {
  label: string
  href: string
}

/** A run of supervisor text that may carry its own link (e.g. the name itself). */
export interface SupervisorPart {
  text: Bilingual
  href?: string
  /** Style the run like a link (e.g. a supervisor name) even without an `href`. */
  highlight?: boolean
}

export interface HeroAffiliation {
  school: Bilingual
  role: Bilingual
  /** Date range, kept as-is (e.g. "Sep.2023 ~ Jun.2027"). */
  period: string
  supervisorPrefix: Bilingual
  /** Ordered runs of text; any run with `href` renders as an inline link on that text. */
  supervisorParts: SupervisorPart[]
  /** Optional, e.g. undergraduate major. */
  major?: Bilingual
  direction: Bilingual
}

export interface Address {
  label: Bilingual
  lines: string
  postalCode: string
}

export interface Profile {
  name: string
  /** Short first name used for the hero greeting. */
  firstName: string
  /** Full display name shown as the H1 in the hero, page title, navbar, footer. */
  fullName?: string
  title: Bilingual
  affiliation: Bilingual
  /** Two-column affiliation blocks shown directly under the name in the hero. */
  affiliations: HeroAffiliation[]
  location: string
  /** Contact details shown in the footer. */
  email: string
  /** Optional secondary email (e.g. a personal Gmail). */
  emailGmail?: string
  phone: string
  /** Optional secondary phone (e.g. a Taiwan mobile number). */
  phoneTW?: string
  /** Optional mailing addresses shown under the phone number. */
  addresses?: Address[]
  /** Path under /public or an absolute URL. Use a square image for best results. */
  photo: string
  /** Each entry is rendered as a separate paragraph. */
  bio: Bilingual[]
  /** Research direction pills shown under the hero. */
  researchInterests: Bilingual[]
  socials: SocialLink[]
}

export type PubLinkType = 'pdf' | 'code' | 'project' | 'slides' | 'doi'

export interface PublicationLink {
  type: PubLinkType
  href: string
  label?: string
}

export interface Publication {
  id: string
  title: Bilingual
  /** Author names. The name matching Profile.name is auto-highlighted. */
  authors: string[]
  /** Authors who contributed equally (co-first authors); marked with † and a footnote. */
  equalContribution?: string[]
  /** Venue / journal / conference name. */
  venue: Bilingual
  year: number
  /** e.g. "Conference", "Journal", "Preprint". */
  kind: Bilingual
  tags: Bilingual[]
  /** Mark as a highlighted / selected paper (adds a small badge). */
  highlight?: boolean
  links: PublicationLink[]
  /** BibTeX citation text shown when the button is expanded. */
  bibtex: string
}

export interface NewsItem {
  id: string
  /** Display date, e.g. "Aug 2025" or "2025". Sorted newest-first. */
  date: string
  /** ISO date used for sorting (optional). */
  iso?: string
  title: Bilingual
  description?: Bilingual
  tag?: Bilingual
  link?: { href: string; label: string }
}

export type ProjectLinkType = 'paper' | 'code' | 'demo'

export interface Project {
  id: string
  title: Bilingual
  description: Bilingual
  keywords: Bilingual[]
  status?: Bilingual
  links: { type: ProjectLinkType; href: string; label?: string }[]
}

export interface TimelineItem {
  id: string
  /** Job title or degree. */
  role: Bilingual
  /** Company / lab / university. */
  organization: Bilingual
  location?: string
  start: string
  end: string
  description?: Bilingual
  bullets?: Bilingual[]
  /** Optional logo shown next to the entry (path under /public). */
  logo?: string
  /** Optional collapsible detail block (major, research bullets, etc.), collapsed by default. */
  detail?: {
    major?: Bilingual
    bullets?: Bilingual[]
  }
}

export interface FeaturedProject {
  id: string
  title: Bilingual
  period: string
  /** ISO-ish sort key, newest first. */
  sortKey: string
  photo: string
  /** Optional gallery of photos shown as a left/right carousel (e.g. multi-panel figures). */
  photos?: string[]
  /** Optional collapsible detail — full description + keywords, collapsed by default. */
  detail?: {
    description: Bilingual
    keywords?: Bilingual[]
    status?: Bilingual
  }
}

export interface Interest {
  label: Bilingual
  icon: string
  /** Optional link to a video / portfolio page for this interest. */
  link?: string
}
