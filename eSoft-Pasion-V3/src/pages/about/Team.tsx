import { motion } from 'framer-motion';
import { Linkedin, ExternalLink, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Team() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      key: 'jesus',
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800", 
      link: "https://www.linkedin.com/" 
    },
    {
      key: 'brandon',
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      link: "https://www.linkedin.com/"
    },
    {
      key: 'orlando',
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
      link: "https://www.linkedin.com/"
    },
    {
      key: 'brenda',
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      link: "https://www.linkedin.com/"
    },
    {
      key: 'itzel',
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      link: "https://www.linkedin.com/"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-esoft-dark relative overflow-hidden pb-20">
      
      {/* Decoración de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-esoft-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Encabezado de la página */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 pt-8"
        >
          <span className="text-esoft-accent font-bold tracking-widest uppercase text-sm mb-2 block">
            {t('navbar.team', 'Nuestro Talento')}
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            {t('aboutPage.team.title', 'Conoce al Equipo')}
          </h1>
          <p className="text-xl text-esoft-gray-light font-light max-w-2xl mx-auto">
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
              {/* TARJETA */}
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-esoft-accent/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                
                {/* 1. FOTO (Clickable) */}
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
                  
                  {/* Overlay al pasar el mouse sobre la foto */}
                  <div className="absolute inset-0 bg-esoft-accent/80 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white flex items-center gap-2 font-bold uppercase tracking-wider transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                      <span>Ver Perfil</span>
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </a>

                {/* 2. INFO */}
                <div className="p-6 text-center flex-1 flex flex-col">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {t(`aboutPage.team.members.${member.key}.name`)}
                  </h3>
                  <p className="text-esoft-accent text-sm font-bold uppercase tracking-wider mb-4">
                    {t(`aboutPage.team.members.${member.key}.role`)}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {t(`aboutPage.team.members.${member.key}.desc`)}
                  </p>
                  
                  {/* Redes Sociales */}
                  <div className="flex justify-center gap-4 pt-4 border-t border-white/10">
                    <a href={member.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* SECCIÓN INVITACIÓN (CARRERAS) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-br from-esoft-charcoal to-black border border-white/10 p-12 rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">¿Quieres unirte a eSoft Pasión?</h2>
            <p className="text-esoft-gray-light mb-8">
              Buscamos mentes brillantes que compartan nuestra visión. Si eres especialista en TI, ciberseguridad o desarrollo, queremos conocerte.
            </p>
            <a 
              href="mailto:talento@esoftpasion.com" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-esoft-dark font-bold rounded-full hover:bg-esoft-gray-light transition-colors"
            >
              <Mail size={18} /> Enviar mi CV
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}