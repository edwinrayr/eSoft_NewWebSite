import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Lock, Globe, ShoppingBag, Activity, Briefcase, ArrowRight, Check, BarChart3, Cloud, Server, Cpu, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';

export default function Solutions() {
  const { t } = useTranslation();
  const { hash } = useLocation();

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

  // AGREGADO: Imágenes conceptuales de alta calidad para cada caso para rellenar los espacios laterales
  const caseStudies = [
    {
      sector: t('solutionsPage.cases.fintech.sector', 'Fintech'),
      title: t('solutionsPage.cases.fintech.title', 'Seguridad Transaccional Zero-Trust'),
      challenge: t('solutionsPage.cases.fintech.challenge', 'Altos índices de intentos de fraude y latencia crítica en transacciones internacionales.'),
      solution: t('solutionsPage.cases.fintech.solution', 'Implementación de arquitectura de microservicios con cifrado end-to-end y monitoreo IA.'),
      result: t('solutionsPage.cases.fintech.result', '0% brechas y 40% más rapidez'),
      icon: <Lock size={28} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      color: "from-blue-500/20"
    },
    {
      sector: t('solutionsPage.cases.ecommerce.sector', 'E-Commerce'),
      title: t('solutionsPage.cases.ecommerce.title', 'Infraestructura de Alta Disponibilidad'),
      challenge: t('solutionsPage.cases.ecommerce.challenge', 'Caídas del sistema durante temporadas altas (Hot Sale / Buen Fin) perdiendo miles en ventas.'),
      solution: t('solutionsPage.cases.ecommerce.solution', 'Migración a entorno Cloud Híbrido con auto-escalado predictivo en AWS/Azure.'),
      result: t('solutionsPage.cases.ecommerce.result', 'Uptime del 99.99% en picos'),
      icon: <ShoppingBag size={28} />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
      color: "from-emerald-500/20"
    },
    {
      sector: t('solutionsPage.cases.healthtech.sector', 'HealthTech'),
      title: t('solutionsPage.cases.healthtech.title', 'Gestión de Datos Clínicos'),
      challenge: t('solutionsPage.cases.healthtech.challenge', 'Datos de pacientes descentralizados y sin normativas de protección vigentes.'),
      solution: t('solutionsPage.cases.healthtech.solution', 'Desarrollo de un lago de datos cifrado con controles de acceso biométricos y auditoría continua.'),
      result: t('solutionsPage.cases.healthtech.result', 'Cumplimiento normativo total'),
      icon: <Activity size={28} />,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
      color: "from-teal-500/20"
    }
  ];

  // AGREGADO: Listas separadas para el carrusel infinito (Sectores y Tecnología)
  const marqueeSectorsRow1 = [
    { name: "Servicios Financieros", icon: <Briefcase size={18} /> },
    { name: "Educación / EdTech", icon: <Globe size={18} /> },
    { name: "Logística & Supply Chain", icon: <ArrowRight size={18} /> },
    { name: "Retail & E-Commerce", icon: <ShoppingBag size={18} /> },
    { name: "Sector Salud", icon: <Activity size={18} /> }
  ];
  const marqueeTechRow2 = [
    { name: "Cloud Computing", icon: <Cloud size={18} /> },
    { name: "Ciberseguridad", icon: <Lock size={18} /> },
    { name: "Big Data", icon: <Database size={18} /> },
    { name: "Infraestructura Red", icon: <Server size={18} /> },
    { name: "Automatización", icon: <Cpu size={18} /> }
  ];

  return (
    <div className="pt-32 min-h-screen bg-[#f8fafc] dark:bg-[#050d0a] relative overflow-hidden transition-colors duration-500">

      {/* --- FONDO PREMIUM (Auroras + Dot Matrix Completa) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-esoft-accent/10 dark:bg-esoft-accent/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />
        <div className="absolute bottom-[30%] right-[-10%] w-[800px] h-[800px] rounded-full bg-emerald-400/10 dark:bg-emerald-500/5 blur-[150px] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />

        {/* Matriz de puntos que abarca toda la página para evitar vacíos visuales */}
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.1] transition-opacity duration-500"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #1b9f88 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10">

        {/* 1. HERO SOLUCIONES */}
        <section className="relative px-6 pt-16 pb-24 text-center max-w-6xl mx-auto flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-8 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-esoft-accent animate-pulse" />
            <span className="text-gray-600 dark:text-gray-200 text-xs font-bold uppercase tracking-[0.2em]">
              {t('solutionsPage.hero.badge', 'Casos de Éxito')}
            </span>
          </motion.div>

          <div className="overflow-hidden mb-8 py-2">
            <motion.h1
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-extrabold tracking-tight leading-[1.1] text-gray-900 dark:text-white"
            >
              {t('solutionsPage.hero.titleLine1', 'Resultados que')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent via-emerald-400 to-teal-300 drop-shadow-sm">
                {t('solutionsPage.hero.titleLine2', 'Transforman Industrias')}
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto mb-16"
          >
            {t('solutionsPage.hero.subtitle', 'Descubre cómo nuestras arquitecturas y estrategias de ingeniería de software han resuelto los problemas más críticos de nuestros clientes.')}
          </motion.p>

          {/* MÉTRICAS DE IMPACTO (Anclaje visual) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl"
          >
            {[
              { icon: <BarChart3 className="text-esoft-accent mb-3 mx-auto" />, num: "+40%", text: "Eficiencia Operativa" },
              { icon: <Lock className="text-esoft-accent mb-3 mx-auto" />, num: "100%", text: "Seguridad Garantizada" },
              { icon: <TrendingUp className="text-esoft-accent mb-3 mx-auto" />, num: "+99.9%", text: "Uptime de Sistemas" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-6 md:p-8 bg-white/60 dark:bg-white/[0.02] backdrop-blur-2xl rounded-[2rem] border border-gray-200/50 dark:border-white/5 shadow-xl dark:shadow-none hover:border-esoft-accent/30 transition-colors">
                {stat.icon}
                <span className="text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-2">{stat.num}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] font-bold text-center">{stat.text}</span>
              </div>
            ))}
          </motion.div>

        </section>

        {/* 2. SECCIÓN CASOS DE ÉXITO (MODIFICADO: Showcases Horizontales Alternados) */}
        <section id="casos" className="py-20 px-6 max-w-7xl mx-auto space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-0 items-center bg-white/40 dark:bg-[#0a110e]/40 backdrop-blur-2xl rounded-[3rem] border border-gray-200/50 dark:border-white/5 overflow-hidden shadow-2xl dark:shadow-[0_20px_50px_-15px_rgba(27,159,136,0.1)] group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >

              {/* Mitad de Imagen con Overlay Dinámico */}
              <div className="w-full lg:w-1/2 relative aspect-square md:aspect-video lg:aspect-auto lg:h-[600px] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-tr ${study.color} to-transparent mix-blend-overlay z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute bottom-8 left-8 z-20 bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                  <div className="text-esoft-accent bg-white/20 dark:bg-white/10 p-3 rounded-xl">
                    {study.icon}
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold uppercase tracking-widest">{study.sector}</p>
                    <p className="text-gray-200 text-sm font-light">Caso de Éxito</p>
                  </div>
                </div>
              </div>

              {/* Mitad de Contenido (Dossier Técnico) */}
              <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 dark:text-white mb-10 tracking-tight leading-tight">
                  {study.title}
                </h3>

                <div className="space-y-8 mb-12">
                  <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gray-200 dark:before:bg-white/10">
                    <p className="text-[11px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-3">
                      {t('solutionsPage.labels.challenge', 'El Reto')}
                    </p>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">{study.challenge}</p>
                  </div>

                  <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-esoft-accent before:to-emerald-400">
                    <p className="text-[11px] text-esoft-accent uppercase tracking-[0.2em] font-bold mb-3">
                      {t('solutionsPage.labels.solution', 'La Solución')}
                    </p>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">{study.solution}</p>
                  </div>
                </div>

                {/* Bloque de Resultado de Alto Impacto */}
                <div className="bg-gray-900 dark:bg-white/5 border border-gray-800 dark:border-white/10 rounded-2xl p-6 flex items-center gap-5 shadow-lg">
                  <div className="w-14 h-14 bg-esoft-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <TrendingUp size={24} className="text-esoft-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-1">Impacto Real</p>
                    <span className="text-lg md:text-xl font-bold text-white leading-tight">{study.result}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </section>

        {/* 3. SECCIÓN SECTORES (MODIFICADO: Edge-to-Edge Marquee) */}
        <section id="sectores" className="py-24 border-y border-gray-200/50 dark:border-white/5 bg-white/30 dark:bg-black/20 backdrop-blur-xl relative z-10 overflow-hidden shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12 relative z-20">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-gray-900 dark:text-white uppercase tracking-wider relative inline-block">
              {t('solutionsPage.sectors.title', 'Industrias y Tecnología que Dominamos')}
              <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-esoft-accent rounded-full shadow-[0_0_10px_rgba(27,159,136,0.5)]"></span>
            </h2>
          </div>

          {/* Cortinas de desvanecimiento laterales para el carrusel */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#f8fafc] dark:from-[#0a110e] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#f8fafc] dark:from-[#0a110e] to-transparent z-20 pointer-events-none" />

          {/* Fila 1: Industrias (Moviéndose a la izquierda) */}
          <div className="flex w-full overflow-hidden mb-6">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex gap-6 min-w-max px-6"
            >
              {[...marqueeSectorsRow1, ...marqueeSectorsRow1, ...marqueeSectorsRow1].map((industry, i) => (
                <div key={i} className="px-8 py-4 rounded-2xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-md border border-gray-200 dark:border-white/10 flex items-center gap-4 shadow-sm hover:border-esoft-accent/50 hover:bg-white dark:hover:bg-white/5 transition-colors cursor-default">
                  <div className="text-esoft-accent bg-esoft-accent/10 p-2 rounded-lg">{industry.icon}</div>
                  <span className="font-bold text-base text-gray-800 dark:text-gray-200">{industry.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Fila 2: Tecnología (Moviéndose a la derecha) */}
          <div className="flex w-full overflow-hidden">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
              className="flex gap-6 min-w-max px-6"
            >
              {[...marqueeTechRow2, ...marqueeTechRow2, ...marqueeTechRow2].map((tech, i) => (
                <div key={i} className="px-8 py-4 rounded-2xl bg-gray-900 dark:bg-white/[0.03] backdrop-blur-md border border-gray-800 dark:border-white/10 flex items-center gap-4 shadow-sm hover:border-esoft-accent/50 transition-colors cursor-default">
                  <div className="text-emerald-400 bg-white/5 p-2 rounded-lg">{tech.icon}</div>
                  <span className="font-bold text-base text-gray-100 dark:text-gray-200">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. SECCIÓN BENEFICIOS (Isla con Dashboard UI Integrado) */}
        <section id="beneficios" className="py-24 px-6 max-w-6xl mx-auto mb-20 relative z-20">
          <div className="relative group">

            <div className="absolute inset-0 bg-esoft-accent/10 blur-[80px] rounded-[3rem] pointer-events-none transition-opacity duration-500 opacity-60" />

            <div className="relative bg-gradient-to-br from-gray-900 to-black dark:from-[#0a110e] dark:to-[#050d0a] rounded-[3rem] p-10 md:p-16 border border-gray-800 dark:border-white/5 flex flex-col lg:flex-row items-center gap-16 shadow-2xl overflow-hidden">

              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />

              <div className="flex-1 space-y-8 relative z-10 w-full">
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                  {t('solutionsPage.benefits.title', 'El valor real de una arquitectura impecable')}
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed font-light">
                  {t('solutionsPage.benefits.desc', 'Al centralizar y asegurar tu infraestructura, los beneficios trascienden al código y se reflejan directamente en tu cuenta de resultados.')}
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    t('solutionsPage.benefits.list.item1', 'Reducción de costos operativos hasta un 30%.'),
                    t('solutionsPage.benefits.list.item2', 'Mitigación total de riesgos por pérdida de datos.'),
                    t('solutionsPage.benefits.list.item3', 'Escalabilidad bajo demanda sin fricciones.')
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                      className="flex items-start gap-4 text-sm font-medium text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5"
                    >
                      <div className="bg-esoft-accent/20 p-1.5 rounded-full text-esoft-accent shrink-0 mt-0.5">
                        <Check size={14} />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Dentro del Bloque */}
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(27,159,136,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(27,159,136,0.8)] hover:-translate-y-1 w-fit"
                >
                  Mejorar mi infraestructura <ArrowRight size={18} />
                </Link>
              </div>

              {/* Lado Derecho: Interfaz Dashboard Evolucionada */}
              <div className="flex-1 w-full relative z-10">
                <div className="relative aspect-square md:aspect-[4/3] bg-white/[0.03] backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden group/dashboard">

                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Crecimiento / ROI</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-7xl font-heading font-extrabold text-white">400%</span>
                      <span className="text-esoft-accent font-bold"><TrendingUp size={32} /></span>
                    </div>
                  </div>

                  {/* Barras animadas */}
                  <div className="flex items-end justify-between w-full h-32 md:h-48 gap-3 md:gap-5 mt-auto pb-4">
                    {[15, 30, 50, 75, 100].map((height, i) => (
                      <div key={i} className="w-full relative h-full flex items-end opacity-80 group-hover/dashboard:opacity-100 transition-opacity duration-300">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                          className={`w-full rounded-t-xl ${i === 4 ? 'bg-esoft-accent shadow-[0_0_20px_rgba(27,159,136,0.6)]' : 'bg-white/10'
                            }`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Línea base del gráfico */}
                  <div className="absolute bottom-6 left-6 right-6 h-px bg-white/10" />

                  <motion.div
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-1 bg-esoft-accent/20 blur-[2px] pointer-events-none"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}