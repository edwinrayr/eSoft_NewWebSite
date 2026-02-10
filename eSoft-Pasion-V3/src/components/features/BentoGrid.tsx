import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function BentoGrid() {
  const { t } = useTranslation();

  const services = [
    {
      id: "security",
      // Imagen de Ciberseguridad (Hacker/Monitores)
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
      delay: 0
    },
    {
      id: "consulting",
      // Imagen de Consultoría (Reunión/Manos)
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      delay: 0.1
    },
    {
      id: "packaged",
      // Imagen de Soluciones (Tecnología/Abstracto)
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      delay: 0.2
    }
  ];

  return (
    <section id="servicios" className="py-24 px-6 bg-esoft-dark relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4 text-white">
            {t('services.title')}
          </h2>
          <p className="text-esoft-gray-light max-w-2xl mx-auto text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* GRID DE 3 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              className="group relative bg-esoft-charcoal border border-white/10 rounded-2xl overflow-hidden hover:border-esoft-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.15)] flex flex-col h-full"
            >
              {/* IMAGEN SUPERIOR */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-esoft-accent/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
                <img 
                  src={service.image} 
                  alt={t(`services.cards.${service.id}.title`)}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* CONTENIDO TEXTO */}
              <div className="p-8 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-esoft-accent transition-colors">
                  {t(`services.cards.${service.id}.title`)}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                  {t(`services.cards.${service.id}.desc`)}
                </p>

                {/* Decoración opcional (línea inferior) */}
                <div className="w-12 h-1 bg-esoft-accent/30 mx-auto mt-6 rounded-full group-hover:w-24 group-hover:bg-esoft-accent transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}