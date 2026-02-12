import { motion } from 'framer-motion';
import { Linkedin, ExternalLink, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Team() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      key: 'jesus',
      image: "/equipo/Jesus_Rivas.webp", 
      link: "https://www.linkedin.com/in/jesusalexisrivas/" 
    },
    {
      key: 'brandon',
      image: "/equipo/Brandon_Cosio.webp",
      link: "https://www.linkedin.com/in/brandon-cosio-27a449348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      key: 'orlando',
      image: "/equipo/Orlando_Palacios.webp",
      link: "https://www.linkedin.com/in/orlando-palacios-1a347a25a/"
    },
    {
      key: 'brenda',
      image: "/equipo/Brenda_Meza.webp",
      link: "https://www.linkedin.com/in/brenda-pe%C3%B1a-331060378/"
    },
    {
      key: 'tania',
      image: "/equipo/Tania.webp",
      link: "https://www.linkedin.com/in/taniamorenor/"
    }
  ];

  return (
    // CONTENEDOR: Adaptable con animación menta
    <div className="pt-24 min-h-screen bg-white dark:bg-esoft-dark relative overflow-hidden pb-20 transition-colors duration-300">
      
      {/* CAPA DE ANIMACIÓN VERDE MENTA (Solo visible en Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500">
         <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/50 to-white bg-[length:200%_200%] animate-gradient-x" />
         <div className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: 'linear-gradient(#1b9f88 1px, transparent 1px), linear-gradient(to right, #1b9f88 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
         />
      </div>

      {/* Decoración de fondo (Modo Oscuro) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-esoft-accent/5 blur-[100px] rounded-full pointer-events-none hidden dark:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Encabezado adaptable */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 pt-8"
        >
          <span className="text-esoft-accent font-bold tracking-widest uppercase text-sm mb-2 block">
            {t('navbar.team', 'Nuestro Talento')}
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            {t('aboutPage.team.title', 'Conoce al Equipo')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-esoft-gray-light font-light max-w-2xl mx-auto leading-relaxed">
            {t('aboutPage.team.subtitle', 'Ingenieros, estrategas y especialistas apasionados por resolver los desafíos tecnológicos más complejos.')}
          </p>
        </motion.div>

        {/* Grid de Miembros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* TARJETA: Blanco traslúcido en Light | Oscuro en Dark */}
              <div className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-esoft-accent/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col shadow-xl dark:shadow-none backdrop-blur-md">
                
                {/* 1. FOTO */}
                <a 
                  href={member.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block aspect-[4/5] overflow-hidden cursor-pointer group/image"
                >
                  <img 
                    src={member.image} 
                    alt={t(`aboutPage.team.members.${member.key}.name`)} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110 grayscale group-hover/image:grayscale-0"
                  />
                  
                  <div className="absolute inset-0 bg-esoft-accent/80 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white flex items-center gap-2 font-bold uppercase tracking-wider transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                      <span>{t('aboutPage.team.viewProfile')}</span>
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </a>

                {/* 2. INFO ADAPTABLE */}
                <div className="p-6 text-center flex-1 flex flex-col">
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-1">
                    {t(`aboutPage.team.members.${member.key}.name`)}
                  </h3>
                  <p className="text-esoft-accent text-sm font-bold uppercase tracking-wider mb-4">
                    {t(`aboutPage.team.members.${member.key}.role`)}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {t(`aboutPage.team.members.${member.key}.desc`)}
                  </p>
                  
                  {/* Redes Sociales */}
                  <div className="flex justify-center gap-4 pt-4 border-t border-gray-100 dark:border-white/10">
                    <a href={member.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-esoft-accent transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* SECCIÓN INVITACIÓN (CARRERAS) - Estilo impacto oscuro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-gray-900 dark:bg-gradient-to-br dark:from-esoft-charcoal dark:to-black border border-gray-800 dark:border-white/10 p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
                {t('aboutPage.team.cta.title')}
            </h2>
            <p className="text-gray-300 mb-8">
                {t('aboutPage.team.cta.desc')}
            </p>
            <a 
              href="mailto:talento@esoftpasion.com" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-colors shadow-lg shadow-esoft-accent/20"
            >
              <Mail size={18} /> {t('aboutPage.team.cta.btn')}
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}