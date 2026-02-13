import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react'; // Usaremos un icono más limpio, o el tuyo

export default function WhatsAppButton() {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "525564604183";
  const message = t('whatsapp.message');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex items-end justify-end">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ y: -5 }}
        whileActive={{ scale: 0.95 }}
        className="relative flex items-center bg-white/10 dark:bg-[#0a110e]/60 backdrop-blur-2xl border border-white/20 dark:border-white/10 p-4 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_40px_-15px_rgba(27,159,136,0.2)] group overflow-hidden transition-colors duration-500 hover:border-esoft-accent/40"
      >
        {/* Aura de brillo interna */}
        <div className="absolute inset-0 bg-gradient-to-br from-esoft-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex items-center gap-3">
          {/* Contenedor del Icono */}
          <div className="relative flex items-center justify-center">
            {/* Punto de Disponibilidad (Online) */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-esoft-accent rounded-full border-2 border-white dark:border-esoft-dark z-20 animate-pulse shadow-[0_0_8px_rgba(27,159,136,0.8)]" />

            <div className="w-10 h-10 bg-esoft-accent text-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-[10deg] transition-transform duration-300">
              {/* SVG Oficial de WhatsApp simplificado */}
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.181-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.522-2.961-2.638-.086-.115-.694-.925-.694-1.769 0-.843.433-1.258.589-1.432.155-.174.339-.218.452-.218.114 0 .227.001.325.005.103.004.242-.039.378.292.136.332.467 1.14.508 1.223.042.083.07.18.014.293-.056.113-.085.184-.17.282-.084.098-.178.219-.253.294-.085.086-.174.179-.075.35.099.171.439.724.944 1.175.649.579 1.196.761 1.365.844.17.084.27.069.37-.046.1-.115.424-.493.538-.661.113-.167.227-.14.382-.083.155.057.983.464 1.153.549.169.085.283.127.325.197.042.071.042.411-.102.817z" />
              </svg>
            </div>
          </div>

          {/* Texto Expansible */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="whitespace-nowrap pr-2"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-esoft-accent font-bold">
                    Online
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {t('whatsapp.tooltip', '¿Hablamos?')}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.a>

      {/* Onda de choque (Efecto de radar) */}
      <div className="absolute bottom-4 right-4 -z-10">
        <motion.div
          animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-12 bg-esoft-accent rounded-full blur-md"
        />
      </div>
    </div>
  );
}