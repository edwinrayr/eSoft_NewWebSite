/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      colors: {
        'esoft-dark': '#171717',
        'esoft-charcoal': '#262626',
        'esoft-accent': '#1b9f88',
        'esoft-gray-light': 'hsl(0, 0%, 80%)',
        'esoft-gray-lighter': 'hsl(0, 0%, 94%)',
        'esoft-white': '#ffffff',
      },
      backgroundImage: {
        'tech-glow': 'radial-gradient(circle at 50% 0%, rgba(27, 159, 136, 0.15) 0%, transparent 70%)',
      },
      keyframes: {
        // PERMITE EL MOVIMIENTO DE PATRONES (ESCUDOS/GRIDS)
        'shield-scroll': {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '35px 40px' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
        'shield-scroll': 'shield-scroll 10s linear infinite', // NUEVA
        'gradient-x': 'gradient-x 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}