import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MatrixBackground from '../ui/MatrixBackground';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 bg-[#f8fafc] dark:bg-[#050d0a]">

      {/* 1. Animación de Fondo (Canvas de Escudos) */}
      <div className="absolute inset-0 z-0">
        <MatrixBackground />
      </div>

      {/* 2. Capas de profundidad (Overlays) */}

      {/* --- OVERLAY MODO CLARO CORREGIDO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none block dark:hidden">
        {/* Velo blanco ultra ligero SIN BLUR para que las líneas de los escudos sigan siendo afiladas y nítidas */}
        <div className="absolute inset-0 bg-white/40" />

        {/* "Halo" de luz blanco en el centro para asegurar que el texto oscuro se lea al 100% sobre los escudos */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(248,250,252,0.9)_15%,transparent_65%)]" />

        {/* Suavizado en los bordes superior e inferior para fusionarse con la página */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/80 via-transparent to-[#f8fafc]" />
      </div>

      {/* --- OVERLAY MODO OSCURO --- */}
      <div className="absolute inset-0 z-0 hidden dark:block">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#050d0a_10%,transparent_70%)] opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d0a]/30 via-transparent to-[#050d0a] pointer-events-none" />
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20 pb-32 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Píldora de estado (Badge) */}
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/60 dark:bg-black/30 border border-slate-200 dark:border-white/10 backdrop-blur-md mb-8 shadow-sm dark:shadow-xl transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-esoft-accent animate-pulse shadow-[0_0_8px_rgba(27,159,136,0.8)]" />
            <span className="text-slate-600 dark:text-gray-300 text-xs font-bold uppercase tracking-[0.2em]">
              {t('hero.badge')}
            </span>
          </div>

          {/* Tipografía Principal */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-extrabold tracking-tight mb-8 leading-[1.1] max-w-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-white/80 transition-colors drop-shadow-sm dark:drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              {t('hero.titleMain')}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent via-emerald-400 to-teal-300 drop-shadow-sm dark:drop-shadow-[0_0_30px_rgba(27,159,136,0.5)] transition-all">
              {t('hero.titleIdeas')} {t('hero.titleSoftware')}
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light transition-colors drop-shadow-none dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {t('hero.description')}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto">
            <Link
              to="/contacto"
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-esoft-accent to-emerald-600 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_10px_30px_-10px_rgba(27,159,136,0.4)] dark:shadow-[0_10px_30px_-10px_rgba(27,159,136,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(27,159,136,0.6)] dark:hover:shadow-[0_15px_40px_-10px_rgba(27,159,136,0.8)] hover:-translate-y-1 hover:scale-105 active:scale-95 ring-1 ring-white/20"
            >
              <span>{t('hero.btnPrimary')}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="/Portafolio_Empresarial_eSoft.pdf"
              download="Portafolio_eSoft.pdf"
              className="w-full sm:w-auto px-10 py-4 bg-white/80 dark:bg-black/30 hover:bg-white dark:hover:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-xl hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-sm dark:shadow-xl"
            >
              <Download size={18} className="text-slate-400 dark:text-gray-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors" />
              <span>{t('hero.btnSecondary')}</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ícono animado de Mouse responsivo */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-slate-300 dark:border-white/20 rounded-full flex justify-center p-1.5 md:p-2 backdrop-blur-md bg-white/50 dark:bg-black/40 shadow-sm dark:shadow-lg transition-colors">
          <div className="w-1 h-1.5 md:h-2 bg-esoft-accent rounded-full shadow-[0_0_8px_rgba(27,159,136,0.4)] dark:shadow-[0_0_8px_rgba(27,159,136,0.8)]" />
        </div>
      </motion.div>

    </div>
  );
}