import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MatrixBackground from '../ui/MatrixBackground'; // <--- IMPORTAMOS EL FONDO

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-esoft-dark">
      
      {/* 1. FONDO ANIMADO (MATRIX) */}
      <MatrixBackground />
      
      {/* 2. CAPAS DE OSCURECIMIENTO (Para que el texto se lea bien) */}
      {/* Degradado radial para resaltar el centro */}
      <div className="absolute inset-0 bg-gradient-to-b from-esoft-dark/80 via-transparent to-esoft-dark z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-esoft-accent text-sm font-medium mb-6 backdrop-blur-sm">
            {t('hero.badge')}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            {t('hero.titleMain')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-esoft-accent to-emerald-400">
              {t('hero.titleIdeas')} {t('hero.titleSoftware')}
            </span>
          </h1>

          <p className="text-xl text-esoft-gray-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contacto" 
              className="px-8 py-4 bg-esoft-accent hover:bg-emerald-600 text-white font-bold rounded-full transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
            >
              {t('hero.btnPrimary')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {/* AGREGADO: Atributo download y ruta optimizada para la descarga directa */}
            <a 
              href="/Portafolio_Empresarial_eSoft.pdf" 
              download="Portafolio_eSoft.pdf"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Download size={20} />
              {t('hero.btnSecondary')}
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decoración inferior (Scroll indicator opcional) */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}