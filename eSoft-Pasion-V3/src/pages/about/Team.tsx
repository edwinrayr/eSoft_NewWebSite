import { motion } from 'framer-motion';
import { Linkedin, ExternalLink, Mail, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Team() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      key: 'jesus',
      image: "/equipo/Jesus_Rivas.webp",
      link: "https://www.linkedin.com/in/jesusalexisrivas/"
    },
    {
      key: 'brandon',
      image: "/equipo/Brandon_Cosio.webp",
      link: "https://www.linkedin.com/in/brandon-cosio-27a449348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      key: 'orlando',
      image: "/equipo/Orlando_Palacios.webp",
      link: "https://www.linkedin.com/in/orlando-palacios-1a347a25a/"
    },
    {
      key: 'brenda',
      image: "/equipo/Brenda_Meza.webp",
      link: "https://www.linkedin.com/in/brenda-pe%C3%B1a-331060378/"
    },
    {
      key: 'tania',
      image: "/equipo/Tania.webp",
      link: "https://www.linkedin.com/in/taniamorenor/"
    }
  ];

  return (
    // MODIFICADO: Fondo base Slate-50 en Light Mode
    <div className="pt-32 min-h-screen bg-[#f8fafc] dark:bg-[#050d0a] relative overflow-hidden pb-32 transition-colors duration-500">

      {/* --- FONDO PREMIUM (Auroras + Dot Matrix Dinámica) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-100/50 dark:bg-esoft-accent/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />
        <div className="absolute bottom-[20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-teal-100/50 dark:bg-emerald-500/5 blur-[150px] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />

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

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Encabezado Nivel Apple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md mb-8 shadow-sm transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-esoft-accent animate-pulse shadow-[0_0_8px_rgba(27,159,136,0.5)]" />
            <span className="text-slate-600 dark:text-gray-200 text-xs font-bold uppercase tracking-[0.2em] transition-colors">
              {t('navbar.team', 'Nuestro Talento')}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white max-w-4xl mb-6 transition-colors">
            {/* Quitamos el bg-clip-text oscuro que ensucia en Light Mode y usamos un color sólido que transiciona */}
            <span>
              {t('aboutPage.team.title', 'Conoce al Equipo')}
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed transition-colors">
            {t('aboutPage.team.subtitle', 'Ingenieros, estrategas y especialistas apasionados por resolver los desafíos tecnológicos más complejos.')}
          </p>
        </motion.div>

        {/* GRID DE RETRATOS EDITORIALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              // MODIFICADO: Sombra y borde en Light Mode para dar volumen
              className="group relative h-[450px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-[#0a110e] border border-slate-200/50 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:border-esoft-accent/40 dark:hover:border-esoft-accent/30 cursor-pointer"
              onClick={() => window.open(member.link, '_blank')}
            >
              {/* IMAGEN DE FONDO COMPLETA */}
              <div className="absolute inset-0">
                <img
                  src={member.image}
                  alt={t(`aboutPage.team.members.${member.key}.name`)}
                  className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
              </div>

              {/* CAPA OSCURA DE LECTURA (Mantenemos esta capa oscura siempre para que el texto blanco se lea sobre las fotos) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 dark:from-black via-slate-900/50 dark:via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* CAPA VERDE ESMERALDA (Solo en Hover) */}
              <div className="absolute inset-0 bg-esoft-accent/0 mix-blend-overlay z-10 group-hover:bg-esoft-accent/30 dark:group-hover:bg-esoft-accent/40 transition-all duration-700" />

              {/* CONTENIDO DE TEXTO Y SOCIALES */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">

                {/* Elementos que suben al hacer hover */}
                <div className="transform translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col">

                  {/* Nombre y Puesto (Siempre en blanco por el overlay oscuro de la foto) */}
                  <div className="mb-4">
                    <h3 className="text-3xl font-heading font-bold text-white tracking-tight mb-1 group-hover:text-esoft-accent transition-colors">
                      {t(`aboutPage.team.members.${member.key}.name`)}
                    </h3>
                    <p className="text-esoft-accent text-xs font-bold uppercase tracking-[0.2em] opacity-90">
                      {t(`aboutPage.team.members.${member.key}.role`)}
                    </p>
                  </div>

                  {/* Descripción oculta que aparece */}
                  <p className="text-gray-300 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-6 line-clamp-3">
                    {t(`aboutPage.team.members.${member.key}.desc`)}
                  </p>

                  {/* Acciones */}
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-esoft-accent hover:border-transparent transition-colors">
                      <Linkedin size={18} />
                    </div>
                    <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                      Ver Perfil <ArrowRight size={14} className="text-esoft-accent" />
                    </span>
                  </div>

                </div>
              </div>

              {/* Icono superior derecho */}
              <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink size={16} />
              </div>

            </motion.div>
          ))}
        </div>

        {/* SECCIÓN INVITACIÓN (CARRERAS) - Diseño Isla Adaptable */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-5xl mx-auto relative group"
        >
          {/* Sombra de la Isla */}
          <div className="absolute inset-0 bg-esoft-accent/10 dark:bg-esoft-accent/20 blur-[60px] rounded-[3rem] pointer-events-none transition-opacity duration-500 opacity-50 dark:opacity-100 group-hover:opacity-100" />

          {/* MODIFICADO: Isla adaptable. Blanco Perla en Light Mode, Negro en Dark Mode */}
          <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-[#0a110e] dark:to-[#050d0a] border border-white dark:border-white/5 rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl shadow-slate-200/80 dark:shadow-2xl text-center transition-colors duration-500">

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.05] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-esoft-accent/20 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-esoft-accent mb-8 shadow-sm border border-slate-100 dark:border-white/5 transition-colors">
                <Mail size={40} />
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight transition-colors">
                {t('aboutPage.team.cta.title', '¿Quieres ser parte del equipo?')}
              </h2>

              <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light mb-10 transition-colors">
                {t('aboutPage.team.cta.desc', 'Buscamos mentes inquietas listas para enfrentar retos tecnológicos complejos. Si te apasiona la innovación, hay un lugar para ti.')}
              </p>

              <a
                href="mailto:talento@esoftpasion.com"
                className="inline-flex items-center gap-3 px-10 py-4 bg-esoft-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(27,159,136,0.4)] dark:shadow-[0_10px_30px_-10px_rgba(27,159,136,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(27,159,136,0.6)] dark:hover:shadow-[0_15px_40px_-10px_rgba(27,159,136,0.8)] hover:-translate-y-1"
              >
                {t('aboutPage.team.cta.btn', 'Enviar Currículum')} <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}