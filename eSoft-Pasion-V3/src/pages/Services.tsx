import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Briefcase, CheckCircle, ArrowRight, Layers, Lock, Activity, Cloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function Services() {
  const { t } = useTranslation();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const services = [
    {
      id: 'security',
      icon: <ShieldCheck size={32} />,
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
      title: t('servicesPage.items.security.title', 'Ciberseguridad'),
      desc: t('servicesPage.items.security.desc'),
      features: t('servicesPage.items.security.features', { returnObjects: true }) as string[],
      widgetIcon: <Lock size={20} className="text-esoft-accent" />,
      widgetTitle: "Zero Trust Architecture",
      widgetDesc: "Protección proactiva 24/7",
      techTags: ["Firewalls Next-Gen", "EDR / XDR", "Análisis de Vulnerabilidades"]
    },
    {
      id: 'consulting',
      icon: <Briefcase size={32} />,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      title: t('servicesPage.items.consulting.title', 'Consultoría IT'),
      desc: t('servicesPage.items.consulting.desc'),
      features: t('servicesPage.items.consulting.features', { returnObjects: true }) as string[],
      widgetIcon: <Activity size={20} className="text-esoft-accent" />,
      widgetTitle: "Optimización Continua",
      widgetDesc: "Escalabilidad garantizada",
      techTags: ["Auditorías ITIL", "Transformación Ágil", "Arquitectura de Software"]
    },
    {
      id: 'infra',
      icon: <Server size={32} />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
      title: t('servicesPage.items.packaged.title', 'Soluciones Empaquetadas'),
      desc: t('servicesPage.items.packaged.desc'),
      features: t('servicesPage.items.packaged.features', { returnObjects: true }) as string[],
      widgetIcon: <Cloud size={20} className="text-esoft-accent" />,
      widgetTitle: "Uptime 99.99%",
      widgetDesc: "Infraestructura Resiliente",
      techTags: ["Cloud Híbrida", "Automatización", "Disaster Recovery"]
    }
  ];

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
    // MODIFICADO: Fondo base adaptativo
    <div className="pt-32 min-h-screen bg-[#f8fafc] dark:bg-[#050d0a] relative overflow-hidden transition-colors duration-500">

      {/* --- FONDO PREMIUM (Auroras + Dot Matrix Dinámica) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-100/50 dark:bg-esoft-accent/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />
        <div className="absolute bottom-[40%] right-[-10%] w-[800px] h-[800px] rounded-full bg-teal-100/50 dark:bg-emerald-500/5 blur-[150px] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />

        {/* Matriz Gris Plata para Light Mode */}
        <div
          className="absolute inset-0 opacity-[0.7] dark:opacity-0 transition-opacity duration-500"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #cbd5e1 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
          }}
        />
        {/* Matriz Verde para Dark Mode */}
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.15] transition-opacity duration-500"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #1b9f88 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="relative z-10">

        {/* 1. HERO SERVICES */}
        <section className="relative px-6 pt-16 pb-20 text-center max-w-6xl mx-auto flex flex-col items-center">

          {/* Píldoras decorativas flotantes */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="hidden lg:flex absolute top-20 left-10 items-center gap-2 px-4 py-2 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none rotate-[-4deg] transition-colors">
            <Cloud size={16} className="text-esoft-accent" /> <span className="text-sm font-bold text-slate-700 dark:text-gray-300">Cloud Native</span>
          </motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="hidden lg:flex absolute top-32 right-10 items-center gap-2 px-4 py-2 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none rotate-[4deg] transition-colors">
            <ShieldCheck size={16} className="text-esoft-accent" /> <span className="text-sm font-bold text-slate-700 dark:text-gray-300">Enterprise Security</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md mb-8 shadow-sm transition-colors"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-esoft-accent animate-pulse shadow-[0_0_8px_rgba(27,159,136,0.5)]" />
            <span className="text-slate-600 dark:text-gray-200 text-xs font-bold uppercase tracking-[0.2em] transition-colors">
              {t('servicesPage.hero.badge', 'Nuestras Soluciones')}
            </span>
          </motion.div>

          <div className="overflow-hidden mb-6 py-2">
            <motion.h1
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white transition-colors"
            >
              {t('servicesPage.hero.titleStart')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent via-emerald-400 to-teal-300 drop-shadow-sm dark:drop-shadow-none">
                {t('servicesPage.hero.titleEnd')}
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-12 transition-colors"
          >
            {t('servicesPage.hero.subtitle')}
          </motion.p>
        </section>

        {/* 2. LISTA DETALLADA DE SERVICIOS */}
        <section className="py-12 px-6 max-w-7xl mx-auto space-y-24 md:space-y-32 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              id={service.id}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >

              {/* --- COLUMNA DE IMAGEN COMPUESTA --- */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-esoft-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700 -z-10" />

                {/* Contenedor principal de la imagen */}
                <div className="relative aspect-[4/3] md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-xl shadow-slate-300/50 dark:shadow-[0_20px_50px_-15px_rgba(27,159,136,0.15)] group-hover:border-esoft-accent/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out grayscale-[20%] group-hover:grayscale-0"
                  />

                  {/* Icono de servicio */}
                  <div className="absolute top-8 left-8 z-20">
                    <div className="text-white bg-black/30 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/20">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Widget Flotante */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                  className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} z-30 bg-white/90 dark:bg-[#0a110e]/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 p-5 rounded-2xl shadow-xl shadow-slate-300/60 dark:shadow-2xl flex items-center gap-4 hidden md:flex transition-colors`}
                >
                  <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 transition-colors">
                    {service.widgetIcon}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white leading-tight transition-colors">{service.widgetTitle}</h5>
                    <p className="text-xs text-slate-500 dark:text-gray-400 transition-colors">{service.widgetDesc}</p>
                  </div>
                </motion.div>
              </div>

              {/* --- COLUMNA DE TEXTO ENRIQUECIDA --- */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">

                <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
                  {service.title}
                </h2>

                <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-light mb-8 transition-colors">
                  {service.desc}
                </p>

                {/* Grid de Píldoras de Capacidades (Modificado para Light Mode) */}
                <div className="bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-slate-200/50 dark:border-white/5 shadow-sm dark:shadow-none mb-8 transition-colors">
                  <h4 className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-[0.15em] mb-6 flex items-center gap-2 transition-colors">
                    <Layers size={16} className="text-esoft-accent" /> {t('servicesPage.capabilitiesTitle', 'Capacidades Clave')}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 bg-white dark:bg-white/5 p-3 rounded-xl border border-slate-100 dark:border-white/5 group/feature transition-colors hover:border-esoft-accent/30 shadow-sm dark:shadow-none">
                        <CheckCircle size={16} className="text-esoft-accent shrink-0 mt-0.5 opacity-70 group-hover/feature:opacity-100 transition-opacity" />
                        <span className="text-sm text-slate-700 dark:text-gray-300 font-medium leading-tight transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fila de "Tech Stack" */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-slate-200 dark:border-white/10 transition-colors">
                  <div className="flex flex-wrap gap-2">
                    {service.techTags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/80 dark:bg-white/5 text-slate-600 dark:text-gray-400 text-xs font-medium rounded-lg border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Botón CTA del Servicio */}
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold pb-1 group whitespace-nowrap transition-colors"
                  >
                    <span className="border-b-2 border-esoft-accent/30 group-hover:border-esoft-accent transition-colors text-sm uppercase tracking-wider">
                      {t('servicesPage.cta.btn', 'Consultar')}
                    </span>
                    <ArrowRight size={16} className="text-esoft-accent group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

              </div>

            </motion.div>
          ))}
        </section>

        {/* 3. CINTA DE ALIADOS ESTRATÉGICOS */}
        <section className="w-full bg-white/80 dark:bg-[#0a110e]/80 backdrop-blur-2xl border-y border-slate-200 dark:border-white/10 py-12 overflow-hidden relative flex flex-col z-10 transition-all duration-500 shadow-sm dark:shadow-xl mb-32">
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[#f8fafc]/90 dark:from-[#0a110e]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[#f8fafc]/90 dark:from-[#0a110e]/90 to-transparent z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 text-center mb-10 relative z-20 w-full">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-slate-800 dark:text-white uppercase tracking-wider relative inline-block transition-colors">
              {t('servicesPage.partnersTitle')}
              <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-esoft-accent rounded-full shadow-[0_0_10px_rgba(27,159,136,0.5)]"></span>
            </h2>
          </div>

          <motion.div
            className="flex gap-16 md:gap-24 items-center min-w-max pr-16 md:pr-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="relative flex items-center justify-center w-32 md:w-48 h-12 md:h-16 flex-shrink-0 group">
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="max-w-full max-h-full object-contain opacity-50 dark:opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer hover:scale-110 drop-shadow-none dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:!drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]"
                />
              </div>
            ))}
          </motion.div>
        </section>

        {/* 4. CTA SECCIÓN (Isla Premium Adaptable) */}
        <section className="py-12 px-6 text-center relative z-20 mb-20">
          <div className="max-w-5xl mx-auto relative group">

            <div className="absolute inset-0 bg-esoft-accent/10 dark:bg-esoft-accent/20 blur-[60px] rounded-[3rem] pointer-events-none transition-opacity duration-500 opacity-50 dark:opacity-100 group-hover:opacity-100" />

            {/* MODIFICADO: Fondo adaptable de la Isla (Blanco vs Oscuro) */}
            <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-[#0a110e] dark:to-[#050d0a] border border-white dark:border-gray-800 rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl shadow-slate-200/80 dark:shadow-2xl transition-colors duration-500">

              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.05] pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-esoft-accent/20 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-3xl md:text-5xl font-heading font-extrabold mb-8 text-slate-900 dark:text-white tracking-tight transition-colors">
                  {t('servicesPage.cta.title')}
                </h3>
                <p className="mb-12 text-lg text-slate-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto transition-colors">
                  {t('servicesPage.cta.desc')}
                </p>
                <Link
                  to="/contacto"
                  className="px-10 py-4 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(27,159,136,0.4)] dark:shadow-[0_10px_30px_-10px_rgba(27,159,136,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(27,159,136,0.6)] dark:hover:shadow-[0_15px_40px_-10px_rgba(27,159,136,0.8)] inline-flex items-center gap-3 hover:-translate-y-1"
                >
                  {t('servicesPage.cta.btn')} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}