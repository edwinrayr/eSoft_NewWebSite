import { motion } from 'framer-motion';
import { ShieldCheck, Bot, RefreshCw, Database, Headphones, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Architecture() {
  const { t } = useTranslation();

  const features = [
    {
      key: "security",
      icon: <ShieldCheck />
    },
    {
      key: "automation",
      icon: <Bot />
    },
    {
      key: "lifecycle",
      icon: <RefreshCw />
    },
    {
      key: "assets",
      icon: <Database />
    },
    {
      key: "support",
      icon: <Headphones />
    },
    {
      key: "digital",
      icon: <Rocket />
    }
  ];

  return (
    <section className="py-24 bg-esoft-dark relative overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado Centrado */}
        <div className="text-center mb-16">
          <span className="text-esoft-accent font-bold tracking-widest uppercase text-sm">
            {t('architecture.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6 text-white">
            {t('architecture.titleLine1')} <span className="text-white">{t('architecture.titleLine2')}</span>
          </h2>
          <p className="text-esoft-gray-light max-w-2xl mx-auto text-lg">
            {t('architecture.subtitle')}
          </p>
        </div>

        {/* Grid Centrado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // CLASES DE CENTRADO AÑADIDAS: flex, flex-col, items-center, text-center
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-esoft-accent/50 hover:bg-white/[0.07] transition-all group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-esoft-charcoal rounded-xl flex items-center justify-center text-esoft-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(27,159,136,0.2)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {t(`architecture.cards.${item.key}.title`)}
              </h3>
              <p className="text-sm text-esoft-gray-light leading-relaxed">
                {t(`architecture.cards.${item.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}