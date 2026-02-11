import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CookieBanner() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si ya se aceptaron las cookies en el localStorage
    const consent = localStorage.getItem('esoft-cookie-consent');
    if (!consent) {
      // Pequeño retraso para que la animación se vea elegante al entrar
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('esoft-cookie-consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('esoft-cookie-consent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-esoft-charcoal/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Texto e Icono */}
            <div className="flex items-start md:items-center gap-4 flex-1">
              <div className="bg-esoft-accent/20 p-3 rounded-full text-esoft-accent shrink-0">
                <Cookie size={24} />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('cookieBanner.text')}{' '}
                <Link 
                  to="/privacidad" 
                  className="text-white font-bold underline decoration-esoft-accent underline-offset-4 hover:text-esoft-accent transition-colors"
                >
                  {t('cookieBanner.link')}
                </Link>.
              </p>
            </div>

            {/* Botones */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-4 py-2.5 text-sm font-bold text-gray-400 hover:text-white transition-colors border border-white/10 rounded-lg hover:bg-white/5"
              >
                {t('cookieBanner.decline')}
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold bg-esoft-accent text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-esoft-accent/20"
              >
                {t('cookieBanner.accept')}
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}