import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Anchor, Server, Lock, Cloud, Briefcase } from 'lucide-react';

export default function BentoGrid() {
  const { t } = useTranslation();

  const services = [
    {
      id: "devsecops",
      icon: <ShieldCheck size={32} />,
      style: "dark"
    },
    {
      id: "automic",
      icon: <Anchor size={32} />, 
      style: "green"
    },
    {
      id: "mainframe",
      icon: <Server size={32} />,
      style: "dark"
    },
    {
      id: "cybersecurity",
      icon: <Lock size={32} />,
      style: "light"
    },
    {
      id: "infra",
      icon: <Cloud size={32} />,
      style: "light"
    },
    {
      id: "business",
      icon: <Briefcase size={32} />,
      style: "light"
    }
  ];

  const getCardStyle = (style: string) => {
    switch (style) {
      case 'green':
        return 'bg-esoft-accent text-white shadow-xl shadow-emerald-900/20 border-transparent';
      case 'light':
        return 'bg-white/5 border-white/10 text-esoft-gray-light hover:bg-white/10';
      default: 
        return 'bg-esoft-charcoal border-white/5 text-gray-300 hover:border-white/20';
    }
  };

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

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // CAMBIOS AQUÍ: Agregué 'items-center' y 'text-center'
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${getCardStyle(service.style)} h-full flex flex-col items-center text-center`}
            >
              {/* ÍCONO (Ahora se centrará gracias a items-center del padre) */}
              <div className={`mb-6 p-3 rounded-lg w-fit ${service.style === 'green' ? 'bg-white/20 text-white' : 'bg-white/5 text-esoft-accent'}`}>
                {service.icon}
              </div>
              
              <h3 className={`text-2xl font-heading font-bold mb-4 ${service.style === 'green' ? 'text-white' : 'text-white'}`}>
                {t(`services.cards.${service.id}.title`)}
              </h3>
              
              <p className={`text-sm leading-relaxed ${service.style === 'green' ? 'text-white/90' : 'text-gray-400'}`}>
                {t(`services.cards.${service.id}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}