import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function History() {
  const { t } = useTranslation();

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
    // CAMBIO: Fondo base adaptable
    <div className="pt-24 min-h-screen bg-white dark:bg-esoft-dark relative overflow-hidden pb-20 transition-colors duration-300">
      
      {/* CAPA DE ANIMACIÓN VERDE MENTA (Solo visible en Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500">
         <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/50 to-white bg-[length:200%_200%] animate-gradient-x" />
      </div>

      {/* Luz decorativa de fondo (Modo Oscuro) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-esoft-accent/5 blur-[120px] pointer-events-none hidden dark:block" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 pt-8"
        >
          <span className="text-esoft-accent font-bold tracking-widest uppercase text-sm mb-2 block">
            {t('aboutPage.history.badge')}
          </span>
          {/* TÍTULO: Color de texto adaptable */}
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white">
            {t('aboutPage.history.titleStart')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent to-emerald-400">{t('aboutPage.history.titleEnd')}</span>
          </h1>
        </motion.div>

        {/* Línea de tiempo vertical adaptable */}
        <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-4 md:mx-auto md:border-l-0">
          
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 dark:bg-white/10 -translate-x-1/2"></div>

          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-8 md:pl-0 mt-12 md:mt-0 flex flex-col md:flex-row items-center ${
                  isEven ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Punto luminoso */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-esoft-accent shadow-[0_0_15px_rgba(27,159,136,0.5)] z-10"></div>

                {/* Tarjeta de Contenido adaptable */}
                <div className={`md:w-[45%] ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/60 dark:bg-esoft-charcoal/80 backdrop-blur-md border border-gray-200 dark:border-white/10 p-8 rounded-3xl hover:border-esoft-accent/50 transition-all group shadow-xl dark:shadow-none">
                    {/* Año adaptable */}
                    <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                      {milestone.year}
                      <span className="h-[1px] flex-grow bg-gray-200 dark:bg-white/10 group-hover:bg-esoft-accent/30 transition-colors"></span>
                    </h3>
                    <h4 className="text-lg font-bold text-esoft-accent mb-3">{milestone.title}</h4>
                    {/* Descripción adaptable */}
                    <p className="text-gray-600 dark:text-esoft-gray-light leading-relaxed font-light text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}