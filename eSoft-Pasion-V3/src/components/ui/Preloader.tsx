import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Preloader() {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Simulación de carga orgánica (no lineal)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Incrementos aleatorios para que se sienta "vivo"
        const randomStep = Math.random() * 8;
        return Math.min(prev + randomStep, 100);
      });
    }, 100);

    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(interval);
    };
  }, []);

  // Variantes para la aparición de las letras
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        clipPath: "inset(0 0 100% 0)", // Efecto de persiana hacia arriba
        transition: { duration: 1, ease: [0.9, 0, 0.1, 1] }
      }}
      className="fixed inset-0 z-[9999] bg-[#050d0a] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. Fondo de Aura Dinámica */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(27,159,136,0.15)_0%,_transparent_70%)]"
      />

      <div className="relative flex flex-col items-center">

        {/* 2. Logo con Resplandor de Escaneo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-10 relative"
        >
          <img
            src="/esoftlogo.png"
            alt="eSoft"
            className="h-16 w-auto brightness-125"
          />
          {/* Línea de luz que pasa sobre el logo */}
          <motion.div
            animate={{ left: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
          />
        </motion.div>

        {/* 3. Frase: Innovando la Tecnología */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <div className="flex gap-[0.2em] text-white font-heading font-extralight text-xl md:text-2xl uppercase tracking-[0.5em]">
            {"INNOVANDO".split("").map((l, i) => (
              <motion.span key={i} variants={letterVariants}>{l}</motion.span>
            ))}
          </div>

          <div className="flex gap-[0.2em] text-esoft-accent font-heading font-bold text-sm md:text-base uppercase tracking-[0.8em] opacity-80">
            {"LA TECNOLOGÍA".split("").map((l, i) => (
              <motion.span key={i} variants={letterVariants}>{l}</motion.span>
            ))}
          </div>
        </motion.div>

        {/* 4. Indicador de Carga Minimalista (Línea infinita) */}
        <div className="mt-16 w-48 h-[1px] bg-white/5 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-esoft-accent shadow-[0_0_10px_#1b9f88]"
            initial={{ x: "-100%" }}
            animate={{ x: `${progress - 100}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Porcentaje numérico ultra pequeño */}
        <motion.span
          className="mt-4 text-[10px] text-gray-600 font-mono tracking-tighter"
        >
          SYS_LOAD: {Math.round(progress)}%
        </motion.span>
      </div>

      {/* Grid de puntos sutil de fondo */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1b9f88 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
    </motion.div>
  );
}