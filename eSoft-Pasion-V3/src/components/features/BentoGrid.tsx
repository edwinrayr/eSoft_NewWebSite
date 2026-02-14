import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck, Briefcase, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BentoGrid() {
  const { t } = useTranslation();

  const services = [
    {
      id: "security",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
      icon: <ShieldCheck size={28} />,
      delay: 0,
      colSpan: "md:col-span-2 md:row-span-2",
      height: "min-h-[450px] md:min-h-[600px]",
      isLarge: true
    },
    {
      id: "consulting",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      icon: <Briefcase size={28} />,
      delay: 0.1,
      colSpan: "md:col-span-1",
      height: "min-h-[350px] md:min-h-auto",
      isLarge: false
    },
    {
      id: "packaged",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
      icon: <Server size={28} />,
      delay: 0.2,
      colSpan: "md:col-span-1",
      height: "min-h-[350px] md:min-h-auto",
      isLarge: false
    }
  ];

  return (
    <section id="servicios" className="relative w-full">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado Premium */}
        <div className="mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            {/* Texto adaptable: gris-900 a slate-900 para más elegancia en light mode */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white leading-tight transition-colors">
              {t('services.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400 font-light leading-relaxed transition-colors">
              {t('services.subtitle')}
            </p>
          </div>
        </div>

        {/* GRID ESTILO BENTO */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: service.delay, duration: 0.7, ease: "easeOut" }}
              // MODIFICADO: Fondos base, bordes y sombras adaptables
              className={`group relative rounded-[2rem] overflow-hidden ${service.colSpan} ${service.height} bg-white dark:bg-[#050d0a] border border-white/50 dark:border-white/10 hover:border-esoft-accent/50 dark:hover:border-esoft-accent/50 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-end`}
            >

              {/* IMAGEN DE FONDO */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={t(`services.cards.${service.id}.title`)}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out grayscale-[20%] group-hover:grayscale-0 opacity-40 dark:opacity-80 group-hover:opacity-60 dark:group-hover:opacity-100"
                />
              </div>

              {/* MODIFICADO: DEGRADADO PROFUNDO (Adaptable Light/Dark) */}
              {/* Light Mode: Blanco a transparente | Dark Mode: Negro a transparente */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#050d0a] dark:via-[#050d0a]/80 dark:to-transparent opacity-100 dark:opacity-90 transition-opacity duration-500 z-10" />

              {/* RESPLANDOR ESMERALDA AL HOVER */}
              <div className="absolute inset-0 bg-esoft-accent/5 dark:bg-esoft-accent/0 mix-blend-overlay z-10 group-hover:bg-esoft-accent/20 dark:group-hover:bg-esoft-accent/30 transition-all duration-700" />

              {/* CONTENIDO TEXTO */}
              <div className="relative z-20 p-8 md:p-10 flex flex-col justify-end h-full">

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                  {/* Icono (Adaptado con colores invertidos para Light Mode) */}
                  <div className="mb-6 inline-flex p-3 bg-slate-100/80 dark:bg-white/5 backdrop-blur-md border border-slate-200/50 dark:border-white/10 text-esoft-accent rounded-2xl shadow-sm dark:shadow-inner transition-colors">
                    {service.icon}
                  </div>

                  {/* MODIFICADO: Título adaptable (Slate-900 en Light, White en Dark) */}
                  <h3 className={`font-heading font-extrabold text-slate-900 dark:text-white mb-4 tracking-wide transition-colors ${service.isLarge ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-2xl md:text-[1.6rem] leading-tight'
                    }`}>
                    {t(`services.cards.${service.id}.title`)}
                  </h3>

                  {/* MODIFICADO: Descripción adaptable (Slate-600 en Light, Gray-300 en Dark) */}
                  <p className={`text-slate-600 dark:text-gray-300 font-light leading-relaxed mb-8 opacity-90 group-hover:opacity-100 transition-colors duration-300 ${service.isLarge ? 'text-lg max-w-lg' : 'text-sm line-clamp-3'
                    }`}>
                    {t(`services.cards.${service.id}.desc`)}
                  </p>

                  {/* MODIFICADO: Botón adaptable */}
                  <Link
                    to={`/servicios#${service.id}`}
                    className="inline-flex items-center gap-2 text-slate-800 dark:text-white font-bold uppercase tracking-wider text-xs hover:text-esoft-accent dark:hover:text-esoft-accent transition-colors w-fit group/btn"
                  >
                    Descubrir solución
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}