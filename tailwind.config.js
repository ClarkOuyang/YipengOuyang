/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
        serif: [
          'Newsreader',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
      colors: {
        // Warm off-white "paper" page background for the academic-journal look.
        paper: '#F7F3EA',
        // Colors are driven by CSS variables (defined in src/index.css) so the
        // accent can be changed at runtime. Each shade = rgb(var(--x-NN) / a).
        brand: {
          50: 'rgb(var(--brand-50) / <alpha-value>)',
          100: 'rgb(var(--brand-100) / <alpha-value>)',
          200: 'rgb(var(--brand-200) / <alpha-value>)',
          300: 'rgb(var(--brand-300) / <alpha-value>)',
          400: 'rgb(var(--brand-400) / <alpha-value>)',
          500: 'rgb(var(--brand-500) / <alpha-value>)',
          600: 'rgb(var(--brand-600) / <alpha-value>)',
          700: 'rgb(var(--brand-700) / <alpha-value>)',
          800: 'rgb(var(--brand-800) / <alpha-value>)',
          900: 'rgb(var(--brand-900) / <alpha-value>)',
          950: 'rgb(var(--brand-950) / <alpha-value>)',
        },
        olive: {
          50: 'rgb(var(--olive-50) / <alpha-value>)',
          100: 'rgb(var(--olive-100) / <alpha-value>)',
          200: 'rgb(var(--olive-200) / <alpha-value>)',
          300: 'rgb(var(--olive-300) / <alpha-value>)',
          400: 'rgb(var(--olive-400) / <alpha-value>)',
          500: 'rgb(var(--olive-500) / <alpha-value>)',
          600: 'rgb(var(--olive-600) / <alpha-value>)',
          700: 'rgb(var(--olive-700) / <alpha-value>)',
          800: 'rgb(var(--olive-800) / <alpha-value>)',
          900: 'rgb(var(--olive-900) / <alpha-value>)',
        },
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 4px 16px -4px rgb(0 0 0 / 0.08)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
