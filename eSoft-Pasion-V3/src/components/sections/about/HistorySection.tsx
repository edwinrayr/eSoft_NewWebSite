import { motion, useScroll } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

export default function HistorySection() {
  const { t } = useTranslation();

  // Referencia para animar la línea de tiempo con el scroll
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Datos de la historia dinámicos
  const milestones = [
    {
      year: t('aboutPage.history.items.2006.year'),
      title: t('aboutPage.history.items.2006.title'),
      description: t('aboutPage.history.items.2006.desc')
    },
    {
      year: t('aboutPage.history.items.2012.year'),
      title: t('aboutPage.history.items.2012.title'),
      description: t('aboutPage.history.items.2012.desc')
    },
    {
      year: t('aboutPage.history.items.2018.year'),
      title: t('aboutPage.history.items.2018.title'),
      description: t('aboutPage.history.items.2018.desc')
    },
    {
      year: t('aboutPage.history.items.current.year'),
      title: t('aboutPage.history.items.current.title'),
      description: t('aboutPage.history.items.current.desc')
    }
  ];

  return (
    <section id="historia" className="py-32 px-6 relative bg-[#f8fafc] dark:bg-[#050d0a] border-t border-slate-200/50 dark:border-white/5 scroll-mt-24 transition-colors duration-500 overflow-hidden">

      {/* --- FONDO PREMIUM (Auroras + Dot Matrix Dinámica) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 dark:bg-esoft-accent/5 blur-[150px] pointer-events-none" />

        {/* Matriz Gris Plata para Modo Claro */}
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-0 transition-opacity duration-500"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #cbd5e1 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
          }}
        />
        {/* Matriz Verde para Modo Oscuro */}
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.1] transition-opacity duration-500"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #1b9f88 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md mb-8 shadow-sm transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-esoft-accent animate-pulse" />
            <span className="text-slate-600 dark:text-gray-200 text-xs font-bold uppercase tracking-[0.2em]">
              {t('aboutPage.history.badge')}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors">
            {t('aboutPage.history.titleStart')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent to-emerald-400 drop-shadow-sm dark:drop-shadow-none">
              {t('aboutPage.history.titleEnd')}
            </span>
          </h2>
        </motion.div>

        {/* CONTENEDOR DE LA LÍNEA DE TIEMPO ANIMADA */}
        <div ref={containerRef} className="relative border-l-2 border-transparent ml-4 md:mx-auto md:border-l-0">

          {/* Línea Base (Gris/Translúcida) - Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-slate-200 dark:bg-white/5 -translate-x-1/2 rounded-full" />

          {/* Línea de Progreso Activa (Verde Esmeralda) - Desktop */}
          <motion.div
            className="hidden md:block absolute top-0 left-1/2 w-[2px] bg-gradient-to-b from-esoft-accent via-emerald-400 to-transparent -translate-x-1/2 rounded-full origin-top z-10"
            style={{ scaleY: scrollYProgress }}
          />

          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`relative pl-8 md:pl-0 mt-12 md:mt-0 flex flex-col md:flex-row items-center group ${isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
              >
                {/* NODO CENTRAL (Punto luminoso) */}
                <div className="absolute left-[-29px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20 mt-6 md:mt-0">
                  <div className="w-6 h-6 rounded-full bg-[#f8fafc] dark:bg-[#050d0a] border-4 border-slate-200 dark:border-white/10 group-hover:border-esoft-accent transition-colors duration-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-esoft-accent transition-colors duration-500 shadow-[0_0_10px_rgba(27,159,136,0.8)]" />
                  </div>
                </div>

                {/* Tarjeta de Contenido Glassmorphism */}
                <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="relative bg-white/60 dark:bg-white/[0.02] backdrop-blur-3xl border border-slate-200/50 dark:border-white/5 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 overflow-hidden hover:border-esoft-accent/30 dark:hover:border-esoft-accent/30">

                    {/* Resplandor de fondo interno */}
                    <div className="absolute inset-0 bg-gradient-to-br from-esoft-accent/0 to-transparent group-hover:from-esoft-accent/5 transition-colors duration-700 pointer-events-none" />

                    {/* AÑO GIGANTE COMO TEXTURA */}
                    <span className="absolute -top-6 -right-4 text-[8rem] font-heading font-bold text-slate-900 dark:text-white opacity-[0.03] dark:opacity-[0.02] select-none pointer-events-none tracking-tighter">
                      {milestone.year}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-4 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 text-esoft-accent font-bold text-xl tracking-wider border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
                          {milestone.year}
                        </span>
                      </div>

                      <h4 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-esoft-accent transition-colors">
                        {milestone.title}
                      </h4>

                      <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-light text-sm md:text-base">
                        {milestone.description}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}