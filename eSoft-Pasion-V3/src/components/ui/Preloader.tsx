import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // <--- 1. Importar el hook

export default function Preloader() {
  const { t } = useTranslation(); // <--- 2. Iniciar el hook

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-esoft-dark flex flex-col items-center justify-center"
    >
      {/* Contenedor del Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 bg-esoft-accent/20 blur-xl rounded-full animate-pulse" />
        <img 
          src="/esoftlogo.png" 
          alt="eSoft Loading" 
          className="h-16 w-auto relative z-10"
        />
      </motion.div>

      {/* Barra de Progreso */}
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-esoft-accent shadow-[0_0_10px_rgba(37,211,102,0.8)]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </div>

      {/* Texto de carga (TRADUCIDO) */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-esoft-gray-light text-xs tracking-[0.2em] uppercase font-bold"
      >
        {t('preloader.text')} 
      </motion.p>
    </motion.div>
  );
}