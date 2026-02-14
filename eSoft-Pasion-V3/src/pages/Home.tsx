import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe2, Users, Clock, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Hero from '../components/layout/Hero';
import BentoGrid from '../components/features/BentoGrid';
import Architecture from '../components/sections/Architecture';

// --- COMPONENTE: MARQUEE DE PARTNERS ---
const PartnersMarquee = () => {
  const { t } = useTranslation();

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
    // MODIFICADO: border-white en Light Mode para dar el efecto de "borde de cristal cortado" real
    <section className="w-full mt-20 lg:mt-0 bg-white/70 dark:bg-[#0a110e]/80 backdrop-blur-2xl border-y border-white dark:border-white/10 py-12 overflow-hidden relative flex flex-col z-10 transition-all duration-500 shadow-sm dark:shadow-xl">

      {/* MODIFICADO: Degradados laterales usan el color base de la página (#f8fafc) para difuminar perfecto */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#f8fafc]/90 dark:from-[#0a110e]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#f8fafc]/90 dark:from-[#0a110e]/90 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-10 relative z-20 w-full">
        <h2 className="text-xl md:text-2xl font-heading font-bold text-slate-800 dark:text-white uppercase tracking-wider relative inline-block">
          {t('homePage.partnersTitle', 'Marcas con las que trabajamos')}
          <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-esoft-accent rounded-full shadow-[0_0_10px_rgba(27,159,136,0.5)]"></span>
        </h2>
      </div>

      <motion.div
        className="flex gap-16 md:gap-24 items-center min-w-max pr-16 md:pr-24"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 80, repeat: Infinity }}
      >
        {duplicatedPartners.map((partner, i) => (
          <div key={i} className="relative flex items-center justify-center w-32 md:w-48 h-12 md:h-16 flex-shrink-0 group">
            <img
              src={partner.logo}
              alt={`Logo ${partner.name}`}
              // MODIFICADO: Opacidad base a 50% en Light Mode para que los logos no se vean como "calcomanías"
              className="max-w-full max-h-full object-contain opacity-50 dark:opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer hover:scale-110 drop-shadow-none dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:!drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

// --- COMPONENTE: RESUMEN "SOBRE NOSOTROS" ---
const AboutTeaser = () => {
  const { t } = useTranslation();
  const statsIcons = [<Clock size={20} />, <Globe2 size={20} />, <Users size={20} />, <Award size={20} />];
  const statsKeys = ['exp', 'region', 'team', 'focus'];

  return (
    // MODIFICADO: Eliminado el border-t oscuro en modo claro. Agregado shadow sutil.
    <section className="py-24 px-6 relative bg-white/40 dark:bg-[#0a110e]/40 border-t border-white dark:border-white/5 transition-colors duration-500 backdrop-blur-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-0 pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
          <div className="absolute inset-0 bg-esoft-accent/10 blur-[100px] rounded-full" />

          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
            alt="Equipo eSoft"
            // MODIFICADO: Sombra más realista en modo claro
            className="relative z-10 rounded-3xl border border-white dark:border-white/10 shadow-2xl shadow-slate-300/50 dark:shadow-[0_20px_50px_-15px_rgba(27,159,136,0.2)] grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
          />

          {/* TARJETA FLOTANTE STATUS */}
          <div className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-esoft-charcoal/90 backdrop-blur-xl border border-white dark:border-white/10 p-6 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-xl z-20 hidden md:block transition-colors duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-esoft-accent animate-pulse shadow-[0_0_10px_rgba(27,159,136,0.6)]" />
              <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-gray-400 tracking-widest">Status</span>
            </div>
            <p className="text-slate-900 dark:text-white font-heading font-bold text-lg">{t('aboutTeaser.leaderBadge')}</p>
          </div>
        </motion.div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            {t('aboutTeaser.titleLine1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent to-emerald-500 drop-shadow-sm">
              {t('aboutTeaser.titleLine2')}
            </span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-light max-w-xl">
            {t('aboutTeaser.description')}
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {statsKeys.map((key, i) => (
              // MODIFICADO: Fondo blanco puro para las píldoras en Light Mode sobre el fondo grisáceo
              <div key={i} className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-esoft-accent/30 dark:hover:border-esoft-accent/30 shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-md">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-black/30 text-esoft-accent shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {statsIcons[i]}
                </div>
                <span className="text-sm text-slate-700 dark:text-gray-300 font-medium">
                  {t(`aboutTeaser.stats.${key}`)}
                </span>
              </div>
            ))}
          </div>

          <Link to="/nosotros" className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold pb-1 group pt-6">
            <span className="border-b-2 border-esoft-accent/30 group-hover:border-esoft-accent transition-colors">
              {t('aboutTeaser.cta')}
            </span>
            <ArrowRight size={18} className="text-esoft-accent group-hover:translate-x-2 transition-transform duration-300" />
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
    // MODIFICADO: El color base de Light Mode ahora es un Slate-50 (#f8fafc) muy elegante y premium.
    <div className="min-h-screen transition-colors duration-500 bg-[#f8fafc] dark:bg-[#050d0a] relative overflow-hidden">

      {/* --- FONDO PREMIUM (AURORAS + DOT MATRIX DINÁMICA) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        {/* 1. Auroras Ambientales (Pastel en modo claro, Neón en oscuro) */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-100/50 dark:bg-esoft-accent/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />
        <div className="absolute bottom-[20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-teal-100/50 dark:bg-emerald-500/5 blur-[150px] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />

        {/* 2. Matriz de Puntos Inteligente (Gris Plata en Claro, Verde en Oscuro) */}
        <div
          className="absolute inset-0 opacity-[0.7] dark:opacity-0 transition-opacity duration-500"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #cbd5e1 1.5px, transparent 1.5px)', // Slate-300
            backgroundSize: '32px 32px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)'
          }}
        />
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.15] transition-opacity duration-500"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #1b9f88 1.5px, transparent 1.5px)', // eSoft Accent
            backgroundSize: '32px 32px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
          }}
        />
      </div>
      {/* ------------------------------------------------ */}

      <div className="relative z-10">
        <Hero />

        <PartnersMarquee />

        {/* SECCIÓN DE SERVICIOS (BENTO GRID) */}
        <div className="relative py-24">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <BentoGrid />
            <div className="text-center pt-16 relative z-10">
              <Link to="/servicios" className="inline-block px-8 py-3.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-800 dark:text-white hover:bg-esoft-accent hover:border-esoft-accent hover:text-white dark:hover:bg-esoft-accent dark:hover:border-esoft-accent transition-all duration-300 text-sm uppercase tracking-widest font-bold shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-[0_10px_30px_-10px_rgba(27,159,136,0.5)] dark:hover:shadow-[0_10px_30px_-10px_rgba(27,159,136,0.5)]">
                {t('homePage.exploreServices')}
              </Link>
            </div>
          </div>
        </div>

        <AboutTeaser />

        {/* SECCIÓN DE ARQUITECTURA */}
        <div className="relative py-24 transition-colors duration-500">
          <Architecture />
        </div>

        {/* CTA FINAL (DISEÑO ISLA PREMIUM) */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-5xl mx-auto relative group">

            {/* Sombra Glow de la Isla */}
            <div className="absolute inset-0 bg-esoft-accent/10 dark:bg-esoft-accent/20 blur-[80px] rounded-[3rem] pointer-events-none transition-opacity duration-500 opacity-50 dark:opacity-100 group-hover:opacity-100" />

            {/* MODIFICADO: Background de la Isla con textura perla en Light Mode */}
            <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-[#0a110e]/90 dark:to-esoft-dark/90 backdrop-blur-2xl border border-white dark:border-white/10 p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-slate-200/80 dark:shadow-2xl overflow-hidden text-center transition-colors duration-500">

              {/* Textura de ruido sutil en Light mode */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.05] pointer-events-none" />

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-esoft-accent to-transparent opacity-50"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[60px] rounded-full"></div>

              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {t('homePage.ctaFinal.titleLine1')} <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent to-emerald-500">
                    {t('homePage.ctaFinal.titleLine2')}
                  </span>
                </h2>

                <p className="text-xl text-slate-600 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                  {t('homePage.ctaFinal.subtitle')}
                </p>

                <div className="pt-8">
                  <Link to="/contacto" className="inline-flex items-center gap-3 px-10 py-5 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(27,159,136,0.4)] dark:shadow-[0_10px_30px_-10px_rgba(27,159,136,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(27,159,136,0.6)] dark:hover:shadow-[0_15px_40px_-10px_rgba(27,159,136,0.8)] hover:-translate-y-1 group/btn">
                    {t('homePage.ctaFinal.btn')}
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}