import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, Shield, Users, Briefcase, Award, Zap, Globe, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function About() {
  const { t } = useTranslation();

  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="pt-24 min-h-screen bg-[#f8fafc] dark:bg-[#050d0a] relative overflow-hidden transition-colors duration-500">

      {/* FONDO PREMIUM */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-esoft-accent/10 dark:bg-esoft-accent/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />
        <div className="absolute bottom-[20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-emerald-400/10 dark:bg-emerald-500/5 blur-[150px] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />
        <div
          className="absolute inset-0 opacity-[0.5] dark:opacity-[0.15] transition-opacity duration-500"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #1b9f88 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="relative z-10">

        {/* 1. HERO CON ELEMENTOS FLOTANTES */}
        <section className="relative px-6 pt-24 pb-16 text-center max-w-6xl mx-auto flex flex-col items-center">

          {/* NUEVO: Píldoras tecnológicas flotantes para llenar el espacio lateral */}
          <motion.div
            animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute top-32 left-10 items-center gap-2 px-4 py-2 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm rotate-[-6deg]"
          >
            <Shield size={16} className="text-esoft-accent" /> <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Ciberseguridad</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex absolute top-40 right-10 items-center gap-2 px-4 py-2 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm rotate-[6deg]"
          >
            <Cpu size={16} className="text-esoft-accent" /> <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Infraestructura</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-8 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-esoft-accent animate-pulse" />
            <span className="text-gray-600 dark:text-gray-200 text-xs font-bold uppercase tracking-[0.2em]">
              {t('aboutPage.hero.badge', 'Nuestra Identidad')}
            </span>
          </motion.div>

          <div className="overflow-hidden mb-8 py-2">
            <motion.h1
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-extrabold tracking-tight leading-[1.1] text-gray-900 dark:text-white"
            >
              {t('aboutPage.hero.titleStart', 'Impulsando el')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent via-emerald-400 to-teal-300 drop-shadow-sm">
                {t('aboutPage.hero.titleEnd', 'Futuro Digital')}
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-16"
          >
            {t('aboutPage.hero.description', 'Somos más que una empresa de tecnología. Somos el socio estratégico que protege, automatiza y escala las operaciones de tu negocio hacia el siguiente nivel de innovación.')}
          </motion.p>

          {/* NUEVO: Barra de Estadísticas para anclar el Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl"
          >
            {[
              { num: "+15", text: "Años de Experiencia" },
              { num: "24/7", text: "Soporte Continuo" },
              { num: "100%", text: "Enfoque Estratégico" },
              { num: "+50", text: "Soluciones Integrales" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-6 bg-white/30 dark:bg-white/[0.02] backdrop-blur-md rounded-3xl border border-gray-200/50 dark:border-white/5">
                <span className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-2">{stat.num}</span>
                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold text-center">{stat.text}</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* 2. ACERCA DE NOSOTROS (Compromiso) */}
        <section className="py-20 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm text-esoft-accent">
                  <Award size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                  {t('aboutPage.commitment.title', 'Nuestro Compromiso')}
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    {t('aboutPage.commitment.p1', 'En eSoft, no solo entregamos software; diseñamos ecosistemas digitales resilientes. Nos sumergimos en la operación de tu negocio para identificar vulnerabilidades y oportunidades de automatización.')}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    {t('aboutPage.commitment.p2', 'Tu tranquilidad es nuestra métrica de éxito. Respaldados por líderes tecnológicos globales, garantizamos arquitecturas que no solo soportan el hoy, sino que están listas para el mañana.')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/5] md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl dark:shadow-[0_20px_50px_-15px_rgba(27,159,136,0.2)] border border-white/40 dark:border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                <motion.img
                  style={{ y: yImage, scale: 1.2 }}
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
                  alt="Tecnología eSoft"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                />

                <div className="absolute bottom-8 left-8 z-20 bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">
                  <p className="text-white font-bold tracking-widest uppercase text-xs">Transformación Digital</p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 3. MISIÓN, VISIÓN Y CULTURA (Bento Completado) */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          {/* NUEVO: Grid de 3 elementos para llenar el espacio correctamente */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative p-10 md:p-12 rounded-[2.5rem] bg-white/60 dark:bg-[#0a110e]/60 backdrop-blur-3xl border border-gray-200/50 dark:border-white/5 hover:border-esoft-accent/30 dark:hover:border-esoft-accent/30 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-esoft-accent/10 blur-[60px] rounded-full group-hover:bg-esoft-accent/20 transition-colors duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-50 dark:bg-black/30 rounded-2xl flex items-center justify-center text-esoft-accent mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                  {t('aboutPage.mission.title', 'Nuestra Misión')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  {t('aboutPage.mission.desc', 'Proveer soluciones tecnológicas seguras, innovadoras y escalables que empoderen a las empresas para alcanzar su máximo potencial en un entorno digital competitivo.')}
                </p>
              </div>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group relative p-10 md:p-12 rounded-[2.5rem] bg-white/60 dark:bg-[#0a110e]/60 backdrop-blur-3xl border border-gray-200/50 dark:border-white/5 hover:border-esoft-accent/30 dark:hover:border-esoft-accent/30 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[60px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-50 dark:bg-black/30 rounded-2xl flex items-center justify-center text-esoft-accent mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                  {t('aboutPage.vision.title', 'Nuestra Visión')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  {t('aboutPage.vision.desc', 'Ser reconocidos a nivel global como el aliado tecnológico definitivo, destacando por nuestra excelencia técnica, integridad y capacidad de transformación digital profunda.')}
                </p>
              </div>
            </motion.div>

            {/* NUEVO: Tarjeta ancha de Cultura (Cierra el espacio vacío abajo) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="md:col-span-2 group relative p-10 md:p-12 rounded-[2.5rem] bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl border border-gray-200/50 dark:border-white/5 hover:border-esoft-accent/40 transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-center gap-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-esoft-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="w-20 h-20 bg-gray-50 dark:bg-black/40 rounded-3xl flex items-center justify-center text-esoft-accent shadow-inner shrink-0 group-hover:rotate-12 transition-transform duration-500">
                <Globe size={40} />
              </div>

              <div className="relative z-10 flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                  Cultura eSoft
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  Fomentamos un ecosistema de aprendizaje continuo donde la curiosidad técnica y la colaboración humana se unen. Nuestro equipo no solo escribe código o configura servidores; resolvemos problemas reales con empatía y precisión milimétrica.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 4. VALORES Y TALENTO (Isla de Llamado a la Acción) */}
        <section id="valores" className="py-20 px-6 text-center scroll-mt-24 relative z-20">
          <div className="max-w-5xl mx-auto relative group">

            <div className="absolute inset-0 bg-esoft-accent/10 blur-[60px] rounded-[3rem] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

            <div className="relative bg-gradient-to-br from-gray-900 to-black dark:from-[#0a110e] dark:to-[#050d0a] border border-gray-800 dark:border-white/5 rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl">

              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-esoft-accent/20 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-esoft-accent mb-8 shadow-inner border border-white/5">
                  <Zap size={40} />
                </div>

                <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-8 text-white tracking-tight">
                  {t('aboutPage.values.title', 'El talento detrás de la tecnología')}
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light mb-12">
                  {t('aboutPage.values.desc', 'Descubre al equipo de ingenieros, consultores y estrategas que hacen posible que tu infraestructura digital nunca se detenga.')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
                  <a
                    href="https://soyjesusrivas.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_30px_-10px_rgba(27,159,136,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(27,159,136,0.8)] hover:-translate-y-1"
                  >
                    <Briefcase size={20} /> {t('aboutPage.values.btnCEO', 'Conoce a nuestro CEO')}
                  </a>

                  <Link
                    to="/nosotros/equipo"
                    className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md hover:-translate-y-1"
                  >
                    <Users size={20} /> {t('aboutPage.values.btnTeam', 'Ver al Equipo')}
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