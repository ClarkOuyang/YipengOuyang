import { useTheme } from './hooks/useTheme'
import { useAccent } from './hooks/useAccent'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import News from './components/News'
import Gallery from './components/Gallery'
import Publications from './components/Publications'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  useAccent() // applies the saved/selected accent color across the site

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-paper text-slate-800 dark:bg-[#0d1320] dark:text-slate-200">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero />
          <News />
          <Gallery />
          <Publications />
          <Experience />
          <Interests />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
