import { Moon, Sun } from 'lucide-react';
import useTheme from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 focus:outline-none 
      border border-gray-300 dark:border-white/10
      /* Modo Claro */
      bg-gray-100 text-yellow-600 hover:bg-gray-200
      /* Modo Oscuro */
      dark:bg-white/10 dark:text-yellow-400 dark:hover:bg-white/20"
      aria-label="Cambiar Tema"
    >
      {/* CAMBIO AQUÍ: Invertí el orden de los iconos */}
      {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}