# Yipeng Ouyang’s Homepage

A modern, minimalist academic personal website built with **React + Vite + TypeScript + Tailwind CSS**. Features a fixed responsive navbar, dark/light theme toggle, hero/about, news timeline, research projects, publications (with expandable + copyable BibTeX), and an education/experience timeline.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

Requires Node.js 18+.

## Editing your content

All personal data lives in typed files under `src/data/`. Edit these and the site updates automatically — no component changes needed:

| File | What to edit |
|------|--------------|
| `src/data/profile.ts` | Name, title, affiliation, bio, research-interest pills, social/CV links |
| `src/data/publications.ts` | Publications (sorted newest-first by year); your name is auto-highlighted in the author list; BibTeX per paper |
| `src/data/news.ts` | News / announcements timeline (newest first) |
| `src/data/projects.ts` | Research projects & themes |
| `src/data/timeline.ts` | Education and experience entries |

### Your photo
Drop a square image (~400×400) at `public/photo.jpg` and set `photo: '/photo.jpg'` in `src/data/profile.ts`.
Until then, a bundled `public/photo.svg` placeholder is shown automatically.

### CV / PDF
Place your CV at `public/cv.pdf` and the `cv` social link will download it.

## Theme / colors
The cool academic palette (deep navy `brand`, olive-green `olive` accent) is defined in `tailwind.config.js`.
Dark mode follows the OS preference by default and is toggleable via the navbar button (persisted in `localStorage`).

## Project structure
```
src/
  data/        # <-- edit your information here
  components/  # section components (Navbar, Hero, News, Projects, Publications, Experience, Footer, SocialIcons)
  hooks/       # useTheme (dark/light + persistence)
  App.tsx      # composition root
  index.css    # Tailwind layers + shared component classes
```
