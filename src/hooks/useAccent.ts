import { useEffect } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// Site accent color.
//
// Takes ONE color (the brand-500 accent). We derive a full, harmonious
// shade ramp (50–950) for both `brand` and the complementary `olive` accent, and
// write them as space-separated RGB channels onto :root CSS variables. Those
// variables feed Tailwind's `rgb(var(--brand-NN) / <alpha-value>)` colors, so the
// whole site re-themes instantly without a rebuild.
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'academic-site-accent'

// The site's accent (brand-500). The navbar color picker was removed, so this is fixed.
const DEFAULT_ACCENT = '#3da377'

// ── color math ───────────────────────────────────────────────────────────────

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  const n = parseInt(
    h.length === 3
      ? h.split('').map((c) => c + c).join('')
      : h,
    16,
  )
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

function rgbToHsl([r, g, b]: [number, number, number]): [number, number, number] {
  const rn = r / 255, gn = g / 255, bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  let h = 0
  const l = (max + min) / 2
  const d = max - min
  let s = 0
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1))
    switch (max) {
      case rn: h = ((gn - bn) / d) % 6; break
      case gn: h = (bn - rn) / d + 2; break
      default: h = (rn - gn) / d + 4
    }
    h *= 60
    if (h < 0) h += 360
  }
  return [h, s * 100, l * 100]
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360; s /= 100; l /= 100
  if (s === 0) {
    const v = Math.round(l * 255)
    return [v, v, v]
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  const hue = (t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }
  return [
    Math.round(hue(h + 1 / 3) * 255),
    Math.round(hue(h) * 255),
    Math.round(hue(h - 1 / 3) * 255),
  ]
}

// Lightness per shade (50 → 950). Saturation stays near the picked color's.
const SHADE_L: Record<number, number> = {
  50: 95, 100: 88, 200: 78, 300: 66, 400: 55,
  500: 45, 600: 38, 700: 32, 800: 27, 900: 22, 950: 15,
}
const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

function buildRamp(baseHex: string, hueShift = 0, satScale = 1): Record<string, string> {
  const [h, s] = rgbToHsl(hexToRgb(baseHex))
  const ramp: Record<string, string> = {}
  for (const shade of SHADES) {
    const hh = (h + hueShift + 360) % 360
    // Keep saturation close to the picked color, easing off at the lightest/darkest ends.
    const sat = Math.max(8, Math.min(95, s * satScale * (shade <= 100 ? 0.45 : shade >= 900 ? 0.95 : 0.85)))
    const rgb = hslToRgb(hh, sat, SHADE_L[shade])
    ramp[shade] = rgb.join(' ')
  }
  return ramp
}

function applyAccent(baseHex: string) {
  const root = document.documentElement
  const brand = buildRamp(baseHex, 0, 1)
  const olive = buildRamp(baseHex, 38, 0.9) // complementary-ish offset for the secondary accent
  for (const shade of SHADES) {
    root.style.setProperty(`--brand-${shade}`, brand[shade])
    root.style.setProperty(`--olive-${shade}`, olive[shade])
  }
}

// ── hook ───────────────────────────────────────────────────────────────────────

export function useAccent() {
  useEffect(() => {
    applyAccent(DEFAULT_ACCENT)
    // Drop any color a visitor picked back when the picker existed.
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* storage may be unavailable; ignore */
    }
  }, [])
}
