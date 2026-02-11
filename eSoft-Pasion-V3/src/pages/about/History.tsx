import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // <--- AGREGADO
import { ArrowLeft } from 'lucide-react'; // <--- AGREGADO

export default function History() {
  const { t } = useTranslation();

  // Datos de la historia dinámicos (Traducidos)
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
    // MODIFICADO: Ahora es un div de página completa (min-h-screen)
    <div className="pt-24 min-h-screen bg-esoft-dark relative overflow-hidden">
      
      {/* Luz decorativa de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-esoft-accent/5 blur-[120px] pointer-events-none" />

      {/* Agregamos padding vertical (py-12) para que el contenido respire mejor */}
      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">

        {/* AGREGADO: Botón de regreso a la página de Nosotros */}
        <Link to="/nosotros" className="inline-flex items-center gap-2 text-esoft-gray-light hover:text-esoft-accent transition-colors mb-16 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Volver a Nosotros
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} // Usamos animate en vez de whileInView porque se ve apenas carga la página
          className="text-center mb-16"
        >
          <span className="text-esoft-accent font-bold tracking-widest uppercase text-sm mb-2 block">
            {t('aboutPage.history.badge')}
          </span>
          {/* MODIFICADO: Cambiado de h2 a h1 por ser el título principal de la ruta */}
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
            {t('aboutPage.history.titleStart')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent to-emerald-400">{t('aboutPage.history.titleEnd')}</span>
          </h1>
        </motion.div>

        {/* Línea de tiempo vertical */}
        <div className="relative border-l-2 border-white/10 ml-4 md:mx-auto md:border-l-0">
          
          {/* Línea central para Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/10 -translate-x-1/2"></div>

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
                {/* Punto luminoso en la línea de tiempo */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-esoft-accent shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"></div>

                {/* Tarjeta de Contenido */}
                <div className={`md:w-[45%] ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-esoft-charcoal/80 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-esoft-accent/50 transition-colors group">
                    <h3 className="text-3xl font-heading font-bold text-white mb-2 flex items-center gap-3">
                      {milestone.year}
                      <span className="h-[1px] flex-grow bg-white/10 group-hover:bg-esoft-accent/30 transition-colors"></span>
                    </h3>
                    <h4 className="text-lg font-bold text-esoft-accent mb-3">{milestone.title}</h4>
                    <p className="text-esoft-gray-light leading-relaxed font-light text-sm">
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