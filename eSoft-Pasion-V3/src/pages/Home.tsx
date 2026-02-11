import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe2, Users, Clock, Award } from 'lucide-react'; 
import { useTranslation } from 'react-i18next';

import Hero from '../components/layout/Hero';
import BentoGrid from '../components/features/BentoGrid';
import Architecture from '../components/sections/Architecture';

const PartnersMarquee = () => {
  const partners = [
    { name: "Broadcom", logo: "/marcas/broadcom.webp" },
    { name: "VMware", logo: "/marcas/Vmware.webp" }, 
    { name: "Symantec", logo: "/marcas/symantec.webp" },
    { name: "CA Technologies", logo: "/marcas/ca.webp" },
    { name: "Brocade", logo: "/marcas/brocade.webp" },
    { name: "AppNeta", logo: "/marcas/appneta.webp" }
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

  return (
    <div className="w-full bg-black/20 border-y border-white/5 py-10 overflow-hidden relative flex">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-esoft-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-esoft-dark to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        className="flex gap-16 md:gap-24 items-center min-w-max pr-16 md:pr-24"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          ease: "linear", 
          duration: 80, 
          repeat: Infinity 
        }}
      >
        {duplicatedPartners.map((partner, i) => (
          <div 
            key={i} 
            className="flex items-center justify-center w-32 md:w-48 h-12 md:h-16 flex-shrink-0"
          >
            <img 
              src={partner.logo}
              alt={`Logo ${partner.name}`}
              className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- COMPONENTE INTERNO: RESUMEN "SOBRE NOSOTROS" ---
const AboutTeaser = () => {
  const { t } = useTranslation();
  
  const statsIcons = [
    <Clock size={20} />,    
    <Globe2 size={20} />,   
    <Users size={20} />,    
    <Award size={20} />     
  ];

  const statsKeys = ['exp', 'region', 'team', 'focus'];

  return (
    <section className="py-24 px-6 relative bg-esoft-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* IMAGEN DEL EQUIPO */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-esoft-accent/10 blur-[100px] rounded-full" />
          
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
            alt="Equipo eSoft" 
            className="relative z-10 rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
          
          <div className="absolute -bottom-6 -right-6 bg-esoft-charcoal border border-white/10 p-6 rounded-xl shadow-xl z-20 hidden md:block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-esoft-accent animate-pulse" />
              <span className="text-xs font-bold uppercase text-white tracking-wider">Status</span>
            </div>
            {/* CORRECCIÓN 1: Texto traducido */}
            <p className="text-white font-heading text-lg">{t('aboutTeaser.leaderBadge')}</p>
          </div>
        </motion.div>

        {/* TEXTO Y DATOS */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            {t('aboutTeaser.titleLine1')} <br />
            <span className="text-esoft-accent">{t('aboutTeaser.titleLine2')}</span>
          </h2>
          
          <p className="text-lg text-esoft-gray-light leading-relaxed">
            {t('aboutTeaser.description')}
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            {statsKeys.map((key, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                <div className="p-2 rounded-lg bg-white/5 text-esoft-accent border border-white/5">
                  {statsIcons[i]}
                </div>
                {t(`aboutTeaser.stats.${key}`)}
              </div>
            ))}
          </div>

          <Link to="/nosotros" className="inline-flex items-center gap-2 text-white font-bold border-b border-esoft-accent pb-1 hover:text-esoft-accent transition-colors group pt-4">
            {t('aboutTeaser.cta')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// --- PÁGINA PRINCIPAL ---
export default function Home() {
  const { t } = useTranslation(); 

  return (
    <div className="bg-esoft-dark min-h-screen">
      
      {/* 1. HERO */}
      <Hero />

      {/* 2. BARRA DE SOCIOS (Interna) */}
      <PartnersMarquee />
      
      {/* 3. SERVICIOS (Bento Grid) */}
      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <BentoGrid />
        
        <div className="text-center pb-20 -mt-10 relative z-10">
          <Link to="/servicios" className="inline-block px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-esoft-accent hover:border-transparent transition-all text-sm uppercase tracking-widest font-bold text-white">
            {/* CORRECCIÓN 2: Texto traducido */}
            {t('homePage.exploreServices')}
          </Link>
        </div>
      </div>

      {/* 4. SOBRE NOSOTROS (Teaser) */}
      <AboutTeaser />

      {/* 5. ARQUITECTURA */}
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-esoft-accent/5 blur-[120px] pointer-events-none" />
        <Architecture />
      </div>

      {/* 6. CTA FINAL (TRADUCIDO) */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
           <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
             {t('homePage.ctaFinal.titleLine1')} <span className="text-esoft-accent">{t('homePage.ctaFinal.titleLine2')}</span>
           </h2>
           <p className="text-xl text-esoft-gray-light font-light">
             {t('homePage.ctaFinal.subtitle')}
           </p>
           
           <div className="pt-4">
             <Link 
               to="/contacto"
               className="inline-flex items-center gap-3 px-10 py-5 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all shadow-lg hover:shadow-esoft-accent/30 hover:-translate-y-1"
             >
               {t('homePage.ctaFinal.btn')} <ArrowRight />
             </Link>
           </div>
        </div>
      </section>

    </div>
  );
}