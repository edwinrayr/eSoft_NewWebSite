import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ArrowRight } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';

export default function SearchOverlay() {
  const { isOpen, closeSearch } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  // Enfocar automáticamente el input cuando se abre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    
    // Cerrar con la tecla ESC
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeSearch]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-esoft-dark/95 backdrop-blur-md flex items-start justify-center pt-32 px-6"
        >
          {/* Botón Cerrar */}
          <button 
            onClick={closeSearch}
            className="absolute top-8 right-8 text-esoft-gray-light hover:text-esoft-accent transition-colors"
          >
            <X size={40} strokeWidth={1.5} />
          </button>

          <div className="w-full max-w-4xl space-y-8">
            {/* Campo de Búsqueda Gigante */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-esoft-accent w-8 h-8 md:w-12 md:h-12" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Buscar servicios, tecnologías..."
                className="w-full bg-transparent border-b-2 border-esoft-charcoal text-3xl md:text-5xl font-heading text-white py-6 pl-16 md:pl-24 focus:outline-none focus:border-esoft-accent transition-colors placeholder:text-esoft-charcoal"
              />
            </motion.div>

            {/* Sugerencias Rápidas */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-sm text-esoft-gray-light font-sans uppercase tracking-widest">Sugerencias</p>
              <div className="flex flex-wrap gap-4">
                {['Desarrollo Web', 'Apps Móviles', 'Consultoría', 'Contacto'].map((item) => (
                  <button key={item} className="flex items-center gap-2 text-esoft-gray-lighter hover:text-esoft-accent transition-colors group">
                    <ArrowRight size={16} className="text-esoft-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-lg">{item}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}