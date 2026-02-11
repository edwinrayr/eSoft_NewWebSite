import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users, Briefcase, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // <--- AGREGADO: Importamos Link para la navegación interna

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 min-h-screen bg-esoft-dark relative overflow-hidden">
      
      {/* 1. HERO - ¿QUIÉNES SOMOS? */}
      <section className="relative px-6 py-20 text-center max-w-5xl mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-esoft-accent/10 blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <span className="text-esoft-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            {t('aboutPage.hero.badge')}
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-8 text-white">
            {t('aboutPage.hero.titleStart')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t('aboutPage.hero.titleEnd')}</span>
          </h1>
          <p className="text-xl text-esoft-gray-light max-w-4xl mx-auto leading-relaxed font-light mb-8">
            {t('aboutPage.hero.description')}
          </p>
        </motion.div>
      </section>

      {/* 2. ACERCA DE NOSOTROS (Compromiso) */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3 text-white">
                <Award className="text-esoft-accent" /> {t('aboutPage.commitment.title')}
              </h2>
              <p className="text-lg text-esoft-gray-light leading-relaxed">
                {t('aboutPage.commitment.p1')}
              </p>
              <p className="text-lg text-esoft-gray-light leading-relaxed mt-4">
                {t('aboutPage.commitment.p2')}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
               <div className="absolute inset-0 bg-esoft-accent/20 mix-blend-overlay z-10 hover:opacity-0 transition-opacity duration-500"></div>
               <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" 
                alt="Tecnología eSoft" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MISIÓN Y VISIÓN */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Misión */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-esoft-accent/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-esoft-accent/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <Target className="text-esoft-accent w-12 h-12 mb-6" />
            <h3 className="text-3xl font-heading font-bold text-white mb-4">{t('aboutPage.mission.title')}</h3>
            <p className="text-esoft-gray-light leading-relaxed">
              {t('aboutPage.mission.desc')}
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-esoft-accent/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-esoft-accent/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <Eye className="text-esoft-accent w-12 h-12 mb-6" />
            <h3 className="text-3xl font-heading font-bold text-white mb-4">{t('aboutPage.vision.title')}</h3>
            <p className="text-esoft-gray-light leading-relaxed">
              {t('aboutPage.vision.desc')}
            </p>
          </motion.div>

        </div>
      </section>

      {/* 4. VALORES Y TALENTO */}
      <section id="valores" className="py-20 px-6 text-center scroll-mt-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-esoft-charcoal to-black border border-white/10 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          
          <Shield className="text-esoft-accent w-12 h-12 mx-auto mb-6 relative z-10" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative z-10 text-white">
            {t('aboutPage.values.title')}
          </h2>
          <p className="text-esoft-gray-light mb-8 relative z-10">
            {t('aboutPage.values.desc')}
          </p>
          
          {/* Botones */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            {/* Link del CEO */}
            <a 
              href="https://soyjesusrivas.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-esoft-accent/20"
            >
              <Briefcase size={18} /> {t('aboutPage.values.btnCEO')}
            </a>

            {/* MODIFICADO: Enlace interno al Equipo usando Link de React Router */}
            <Link 
              to="/nosotros/equipo" 
              className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Users size={18} /> {t('aboutPage.values.btnTeam')}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}