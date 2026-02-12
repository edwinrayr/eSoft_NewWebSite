import { useEffect, useState } from 'react';

export default function useTheme() {
  // 1. Verificamos si hay un tema guardado, si no, usamos 'dark' por defecto
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    // 2. Quitamos la clase anterior para evitar conflictos
    root.classList.remove('light', 'dark');
    // 3. Agregamos la clase actual
    root.classList.add(theme);
    // 4. Guardamos la preferencia
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}