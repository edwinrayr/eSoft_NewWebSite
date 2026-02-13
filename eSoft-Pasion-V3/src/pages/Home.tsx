import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe2, Users, Clock, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Hero from '../components/layout/Hero';
import BentoGrid from '../components/features/BentoGrid';
import Architecture from '../components/sections/Architecture';

// --- COMPONENTE: MARQUEE DE PARTNERS ---
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
    <div className="w-full mt-20 lg:mt-0 bg-black/5 dark:bg-black/20 border-y border-gray-200 dark:border-white/10 py-12 overflow-hidden relative flex z-10 transition-all duration-500 shadow-2xl backdrop-blur-sm">

      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-esoft-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-esoft-dark to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-16 md:gap-24 items-center min-w-max pr-16 md:pr-24"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 80, repeat: Infinity }}
      >
        {duplicatedPartners.map((partner, i) => (
          <div key={i} className="relative flex items-center justify-center w-32 md:w-48 h-12 md:h-16 flex-shrink-0 group">

            {/* MODIFICADO: Diseño Premium sin cajas. 
                - dark:drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]: Crea un mini borde de luz blanca en modo oscuro para que el texto negro no se pierda.
                - hover:!drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]: El Neón verde perfecto que abraza la forma exacta del logo.
            */}
            <img
              src={partner.logo}
              alt={`Logo ${partner.name}`}
              className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer hover:scale-110 drop-shadow-none dark:drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] hover:!drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]"
            />

          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- COMPONENTE: RESUMEN "SOBRE NOSOTROS" ---
const AboutTeaser = () => {
  const { t } = useTranslation();
  const statsIcons = [<Clock size={20} />, <Globe2 size={20} />, <Users size={20} />, <Award size={20} />];
  const statsKeys = ['exp', 'region', 'team', 'focus'];

  return (
    <section className="py-24 px-6 relative bg-white/40 dark:bg-esoft-dark border-t border-gray-200 dark:border-white/5 transition-colors duration-300 backdrop-blur-sm">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 dark:opacity-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="absolute inset-0 bg-esoft-accent/10 blur-[100px] rounded-full" />
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Equipo eSoft" className="relative z-10 rounded-2xl border border-gray-300 dark:border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-esoft-charcoal border border-gray-100 dark:border-white/10 p-6 rounded-xl shadow-xl z-20 hidden md:block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-esoft-accent animate-pulse" />
              <span className="text-xs font-bold uppercase text-gray-500 dark:text-white tracking-wider">Status</span>
            </div>
            <p className="text-gray-900 dark:text-white font-heading text-lg">{t('aboutTeaser.leaderBadge')}</p>
          </div>
        </motion.div>
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white">
            {t('aboutTeaser.titleLine1')} <br />
            <span className="text-esoft-accent">{t('aboutTeaser.titleLine2')}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-esoft-gray-light leading-relaxed">{t('aboutTeaser.description')}</p>
          <div className="grid grid-cols-2 gap-6">
            {statsKeys.map((key, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                <div className="p-2 rounded-lg bg-white/80 dark:bg-white/5 text-esoft-accent border border-gray-200 dark:border-white/5 shadow-sm">
                  {statsIcons[i]}
                </div>
                {t(`aboutTeaser.stats.${key}`)}
              </div>
            ))}
          </div>
          <Link to="/nosotros" className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-bold border-b border-esoft-accent pb-1 hover:text-esoft-accent transition-colors group pt-4">
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
    <div className="min-h-screen transition-colors duration-300 bg-transparent">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-0"
        style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(to right, #e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div className="relative z-10">

        {/* Aquí está mandando llamar tu Hero.tsx que ya tiene el ícono del mouse responsivo */}
        <Hero />

        <PartnersMarquee />

        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <BentoGrid />
            <div className="text-center pt-16 relative z-10">
              <Link to="/servicios" className="inline-block px-8 py-3 rounded-full border border-gray-300 dark:border-white/10 bg-white/60 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-esoft-accent hover:text-white hover:border-transparent transition-all text-sm uppercase tracking-widest font-bold shadow-lg backdrop-blur-sm">
                {t('homePage.exploreServices')}
              </Link>
            </div>
          </div>
        </div>

        <AboutTeaser />

        <div className="relative bg-white/40 dark:bg-transparent py-20 transition-colors duration-300 border-t border-gray-100 dark:border-none backdrop-blur-sm">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-esoft-accent/5 blur-[120px] pointer-events-none" />
          <Architecture />
        </div>

        <section className="py-24 px-6 relative overflow-hidden bg-white/60 dark:bg-transparent border-t border-gray-200 dark:border-white/5 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-emerald-50/10 dark:from-transparent dark:to-black/40" />
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white">
              {t('homePage.ctaFinal.titleLine1')} <span className="text-esoft-accent">{t('homePage.ctaFinal.titleLine2')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-esoft-gray-light font-light">{t('homePage.ctaFinal.subtitle')}</p>
            <div className="pt-4">
              <Link to="/contacto" className="inline-flex items-center gap-3 px-10 py-5 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all shadow-xl hover:shadow-esoft-accent/30 hover:-translate-y-1">
                {t('homePage.ctaFinal.btn')} <ArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}