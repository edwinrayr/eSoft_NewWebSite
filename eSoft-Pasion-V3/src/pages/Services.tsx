import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Briefcase, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function Services() {
  const { t } = useTranslation();
  const { hash } = useLocation();

  // Lógica de Scroll Automático
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
      icon: <ShieldCheck size={40} />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      title: t('servicesPage.items.security.title'),
      desc: t('servicesPage.items.security.desc'),
      features: t('servicesPage.items.security.features', { returnObjects: true }) as string[]
    },
    {
      id: 'consulting',
      icon: <Briefcase size={40} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      title: t('servicesPage.items.consulting.title'),
      desc: t('servicesPage.items.consulting.desc'),
      features: t('servicesPage.items.consulting.features', { returnObjects: true }) as string[]
    },
    {
      id: 'infra',
      icon: <Server size={40} />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1374&auto=format&fit=crop",
      title: t('servicesPage.items.packaged.title'),
      desc: t('servicesPage.items.packaged.desc'),
      features: t('servicesPage.items.packaged.features', { returnObjects: true }) as string[]
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
    <div className="pt-24 min-h-screen bg-white dark:bg-esoft-dark relative overflow-hidden transition-colors duration-300">

      {/* CAPA DE ANIMACIÓN VERDE MENTA */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/50 to-white bg-[length:200%_200%] animate-gradient-x" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#1b9f88 1px, transparent 1px), linear-gradient(to right, #1b9f88 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
      </div>

      <div className="relative z-10">

        {/* 1. HERO SERVICES */}
        <section className="relative px-6 py-20 text-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-6 text-gray-900 dark:text-white">
              {t('servicesPage.hero.titleStart')} <span className="text-esoft-accent">{t('servicesPage.hero.titleEnd')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-esoft-gray-light font-light leading-relaxed">
              {t('servicesPage.hero.subtitle')}
            </p>
          </motion.div>
        </section>

        {/* 2. LISTA DETALLADA CON IMÁGENES */}
        <section className="py-20 px-6 max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              id={service.id}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-esoft-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-10" />
                <div className="relative h-[400px] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl group-hover:border-esoft-accent/50 transition-all duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent mix-blend-multiply"></div>
                  <div className="absolute bottom-8 left-8 z-20">
                    <div className="text-esoft-accent bg-white/20 dark:bg-white/10 backdrop-blur-md p-4 rounded-2xl inline-block shadow-lg border border-white/20">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white">{service.title}</h2>
                <p className="text-lg text-gray-600 dark:text-esoft-gray-light leading-relaxed border-l-2 border-esoft-accent/50 pl-4">
                  {service.desc}
                </p>
                <div className="bg-white/40 dark:bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-white/5 hover:border-esoft-accent/30 transition-colors">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white uppercase mb-6 flex items-center gap-3 tracking-wide">
                    <Layers size={20} className="text-esoft-accent" /> {t('servicesPage.capabilitiesTitle')}
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle size={16} className="text-esoft-accent shrink-0 mt-0.5" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 text-gray-900 dark:text-white border-b-2 border-esoft-accent/30 pb-1 hover:text-esoft-accent hover:border-esoft-accent transition-all group mt-4 font-bold"
                >
                  {t('servicesPage.cta.btn')} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </section>

        {/* 3. CINTA DE ALIADOS ESTRATÉGICOS (EFECTO NEÓN IGUAL A HOME) */}
        {/* MODIFICADO: Fondo neutro que respeta el modo claro/oscuro en lugar del verde sólido */}
        <section className="w-full bg-black/5 dark:bg-black/20 border-y border-gray-200 dark:border-white/10 py-12 overflow-hidden relative flex flex-col z-10 transition-all duration-500 shadow-2xl backdrop-blur-sm">

          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-esoft-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-esoft-dark to-transparent z-10 pointer-events-none"></div>

          {/* MODIFICADO: Título ajustado al modo claro/oscuro con su rayita verde original */}
          <div className="max-w-7xl mx-auto px-6 text-center mb-10 relative z-20">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-gray-900 dark:text-white uppercase tracking-wider relative inline-block">
              {t('servicesPage.partnersTitle')}
              <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-esoft-accent rounded-full"></span>
            </h2>
          </div>

          <motion.div
            className="flex gap-16 md:gap-24 items-center min-w-max pr-16 md:pr-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 80,
              ease: "linear",
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center w-32 md:w-48 h-12 md:h-16 flex-shrink-0 group"
              >
                {/* MODIFICADO: Diseño Premium sin cajas (Idéntico a Home.tsx) */}
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer hover:scale-110 drop-shadow-none dark:drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] hover:!drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]"
                />
              </div>
            ))}
          </motion.div>
        </section>

        {/* 4. CTA SECCIÓN */}
        <section className="py-20 px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto bg-white/60 dark:bg-gradient-to-b dark:from-esoft-charcoal dark:to-black border border-gray-200 dark:border-white/10 p-12 rounded-3xl relative overflow-hidden shadow-2xl backdrop-blur-md transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-esoft-accent to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-esoft-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

            <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              {t('servicesPage.cta.title')}
            </h3>
            <p className="mb-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
              {t('servicesPage.cta.desc')}
            </p>
            <Link
              to="/contacto"
              className="px-10 py-4 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-500 transition-all shadow-xl hover:shadow-esoft-accent/30 inline-flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              {t('servicesPage.cta.btn')} <ArrowRight />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}