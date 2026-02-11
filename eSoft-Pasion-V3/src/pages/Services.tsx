import { useEffect } from 'react'; // 1. Importar useEffect
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Briefcase, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom'; // 2. Importar useLocation

export default function Services() {
  const { t } = useTranslation();
  const { hash } = useLocation(); // 3. Obtener el hash de la URL (ej: #security)

  // 4. Lógica de Scroll Automático
  useEffect(() => {
    if (hash) {
      // Si hay un hash, esperamos un poquito a que renderice y hacemos scroll
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      // Si no hay hash, vamos al inicio
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const services = [
    {
      id: 'security', // Coincide con /servicios#security
      icon: <ShieldCheck size={40} />, 
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      title: t('servicesPage.items.security.title'),
      desc: t('servicesPage.items.security.desc'),
      features: t('servicesPage.items.security.features', { returnObjects: true }) as string[]
    },
    {
      id: 'consulting', // Coincide con /servicios#consulting
      icon: <Briefcase size={40} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      title: t('servicesPage.items.consulting.title'),
      desc: t('servicesPage.items.consulting.desc'),
      features: t('servicesPage.items.consulting.features', { returnObjects: true }) as string[]
    },
    {
      id: 'infra', // ¡CAMBIO IMPORTANTE! Antes era 'packaged', lo cambié a 'infra' para coincidir con tu Navbar
      icon: <Server size={40} />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1374&auto=format&fit=crop",
      title: t('servicesPage.items.packaged.title'),
      desc: t('servicesPage.items.packaged.desc'),
      features: t('servicesPage.items.packaged.features', { returnObjects: true }) as string[]
    }
  ];

  const partners = ['Broadcom', 'Symantec', 'VMware', 'AppNeta', 'Carbon Black', 'Automic'];
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="pt-24 min-h-screen bg-esoft-dark relative overflow-hidden">
      
      {/* 1. HERO SERVICES */}
      <section className="relative px-6 py-20 text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-6 text-white">
            {t('servicesPage.hero.titleStart')} <span className="text-esoft-accent">{t('servicesPage.hero.titleEnd')}</span>
          </h1>
          <p className="text-xl text-esoft-gray-light font-light leading-relaxed">
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
            id={service.id} // AQUÍ ES DONDE EL NAVEGADOR BUSCA EL OBJETIVO
            className={`flex flex-col md:flex-row gap-12 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* --- SECCIÓN VISUAL --- */}
            <div className="w-full md:w-1/2 relative group">
              {/* Efecto de halo de fondo */}
              <div className="absolute inset-0 bg-esoft-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-10" />
              
              {/* Contenedor de la Imagen */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-esoft-accent/50 transition-all duration-500">
                {/* Imagen */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                
                {/* Capas de superposición */}
                <div className="absolute inset-0 bg-gradient-to-t from-esoft-charcoal via-esoft-charcoal/60 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-esoft-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>

                {/* SOLO EL ÍCONO */}
                <div className="absolute bottom-8 left-8 z-20">
                   <div className="text-esoft-accent bg-white/10 backdrop-blur-md p-4 rounded-2xl inline-block shadow-lg border border-white/10">
                      {service.icon}
                   </div>
                </div>
              </div>
            </div>

            {/* --- CONTENIDO DE TEXTO --- */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-heading font-bold text-white">{service.title}</h2>
              <p className="text-lg text-esoft-gray-light leading-relaxed border-l-2 border-esoft-accent/50 pl-4">
                {service.desc}
              </p>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-white/20 transition-colors">
                <h4 className="text-sm font-bold text-white uppercase mb-4 flex items-center gap-2">
                  <Layers size={14} className="text-esoft-accent" /> Capacidades & Tecnologías
                </h4>
                <ul className="grid grid-cols-1 gap-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle size={16} className="text-esoft-accent shrink-0 mt-0.5" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                to="/contacto"
                className="inline-flex items-center gap-2 text-white border-b-2 border-esoft-accent/30 pb-1 hover:text-esoft-accent hover:border-esoft-accent transition-all group mt-4 font-bold"
              >
                {t('servicesPage.cta.btn')} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 3. ALIADOS ESTRATÉGICOS - CINTA INFINITA */}
      <section className="py-24 bg-esoft-charcoal/50 border-y border-white/5 overflow-hidden relative relative">
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-esoft-dark to-transparent z-10 pointer-events-none"></div>
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-esoft-dark to-transparent z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-white uppercase tracking-wider relative inline-block">
            {t('servicesPage.partnersTitle')}
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-esoft-accent rounded-full"></span>
          </h2>
        </div>
          
        <div className="flex relative overflow-hidden py-8">
          <motion.div
            className="flex gap-8 flex-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={index} 
                className="shrink-0 px-8 py-4 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-sm pointer-events-none select-none"
              >
                <span className="font-heading font-bold tracking-wider text-xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500 uppercase">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-esoft-charcoal to-black border border-white/10 p-12 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-esoft-accent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-esoft-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h3 className="text-3xl font-heading font-bold text-white mb-6">
            {t('servicesPage.cta.title')}
          </h3>
          <p className="mb-10 text-lg text-gray-400 leading-relaxed max-w-xl mx-auto">
            {t('servicesPage.cta.desc')}
          </p>
          <Link 
            to="/contacto"
            className="px-10 py-4 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/30 inline-flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            {t('servicesPage.cta.btn')} <ArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
}