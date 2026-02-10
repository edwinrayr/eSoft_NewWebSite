import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // AGREGADO: Ahora también extraemos el 'hash' (el fragmento con # de la URL)
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si hay un hash en la URL (ej. #historia)
    if (hash) {
      // AGREGADO: Usamos un setTimeout muy breve para darle tiempo a React 
      // de renderizar la página antes de buscar el elemento.
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          // Hacemos scroll suave hacia el elemento
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si no hay hash, subimos al tope de la página sin animaciones
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // AGREGADO: Se ejecuta cuando cambia la ruta o el hash

  return null;
}