import { motion, useScroll } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Sparkles, TrendingUp, Cloud, Zap } from 'lucide-react';

export default function History() {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // AGREGADO: Imágenes y Datos Clave para rellenar el espacio vacío de la línea de tiempo
  const milestones = [
    {
      year: t('aboutPage.history.items.2006.year', '2006'),
      title: t('aboutPage.history.items.2006.title', 'El Inicio'),
      description: t('aboutPage.history.items.2006.desc', 'Nace eSoft con la visión de transformar la manera en que las empresas interactúan con la tecnología.'),
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      metric: "Fundación",
      icon: <Sparkles size={16} />
    },
    {
      year: t('aboutPage.history.items.2012.year', '2012'),
      title: t('aboutPage.history.items.2012.title', 'Expansión Nacional'),
      description: t('aboutPage.history.items.2012.desc', 'Consolidamos nuestra presencia operando proyectos de misión crítica en toda la República Mexicana.'),
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      metric: "Operación Nacional",
      icon: <TrendingUp size={16} />
    },
    {
      year: t('aboutPage.history.items.2018.year', '2018'),
      title: t('aboutPage.history.items.2018.title', 'Evolución Cloud'),
      description: t('aboutPage.history.items.2018.desc', 'Integramos soluciones nativas de nube y automatización avanzada, rediseñando nuestro portafolio.'),
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      metric: "Cloud Native",
      icon: <Cloud size={16} />
    },
    {
      year: t('aboutPage.history.items.current.year', '2026'),
      title: t('aboutPage.history.items.current.title', 'Innovación Continua'),
      description: t('aboutPage.history.items.current.desc', 'Hoy lideramos la transformación digital con IA, ciberseguridad avanzada e infraestructura resiliente.'),
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      metric: "Next-Gen Tech",
      icon: <Zap size={16} />
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-[#f8fafc] dark:bg-[#050d0a] relative overflow-hidden pb-32 transition-colors duration-500">

      {/* FONDO PREMIUM */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-esoft-accent/10 dark:bg-esoft-accent/5 blur-[150px] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />
        <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-emerald-400/10 dark:bg-emerald-500/5 blur-[150px] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />
        <div
          className="absolute inset-0 opacity-[0.5] dark:opacity-[0.15] transition-opacity duration-500"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #1b9f88 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-8 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-esoft-accent animate-pulse" />
            <span className="text-gray-600 dark:text-gray-200 text-xs font-bold uppercase tracking-[0.2em]">
              {t('aboutPage.history.badge', 'Trayectoria')}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white max-w-3xl">
            {t('aboutPage.history.titleStart', 'Evolución con ')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent via-emerald-400 to-teal-300 drop-shadow-sm">
              {t('aboutPage.history.titleEnd', 'Propósito')}
            </span>
          </h1>
        </motion.div>

        {/* CONTENEDOR DE LA LÍNEA DE TIEMPO */}
        <div ref={containerRef} className="relative">

          {/* Líneas de conexión central */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-[2px] bg-gray-200 dark:bg-white/5 md:-translate-x-1/2 rounded-full" />
          <motion.div
            className="absolute top-0 left-8 md:left-1/2 w-[2px] bg-gradient-to-b from-esoft-accent via-emerald-400 to-transparent md:-translate-x-1/2 rounded-full origin-top z-10"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="space-y-24 md:space-y-32">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center w-full group">

                  {/* NODO CENTRAL */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20 transform -translate-x-[11px] md:translate-x-0 mt-6 md:mt-0">
                    <div className="w-6 h-6 rounded-full bg-[#f8fafc] dark:bg-[#050d0a] border-4 border-gray-200 dark:border-white/10 group-hover:border-esoft-accent transition-colors duration-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-esoft-accent transition-colors duration-500 shadow-[0_0_10px_rgba(27,159,136,0.8)]" />
                    </div>
                  </div>

                  {/* ------------------------------------------------------------- */}
                  {/* LADO IZQUIERDO (Texto si es Par, Imagen si es Impar)            */}
                  {/* ------------------------------------------------------------- */}
                  <div className="w-full md:w-[45%] flex justify-end md:pr-12">
                    {isEven ? (
                      // TARJETA DE TEXTO (PAR)
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="w-full relative bg-white/60 dark:bg-white/[0.02] backdrop-blur-3xl border border-gray-200/50 dark:border-white/5 p-8 md:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 overflow-hidden hover:border-esoft-accent/30 pl-20 md:pl-10 mt-0"
                      >
                        <span className="absolute -top-6 -right-4 text-[8rem] font-heading font-bold text-gray-900 dark:text-white opacity-[0.03] select-none pointer-events-none tracking-tighter">
                          {milestone.year}
                        </span>
                        <div className="relative z-10">
                          <span className="inline-block px-4 py-1.5 rounded-xl bg-gray-100 dark:bg-white/5 text-esoft-accent font-bold text-xl tracking-wider border border-gray-200 dark:border-white/10 mb-4">
                            {milestone.year}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-esoft-accent transition-colors">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light text-sm md:text-base">
                            {milestone.description}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      // VENTANA VISUAL / IMAGEN (IMPAR) - Oculta en móvil para no romper la lectura
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="hidden md:block w-full aspect-video md:aspect-[4/3] relative rounded-[2.5rem] overflow-hidden border border-gray-200/50 dark:border-white/5 shadow-lg group-hover:shadow-esoft-accent/10 transition-all duration-500 group-hover:-translate-y-2"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                        />
                        {/* Píldora de Métrica Flotante */}
                        <div className="absolute bottom-6 left-6 z-20 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <span className="text-esoft-accent">{milestone.icon}</span>
                          <span className="text-white font-bold text-xs uppercase tracking-wider">{milestone.metric}</span>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* ------------------------------------------------------------- */}
                  {/* LADO DERECHO (Imagen si es Par, Texto si es Impar)              */}
                  {/* ------------------------------------------------------------- */}
                  <div className="hidden md:flex w-[45%] justify-start pl-12 absolute right-0">
                    {isEven ? (
                      // VENTANA VISUAL / IMAGEN (PAR)
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="w-full aspect-[4/3] relative rounded-[2.5rem] overflow-hidden border border-gray-200/50 dark:border-white/5 shadow-lg group-hover:shadow-esoft-accent/10 transition-all duration-500 group-hover:-translate-y-2"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                        />
                        <div className="absolute bottom-6 right-6 z-20 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <span className="text-white font-bold text-xs uppercase tracking-wider">{milestone.metric}</span>
                          <span className="text-esoft-accent">{milestone.icon}</span>
                        </div>
                      </motion.div>
                    ) : (
                      // TARJETA DE TEXTO (IMPAR)
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="w-full relative bg-white/60 dark:bg-white/[0.02] backdrop-blur-3xl border border-gray-200/50 dark:border-white/5 p-8 md:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 overflow-hidden hover:border-esoft-accent/30"
                      >
                        <span className="absolute -top-6 -right-4 text-[8rem] font-heading font-bold text-gray-900 dark:text-white opacity-[0.03] select-none pointer-events-none tracking-tighter">
                          {milestone.year}
                        </span>
                        <div className="relative z-10">
                          <span className="inline-block px-4 py-1.5 rounded-xl bg-gray-100 dark:bg-white/5 text-esoft-accent font-bold text-xl tracking-wider border border-gray-200 dark:border-white/10 mb-4">
                            {milestone.year}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-esoft-accent transition-colors">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light text-sm md:text-base">
                            {milestone.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}