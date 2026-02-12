import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users, Briefcase, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useTranslation();

  return (
    // CAMBIO: Fondo base blanco/oscuro con overflow-hidden para las capas animadas
    <div className="pt-24 min-h-screen bg-white dark:bg-esoft-dark relative overflow-hidden transition-colors duration-300">
      
      {/* CAPA DE ANIMACIÓN VERDE MENTA (Solo visible en Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500">
         <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/50 to-white bg-[length:200%_200%] animate-gradient-x" />
         {/* Grid decorativo sutil */}
         <div className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: 'linear-gradient(#1b9f88 1px, transparent 1px), linear-gradient(to right, #1b9f88 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
         />
      </div>

      <div className="relative z-10">
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
            <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-8 text-gray-900 dark:text-white">
              {t('aboutPage.hero.titleStart')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent to-gray-500">{t('aboutPage.hero.titleEnd')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-esoft-gray-light max-w-4xl mx-auto leading-relaxed font-light mb-8">
              {t('aboutPage.hero.description')}
            </p>
          </motion.div>
        </section>

        {/* 2. ACERCA DE NOSOTROS (Compromiso) */}
        {/* En Light Mode: Fondo blanco semitransparente con blur */}
        <section className="py-16 border-y border-gray-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                  <Award className="text-esoft-accent" /> {t('aboutPage.commitment.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-esoft-gray-light leading-relaxed">
                  {t('aboutPage.commitment.p1')}
                </p>
                <p className="text-lg text-gray-600 dark:text-esoft-gray-light leading-relaxed mt-4">
                  {t('aboutPage.commitment.p2')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl"
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
              // TARJETA: Blanco puro en light para resaltar sobre el fondo menta
              className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-10 rounded-3xl hover:border-esoft-accent/50 transition-all shadow-xl dark:shadow-none group relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-esoft-accent/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <Target className="text-esoft-accent w-12 h-12 mb-6" />
              <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">{t('aboutPage.mission.title')}</h3>
              <p className="text-gray-600 dark:text-esoft-gray-light leading-relaxed">
                {t('aboutPage.mission.desc')}
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-10 rounded-3xl hover:border-esoft-accent/50 transition-all shadow-xl dark:shadow-none group relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-esoft-accent/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <Eye className="text-esoft-accent w-12 h-12 mb-6" />
              <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">{t('aboutPage.vision.title')}</h3>
              <p className="text-gray-600 dark:text-esoft-gray-light leading-relaxed">
                {t('aboutPage.vision.desc')}
              </p>
            </motion.div>

          </div>
        </section>

        {/* 4. VALORES Y TALENTO */}
        <section id="valores" className="py-20 px-6 text-center scroll-mt-24">
          <div className="max-w-4xl mx-auto bg-gray-900 dark:bg-gradient-to-r dark:from-esoft-charcoal dark:to-black border border-gray-200 dark:border-white/10 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            
            <Shield className="text-esoft-accent w-12 h-12 mx-auto mb-6 relative z-10" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative z-10 text-white">
              {t('aboutPage.values.title')}
            </h2>
            <p className="text-gray-300 dark:text-esoft-gray-light mb-8 relative z-10">
              {t('aboutPage.values.desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a 
                href="https://soyjesusrivas.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-esoft-accent/20"
              >
                <Briefcase size={18} /> {t('aboutPage.values.btnCEO')}
              </a>

              <Link 
                to="/nosotros/equipo" 
                className="px-8 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Users size={18} /> {t('aboutPage.values.btnTeam')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}