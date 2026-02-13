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
      isLarge: true // Bandera para dar estilos especiales a la tarjeta principal
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white leading-tight">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </div>

        {/* GRID ESTILO BENTO (Sin cajas internas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: service.delay, duration: 0.7, ease: "easeOut" }}
              className={`group relative rounded-[2rem] overflow-hidden ${service.colSpan} ${service.height} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 bg-[#050d0a] border border-gray-200 dark:border-white/10 hover:border-esoft-accent/50 flex flex-col justify-end`}
            >
              {/* IMAGEN DE FONDO (Ocupa todo el espacio) */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={t(`services.cards.${service.id}.title`)}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out grayscale-[20%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* DEGRADADO PROFUNDO (Fade-to-Black para garantizar legibilidad) */}
              {/* Esta capa reemplaza a las "cajas". Oscurece la base fuertemente y se aclara hacia arriba */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d0a] via-[#050d0a]/80 to-transparent opacity-90 transition-opacity duration-500 z-10" />

              {/* RESPLANDOR ESMERALDA (Micro-interacción al hover) */}
              <div className="absolute inset-0 bg-esoft-accent/0 mix-blend-overlay z-10 group-hover:bg-esoft-accent/30 transition-all duration-700" />

              {/* CONTENIDO TEXTO (Flotando directamente sobre el degradado) */}
              <div className="relative z-20 p-8 md:p-10 flex flex-col justify-end h-full">

                {/* Animación: El texto sube ligeramente al hacer hover */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                  {/* Icono con Glassmorphism sutil */}
                  <div className="mb-6 inline-flex p-3 bg-white/5 backdrop-blur-md border border-white/10 text-esoft-accent rounded-2xl shadow-inner">
                    {service.icon}
                  </div>

                  {/* Título (Dinámico: Más grande en la tarjeta principal, ajustado en las pequeñas) */}
                  <h3 className={`font-heading font-extrabold text-white mb-4 tracking-wide ${service.isLarge ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-2xl md:text-[1.6rem] leading-tight'
                    }`}>
                    {t(`services.cards.${service.id}.title`)}
                  </h3>

                  {/* Descripción */}
                  <p className={`text-gray-300 font-light leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${service.isLarge ? 'text-lg max-w-lg' : 'text-sm line-clamp-3'
                    }`}>
                    {t(`services.cards.${service.id}.desc`)}
                  </p>

                  {/* Botón */}
                  <Link
                    to={`/servicios#${service.id}`}
                    className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider text-xs hover:text-esoft-accent transition-colors w-fit group/btn"
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