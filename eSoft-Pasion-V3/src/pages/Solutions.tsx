import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Lock, Globe, ShoppingBag, Activity, Briefcase, ArrowRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export default function Solutions() {
  const { t } = useTranslation();
  const { hash } = useLocation();

  // Lógica de Scroll Automático
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const caseStudies = [
    {
      sector: t('solutionsPage.cases.fintech.sector'),
      title: t('solutionsPage.cases.fintech.title'),
      challenge: t('solutionsPage.cases.fintech.challenge'),
      solution: t('solutionsPage.cases.fintech.solution'),
      result: t('solutionsPage.cases.fintech.result'),
      icon: <Lock size={24} />
    },
    {
      sector: t('solutionsPage.cases.ecommerce.sector'),
      title: t('solutionsPage.cases.ecommerce.title'),
      challenge: t('solutionsPage.cases.ecommerce.challenge'),
      solution: t('solutionsPage.cases.ecommerce.solution'),
      result: t('solutionsPage.cases.ecommerce.result'),
      icon: <ShoppingBag size={24} />
    },
    {
      sector: t('solutionsPage.cases.healthtech.sector'),
      title: t('solutionsPage.cases.healthtech.title'),
      challenge: t('solutionsPage.cases.healthtech.challenge'),
      solution: t('solutionsPage.cases.healthtech.solution'),
      result: t('solutionsPage.cases.healthtech.result'),
      icon: <Activity size={24} />
    }
  ];

  return (
    // CAMBIO: Fondo base blanco/oscuro adaptable
    <div className="pt-24 min-h-screen bg-white dark:bg-esoft-dark relative overflow-hidden transition-colors duration-300">
      
      {/* CAPA DE ANIMACIÓN VERDE MENTA (Solo visible en Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500">
         <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/50 to-white bg-[length:200%_200%] animate-gradient-x" />
         <div className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: 'linear-gradient(#1b9f88 1px, transparent 1px), linear-gradient(to right, #1b9f88 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
         />
      </div>

      <div className="relative z-10">
        
        {/* 1. HERO SOLUCIONES */}
        <section className="relative px-6 py-20 text-center">
          <div className="absolute top-20 left-10 w-64 h-64 bg-esoft-accent/10 rounded-full blur-[80px] animate-pulse" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <span className="text-esoft-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              {t('solutionsPage.hero.badge')}
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase mb-6 leading-tight text-gray-900 dark:text-white">
              {t('solutionsPage.hero.titleLine1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent to-gray-500">
                {t('solutionsPage.hero.titleLine2')}
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-esoft-gray-light font-light max-w-2xl mx-auto">
              {t('solutionsPage.hero.subtitle')}
            </p>
          </motion.div>
        </section>

        {/* 2. SECCIÓN CASOS DE ÉXITO */}
        <section id="casos" className="py-12 px-6 max-w-7xl mx-auto pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                // TARJETA: Blanco en Light con sombra | Translúcido en Dark
                className="group relative bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:bg-white dark:hover:bg-white/[0.08] transition-all hover:-translate-y-2 shadow-xl dark:shadow-none backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-esoft-accent/10 text-esoft-accent text-xs font-bold uppercase tracking-wider border border-esoft-accent/20">
                    {study.sector}
                  </span>
                  <div className="text-gray-400 dark:text-esoft-gray-light group-hover:text-esoft-accent transition-colors">
                    {study.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4 group-hover:text-esoft-accent transition-colors">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">
                      {t('solutionsPage.labels.challenge')} 
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="w-full h-px bg-gray-200 dark:bg-white/10"></div>
                  <div>
                    <p className="text-xs text-esoft-accent uppercase font-bold mb-1">
                      {t('solutionsPage.labels.solution')}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/10 flex items-center gap-2">
                  <TrendingUp size={16} className="text-green-500 dark:text-green-400" />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{study.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. SECCIÓN SECTORES */}
        <section id="sectores" className="py-24 bg-gray-50/50 dark:bg-black/20 pt-32 backdrop-blur-sm transition-colors border-y border-gray-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-heading font-bold mb-12 text-gray-900 dark:text-white">{t('solutionsPage.sectors.title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: t('solutionsPage.sectors.finance'), icon: <Briefcase /> },
                { name: t('solutionsPage.sectors.elearning'), icon: <Globe /> },
                { name: t('solutionsPage.sectors.logistics'), icon: <ArrowRight /> },
                { name: t('solutionsPage.sectors.retail'), icon: <ShoppingBag /> },
              ].map((industry, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/5 flex flex-col items-center gap-3 hover:border-esoft-accent/50 transition-all cursor-default shadow-sm dark:shadow-none"
                >
                  <div className="text-esoft-accent">{industry.icon}</div>
                  <span className="font-bold text-gray-800 dark:text-white">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN BENEFICIOS */}
        <section id="beneficios" className="py-20 px-6 max-w-5xl mx-auto pt-32">
          {/* Mantenemos el fondo oscuro para el CTA de beneficios por impacto visual */}
          <div className="bg-gray-900 dark:bg-gradient-to-br dark:from-esoft-charcoal dark:to-black rounded-3xl p-8 md:p-12 border border-gray-800 dark:border-white/10 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-heading font-bold text-white">{t('solutionsPage.benefits.title')}</h2>
              <p className="text-gray-300 dark:text-esoft-gray-light leading-relaxed">
                {t('solutionsPage.benefits.desc')}
              </p>
              <ul className="space-y-3">
                {[
                  t('solutionsPage.benefits.list.item1'),
                  t('solutionsPage.benefits.list.item2'),
                  t('solutionsPage.benefits.list.item3')
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-white">
                    <div className="bg-esoft-accent/20 p-1 rounded-full text-esoft-accent"><Check size={12} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-video bg-white/5 dark:bg-esoft-accent/10 rounded-xl overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-6xl text-white/10 font-bold group-hover:text-white/20 transition-colors">ROI+</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-around px-8 pb-8">
                  <div className="w-8 h-[40%] bg-white/20 rounded-t-sm"></div>
                  <div className="w-8 h-[60%] bg-white/20 rounded-t-sm"></div>
                  <div className="w-8 h-[80%] bg-esoft-accent rounded-t-sm shadow-[0_0_15px_#1b9f88]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}