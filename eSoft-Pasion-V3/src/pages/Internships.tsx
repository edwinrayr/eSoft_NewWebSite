import { motion } from 'framer-motion';
import { Code, Megaphone, ChevronRight, Mail, Cpu, Palette, Terminal, BarChart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Internships() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-esoft-dark pt-24 pb-20 px-6 relative overflow-hidden">
      
      {/* Fondo Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-esoft-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-esoft-accent/10 border border-esoft-accent/20 text-esoft-accent text-xs font-bold uppercase tracking-widest mb-6"
        >
          {t('internshipsPage.hero.badge')}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight"
        >
          {t('internshipsPage.hero.title')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent to-emerald-600">
            {t('internshipsPage.hero.highlight')}
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-esoft-gray-light max-w-2xl mx-auto leading-relaxed"
        >
          {t('internshipsPage.hero.subtitle')}
        </motion.p>
      </div>

      {/* ÁREAS DE PRÁCTICA */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
      >
        
        {/* TARJETA TECNOLOGÍA */}
        <motion.div variants={itemVariants} className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-esoft-accent/50 transition-colors">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Code size={120} />
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
              <Cpu size={32} />
            </div>
            <h2 className="text-3xl font-heading font-bold text-white">{t('internshipsPage.tech.title')}</h2>
          </div>
          
          <p className="text-gray-300 mb-8 text-lg">{t('internshipsPage.tech.desc')}</p>
          
          <ul className="space-y-4">
            {(t('internshipsPage.tech.roles', { returnObjects: true }) as string[]).map((role, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors">
                <Terminal size={18} className="text-esoft-accent" />
                {role}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* TARJETA MARKETING */}
        <motion.div variants={itemVariants} className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-pink-500/50 transition-colors">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Megaphone size={120} />
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-pink-500/20 text-pink-400 rounded-xl">
              <Palette size={32} />
            </div>
            <h2 className="text-3xl font-heading font-bold text-white">{t('internshipsPage.marketing.title')}</h2>
          </div>
          
          <p className="text-gray-300 mb-8 text-lg">{t('internshipsPage.marketing.desc')}</p>
          
          <ul className="space-y-4">
            {(t('internshipsPage.marketing.roles', { returnObjects: true }) as string[]).map((role, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors">
                <BarChart size={18} className="text-pink-400" />
                {role}
              </li>
            ))}
          </ul>
        </motion.div>

      </motion.div>

      {/* CTA FINAL */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center bg-gradient-to-b from-white/10 to-transparent p-10 rounded-3xl border border-white/10"
      >
        <h3 className="text-3xl font-bold text-white mb-4">{t('internshipsPage.cta.title')}</h3>
        <p className="text-gray-300 mb-8">{t('internshipsPage.cta.desc')}</p>
        
        <a 
          href={`mailto:${t('internshipsPage.cta.email')}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all hover:scale-105 shadow-lg shadow-esoft-accent/20"
        >
          <Mail size={20} />
          {t('internshipsPage.hero.btn')} <ChevronRight size={18} />
        </a>
      </motion.div>

    </div>
  );
}