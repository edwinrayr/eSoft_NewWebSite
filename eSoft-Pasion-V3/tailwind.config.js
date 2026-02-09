/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. TIPOGRAFÍAS
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],   // Texto general
        heading: ['Oswald', 'sans-serif'], // Títulos
      },
      
      // 2. COLORES DE ESOFT
      colors: {
        esoft: {
          dark: '#171717',        // Fondo principal (Eerie Black)
          charcoal: '#262626',    // Fondo secundario / Tarjetas
          accent: '#1b9f88',      // Color principal (Verde/Teal)
          gray: {
            light: 'hsl(0, 0%, 80%)',   // Textos claros
            lighter: 'hsl(0, 0%, 94%)', // Blancos suaves
          },
          white: '#ffffff',
        }
      },

      // 3. IMÁGENES DE FONDO (Efectos de luz)
      backgroundImage: {
        'tech-glow': 'radial-gradient(circle at 50% 0%, rgba(27, 159, 136, 0.15) 0%, transparent 70%)',
      },

      // 4. ANIMACIONES (Para el Marquee/Cinta infinita)
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Se mueve a la mitad para dar efecto infinito
        }
      },
      animation: {
        scroll: 'scroll 30s linear infinite', // Velocidad ajustable (30s es suave)
      }
    },
  },
  plugins: [],
}