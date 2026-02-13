import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Bot, RefreshCw, Database, Headphones, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

// Componente para la Tarjeta con Interacción Premium
const ArchitectureCard = ({ item, index, t }: { item: any, index: number, t: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Efecto de inclinación (tilt) sutil estilo Apple
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  function onMouseMove(event: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Variantes de animación para los iconos
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: item.key === "lifecycle" ? 180 : item.key === "automation" ? [0, -10, 10, 0] : 0,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative p-10 rounded-[2.5rem] bg-white/40 dark:bg-white/[0.02] backdrop-blur-3xl border border-gray-200/50 dark:border-white/5 flex flex-col items-center text-center transition-colors duration-500 hover:border-esoft-accent/40"
    >
      {/* Luz de fondo (Spotlight) que sigue al mouse dentro de la tarjeta */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"
        style={{
          background: `radial-gradient(600px circle at ${useTransform(x, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(y, [-0.5, 0.5], ["0%", "100%"])}, rgba(27, 159, 136, 0.08), transparent 40%)`
        }}
      />

      <div className="relative z-10 flex flex-col items-center" style={{ transform: "translateZ(50px)" }}>
        {/* Icono con Aura Animada */}
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          className="relative mb-8 w-16 h-16 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-esoft-accent shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-none border border-gray-100 dark:border-white/10"
        >
          <div className="absolute inset-0 bg-esoft-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
          {item.icon}
        </motion.div>

        <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-esoft-accent transition-colors">
          {t(`architecture.cards.${item.key}.title`)}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
          {t(`architecture.cards.${item.key}.desc`)}
        </p>
      </div>

      {/* Indicador de esquina inteligente */}
      <div className="absolute top-6 right-6 overflow-hidden w-6 h-6">
        <motion.div
          animate={{ x: isActive => hovered ? 0 : 20 }}
          className="w-full h-full border-t-2 border-r-2 border-esoft-accent/0 group-hover:border-esoft-accent/40 transition-all duration-500"
        />
      </div>
    </motion.div>
  );
};

export default function Architecture() {
  const { t } = useTranslation();

  const features = [
    { key: "security", icon: <ShieldCheck size={28} /> },
    { key: "automation", icon: <Bot size={28} /> },
    { key: "lifecycle", icon: <RefreshCw size={28} /> },
    { key: "assets", icon: <Database size={28} /> },
    { key: "support", icon: <Headphones size={28} /> },
    { key: "digital", icon: <Rocket size={28} /> }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-transparent">
      {/* Auroras de fondo dinámicas */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-esoft-accent/5 blur-[140px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-esoft-accent/10 border border-esoft-accent/20 text-esoft-accent text-xs font-bold tracking-[0.3em] uppercase mb-6"
          >
            {t('architecture.badge')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter mb-8 text-gray-900 dark:text-white"
          >
            <span className="opacity-70 dark:opacity-50">{t('architecture.titleLine1')}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent to-emerald-400">
              {t('architecture.titleLine2')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            {t('architecture.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 [perspective:1500px]">
          {features.map((item, index) => (
            <ArchitectureCard key={item.key} item={item} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}