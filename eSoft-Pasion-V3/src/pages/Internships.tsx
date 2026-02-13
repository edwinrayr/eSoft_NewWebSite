import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2, Sparkles, Rocket, Brain, Code, Laptop } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Internships() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#050d0a] pt-32 pb-24 px-6 relative overflow-hidden flex flex-col justify-center transition-colors duration-500">

      {/* --- FONDO PREMIUM (Matriz de Puntos Global) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-esoft-accent/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 blur-[150px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.5] dark:opacity-[0.15] transition-opacity duration-500"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #1b9f88 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Fila de Valor Frontal (Badges flotantes) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-sm font-bold text-gray-700 dark:text-gray-300 shadow-sm">
            <Rocket size={16} className="text-esoft-accent" /> Proyectos Reales
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-sm font-bold text-gray-700 dark:text-gray-300 shadow-sm">
            <Brain size={16} className="text-esoft-accent" /> Mentoría 1:1
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-sm font-bold text-gray-700 dark:text-gray-300 shadow-sm">
            <Laptop size={16} className="text-esoft-accent" /> Tecnologías Top
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ============================================================== */}
          {/* COLUMNA IZQUIERDA: MENSAJE INSPIRACIONAL (Ocupa 7 columnas)    */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-esoft-accent/10 border border-esoft-accent/20 text-esoft-accent text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Sparkles size={14} />
              {t('internshipsPage.hero.badge', 'Talento Emergente')}
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-extrabold text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
              {t('internshipsPage.hero.title', 'Inicia tu carrera en')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent via-emerald-400 to-teal-400">
                {t('internshipsPage.hero.highlight', 'las Grandes Ligas')}
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-12 max-w-xl">
              {t('internshipsPage.hero.subtitle', 'No buscamos a alguien para servir café. Buscamos mentes brillantes que quieran escribir código, configurar arquitecturas reales y aprender de los mejores.')}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                  {t('internshipsPage.general.title', 'Lo que te ofrecemos')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-6">
                  {t('internshipsPage.general.desc', 'Una inmersión total en el mundo del desarrollo de software y consultoría IT corporativa.')}
                </p>
              </div>

              {/* Lista de beneficios como "Glass Cards" */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(t('internshipsPage.general.benefits', { returnObjects: true }) as string[]).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-gray-200 dark:border-white/5 hover:border-esoft-accent/40 dark:hover:border-esoft-accent/40 transition-colors group"
                  >
                    <div className="p-1.5 rounded-xl bg-esoft-accent/10 text-esoft-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-snug">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* COLUMNA DERECHA: EL "PASE VIP" (Ocupa 5 columnas)              */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Resplandor trasero de la tarjeta */}
            <div className="absolute inset-0 bg-esoft-accent/20 blur-[80px] rounded-[3rem] opacity-50 dark:opacity-100" />

            {/* LA TARJETA (Diseño Oscuro Profundo siempre para impacto) */}
            <div className="bg-gray-900 dark:bg-[#0a110e] border border-gray-800 dark:border-white/10 p-10 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">

              {/* Textura de ruido */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />

              {/* Ícono gigante decorativo */}
              <div className="absolute -top-10 -right-10 text-white/5 group-hover:text-esoft-accent/5 transition-colors duration-700 pointer-events-none transform group-hover:rotate-12">
                <Code size={250} />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-esoft-accent mb-8 border border-white/10 shadow-inner">
                  <Mail size={32} />
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 tracking-tight leading-tight">
                  {t('internshipsPage.cta.title', 'Postúlate Ahora')}
                </h3>

                <p className="text-gray-400 mb-12 text-lg font-light leading-relaxed">
                  {t('internshipsPage.cta.desc', 'Envíanos tu CV y cuéntanos por qué quieres formar parte de la próxima generación de ingenieros en eSoft.')}
                </p>

                <a
                  href={`mailto:${t('internshipsPage.cta.email')}`}
                  className="w-full inline-flex items-center justify-between px-8 py-5 bg-esoft-accent text-white font-bold rounded-2xl hover:bg-emerald-500 transition-all shadow-[0_10px_30px_-10px_rgba(27,159,136,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(27,159,136,0.7)] group/btn hover:-translate-y-1 mt-auto"
                >
                  <span className="uppercase tracking-[0.15em] text-sm">Enviar mi CV</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-esoft-accent transition-colors">
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </a>

                <p className="text-center text-gray-500 text-xs mt-6 font-medium uppercase tracking-widest">
                  {t('internshipsPage.cta.note', 'Asunto del correo: Prácticas eSoft')}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}