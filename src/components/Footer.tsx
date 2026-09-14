import { profile } from '../data/profile'
import { useLang } from '../i18n/LanguageContext'
import { getString } from '../i18n/strings'

export default function Footer() {
  const { lang } = useLang()
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 bg-paper dark:border-slate-800 dark:bg-[#0d1320]">
      <div className="container-page flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {profile.name}. {getString('footer.rights', lang)}
        </p>
      </div>
      <p className="pb-6 text-center text-xs text-slate-400 dark:text-slate-600">
        {getString('footer.built', lang)}
      </p>
    </footer>
  )
}
