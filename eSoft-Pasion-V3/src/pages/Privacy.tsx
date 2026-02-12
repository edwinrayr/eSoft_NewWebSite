import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // CONTENEDOR: Fondo adaptable con transiciones suaves
    <div className="min-h-screen bg-white dark:bg-esoft-dark pt-32 pb-20 px-6 relative transition-colors duration-300 overflow-hidden">
      
      {/* 1. CAPA DE ANIMACIÓN VERDE MENTA (Solo modo Claro) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500">
         <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/50 to-white bg-[length:200%_200%] animate-gradient-x" />
      </div>

      {/* Fondo decorativo sutil (Modo Oscuro) */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black/40 to-transparent pointer-events-none hidden dark:block" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Encabezado adaptable */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-b border-gray-200 dark:border-white/10 pb-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 text-esoft-accent mb-4">
            <ShieldCheck size={32} />
            <span className="font-bold tracking-widest uppercase text-sm">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            {t('privacyPage.title')}
          </h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-400 font-light transition-colors">
            {t('privacyPage.subtitle')}
          </h2>
        </motion.div>

        {/* Contenido de Políticas adaptable */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
        >
          {/* Intro: Glassmorphism en modo claro */}
          <div className="bg-white/60 dark:bg-white/5 p-8 rounded-3xl border border-gray-200 dark:border-white/10 backdrop-blur-md shadow-xl dark:shadow-none transition-all">
            <p>{t('privacyPage.intro')}</p>
          </div>

          {/* Secciones Dinámicas */}
          {[
            'info',
            'usage',
            'cookies',
            'links',
            'control'
          ].map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3 transition-colors">
                <span className="w-1.5 h-6 bg-esoft-accent rounded-full"></span>
                {t(`privacyPage.sections.${section}.title`)}
              </h3>
              <p className="pl-5 border-l border-gray-200 dark:border-white/5 ml-0.5 text-gray-600 dark:text-gray-400">
                {t(`privacyPage.sections.${section}.content`)}
              </p>
            </div>
          ))}

        </motion.div>

        {/* Footer del documento adaptable */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-white/10 text-center text-gray-500 text-sm flex items-center justify-center gap-2">
          <Lock size={14} />
          <p>eSoft Pasión por la Tecnología 2006 SA de CV - {new Date().getFullYear()}</p>
        </div>

      </div>
    </div>
  );
}