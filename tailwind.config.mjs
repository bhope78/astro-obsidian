/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Professional healthcare/nonprofit color palette
        'bonita': {
          // Primary: Teal (trustworthy, healthcare, calming)
          50: 'oklch(0.96 0.013 180.95)',   // Very light teal
          100: 'oklch(0.91 0.031 183.61)',  // Light teal
          200: 'oklch(0.83 0.062 185.94)',  // Lighter teal
          300: 'oklch(0.72 0.092 188.71)',  // Light-medium teal
          400: 'oklch(0.58 0.11 192.23)',   // Medium teal
          500: 'oklch(0.50 0.13 194.77)',   // Main teal
          600: 'oklch(0.42 0.13 196.66)',   // Primary brand color (#0d9488)
          700: 'oklch(0.35 0.12 198.29)',   // Dark teal
          800: 'oklch(0.29 0.10 200.35)',   // Darker teal
          900: 'oklch(0.24 0.08 202.75)',   // Darkest teal
          950: 'oklch(0.15 0.05 208.25)',   // Very dark teal
        },
        'bonita-emerald': {
          // Secondary: Emerald (growth, healing, nature)
          50: 'oklch(0.96 0.013 156.57)',
          100: 'oklch(0.91 0.026 154.29)',
          200: 'oklch(0.84 0.052 153.75)',
          300: 'oklch(0.74 0.078 154.07)',
          400: 'oklch(0.61 0.097 155.59)',
          500: 'oklch(0.51 0.11 158.07)',
          600: 'oklch(0.43 0.11 160.62)',   // Secondary brand color (#059669)
          700: 'oklch(0.35 0.09 163.23)',
          800: 'oklch(0.29 0.07 166.18)',
          900: 'oklch(0.24 0.06 169.67)',
          950: 'oklch(0.14 0.04 175.15)',
        },
        'bonita-slate': {
          // Neutral: Modern slate grays
          50: 'oklch(0.98 0.003 247.86)',
          100: 'oklch(0.96 0.006 248.89)',
          200: 'oklch(0.91 0.011 251.40)',
          300: 'oklch(0.83 0.017 252.78)',
          400: 'oklch(0.66 0.024 255.85)',
          500: 'oklch(0.53 0.026 256.85)',
          600: 'oklch(0.43 0.025 257.28)',
          700: 'oklch(0.35 0.022 257.72)',
          800: 'oklch(0.27 0.017 258.38)',
          900: 'oklch(0.21 0.014 260.93)',
          950: 'oklch(0.13 0.013 264.68)',
        }
      },
      backgroundImage: {
        'bonita-gradient': 'linear-gradient(135deg, oklch(0.42 0.13 196.66) 0%, oklch(0.43 0.11 160.62) 100%)',
        'bonita-gradient-light': 'linear-gradient(135deg, oklch(0.96 0.013 180.95) 0%, oklch(0.96 0.013 156.57) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}