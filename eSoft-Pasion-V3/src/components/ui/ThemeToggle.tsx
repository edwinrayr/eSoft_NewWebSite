import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import useTheme from '../../hooks/useTheme'; // Asegúrate de que esta ruta sea la correcta en tu proyecto

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full transition-all duration-300 focus:outline-none overflow-hidden group
      border border-slate-200 dark:border-white/10
      bg-white/60 dark:bg-white/5 backdrop-blur-md
      hover:border-esoft-accent/50 dark:hover:border-esoft-accent/50
      shadow-sm dark:shadow-none"
      aria-label="Cambiar Tema"
    >
      {/* Aura esmeralda muy sutil al hacer hover */}
      <div className="absolute inset-0 bg-esoft-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none" />

      {/* AnimatePresence permite animar el icono que "sale" y el que "entra" */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3, ease: "backInOut" }}
          className="relative z-10 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:text-esoft-accent dark:group-hover:text-esoft-accent transition-colors"
        >
          {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}