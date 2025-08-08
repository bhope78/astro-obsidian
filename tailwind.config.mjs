/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bonita-orange': {
          DEFAULT: '#f39c12',
          light: '#f1c40f',
          dark: '#e67e22',
        },
        'bonita-dark': {
          DEFAULT: '#0c0c0c',
          light: '#1a1a2e',
          medium: '#16213e',
        }
      },
      backgroundImage: {
        'bonita-gradient': 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}