import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MatrixBackground from '../ui/MatrixBackground'; 

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 bg-[#050d0a] dark:bg-esoft-dark">
      
      {/* 1. ANIMACIÓN DE FONDO (Escudos) */}
      <div className="absolute inset-0 z-0">
        <MatrixBackground />
      </div>

      {/* 2. CAPA PARA MODO CLARO (Mantiene el brillo menta y profundidad) */}
      <div className="absolute inset-0 z-0 pointer-events-none dark:hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-esoft-accent/20 via-transparent to-emerald-500/10 bg-[length:200%_200%] animate-gradient-x" />
         <div className="absolute inset-0 bg-gradient-to-b from-[#050d0a]/60 via-transparent to-[#050d0a]" />
      </div>

      {/* 3. CAPA PARA MODO OSCURO (Mantiene las sombras originales) */}
      <div className="absolute inset-0 z-0 hidden dark:block">
        <div className="absolute inset-0 bg-gradient-to-b from-esoft-dark/80 via-transparent to-esoft-dark pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* CONTENIDO */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-esoft-accent/10 border border-esoft-accent/30 text-esoft-accent text-sm font-bold mb-6 backdrop-blur-md uppercase tracking-widest animate-pulse-slow">
            {t('hero.badge')}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            {t('hero.titleMain')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-esoft-accent to-emerald-400">
              {t('hero.titleIdeas')} {t('hero.titleSoftware')}
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contacto" 
              className="px-10 py-4 bg-esoft-accent hover:bg-emerald-600 text-white font-bold rounded-full transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(27,159,136,0.4)] hover:-translate-y-1"
            >
              {t('hero.btnPrimary')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="/Portafolio_Empresarial_eSoft.pdf" 
              download="Portafolio_eSoft.pdf"
              className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Download size={20} />
              {t('hero.btnSecondary')}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}