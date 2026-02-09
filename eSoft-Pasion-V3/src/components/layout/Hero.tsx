import { motion } from 'framer-motion';
import { ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Importante para que funcionen los cambios

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* 1. FONDO CON EFECTO "AURORA" */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-esoft-accent/20 rounded-full blur-[120px] opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* 2. BADGE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-esoft-charcoal bg-white/5 backdrop-blur-sm hover:border-esoft-accent/50 transition-colors cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-esoft-accent animate-pulse"></span>
            <span className="text-sm font-medium text-esoft-gray-light tracking-wide">
              {t('hero.badge')}
            </span>
            <ChevronRight size={14} className="text-esoft-charcoal" />
          </div>
        </motion.div>

        {/* 3. TÍTULO PRINCIPAL */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tight leading-none mb-6"
        >
          {t('hero.titleMain')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-esoft-gray-light to-gray-500">
            {t('hero.titleIdeas')}
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent to-emerald-400">
            {t('hero.titleSoftware')}
          </span>
        </motion.h1>

        {/* 4. SUBTÍTULO */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-esoft-gray-light max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

        {/* 5. BOTONES DE ACCIÓN */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="/contacto" className="group relative px-8 py-4 bg-esoft-accent text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative flex items-center gap-2">
              {t('hero.btnPrimary')} <ArrowRight size={20} />
            </span>
          </a>

          <a href="/Portafolio_Empresarial_eSoft_México.pdf" target="_blank" className="px-8 py-4 bg-transparent border border-esoft-charcoal text-white font-medium rounded-lg hover:bg-white/5 transition-all flex items-center gap-2 group">
            <FileText size={20} className="text-esoft-gray-light group-hover:text-white transition-colors" />
            {t('hero.btnSecondary')}
          </a>
        </motion.div>

      </div>
    </section>
  );
}