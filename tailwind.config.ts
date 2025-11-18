import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#9A3412',
        saffron: '#F59E0B',
        cream: '#FAF3DD',
        charcoal: '#1F2937',
        gold: '#D4AF37',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'Satoshi', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

