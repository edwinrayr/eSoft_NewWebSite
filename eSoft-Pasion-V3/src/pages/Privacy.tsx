import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();

  // Scroll al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-esoft-dark pt-32 pb-20 px-6 relative">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-b border-white/10 pb-10"
        >
          <div className="flex items-center gap-3 text-esoft-accent mb-4">
            <ShieldCheck size={32} />
            <span className="font-bold tracking-widest uppercase text-sm">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            {t('privacyPage.title')}
          </h1>
          <h2 className="text-2xl text-gray-400 font-light">
            {t('privacyPage.subtitle')}
          </h2>
        </motion.div>

        {/* Contenido de Políticas */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 text-gray-300 leading-relaxed text-lg"
        >
          {/* Intro */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
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
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-esoft-accent rounded-full"></span>
                {t(`privacyPage.sections.${section}.title`)}
              </h3>
              <p className="pl-5 border-l border-white/5 ml-0.5">
                {t(`privacyPage.sections.${section}.content`)}
              </p>
            </div>
          ))}

        </motion.div>

        {/* Footer del documento */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center text-gray-500 text-sm flex items-center justify-center gap-2">
          <Lock size={14} />
          <p>eSoft Pasión por la Tecnología 2006 SA de CV - {new Date().getFullYear()}</p>
        </div>

      </div>
    </div>
  );
}