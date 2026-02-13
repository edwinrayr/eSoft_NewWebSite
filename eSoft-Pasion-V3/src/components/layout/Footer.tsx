import { Instagram, Linkedin, MapPin, Phone, Youtube, ChevronRight, Mail, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Icono de TikTok personalizado
const TikTokIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#f8fafc] dark:bg-[#020604] pt-24 pb-8 overflow-hidden transition-colors duration-500">

      {/* LÍNEA DE BORDE SUPERIOR (Gradiente Premium) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-esoft-accent/50 to-transparent opacity-50" />

      {/* --- FONDO PREMIUM (Auroras + Dot Matrix) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-esoft-accent/10 dark:bg-esoft-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.5] dark:opacity-[0.1] transition-opacity duration-500"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #1b9f88 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 100%, black 40%, transparent 100%)'
          }}
        />
      </div>

      {/* MARCA DE AGUA MONUMENTAL EN EL FONDO (Rellena el espacio inferior) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none z-0">
        <span className="text-[14vw] font-heading font-extrabold text-gray-900 dark:text-white opacity-[0.03] select-none whitespace-nowrap translate-y-1/4 tracking-tighter">
          ESOFT PASION
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* GRID ASIMÉTRICO (La clave para no dejar huecos) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">

          {/* COLUMNA IZQUIERDA (Span 5): Marca y Retención */}
          <div className="lg:col-span-5 space-y-10">
            <Link to="/" className="inline-block group">
              <img
                src="/esoftlogo.png"
                alt="Logo eSoft Pasion"
                className="h-14 w-auto object-contain dark:brightness-110 group-hover:scale-105 transition-transform duration-500"
              />
            </Link>

            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-light max-w-md">
              {t('footer.description', 'Diseñamos, protegemos y escalamos infraestructuras digitales para las empresas que están construyendo el futuro.')}
            </p>

            {/* Newsletter Mini-Form (Añade densidad visual e interactividad) */}
            <div className="max-w-md">
              <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-4">Mantente Actualizado</h4>
              <div className="flex items-center bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-2xl p-1 focus-within:border-esoft-accent transition-colors shadow-sm">
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full bg-transparent border-none px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none placeholder:text-gray-400"
                />
                <button className="w-12 h-10 bg-esoft-accent rounded-xl flex items-center justify-center text-white hover:bg-emerald-500 transition-colors shrink-0">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Redes Sociales Glassmorphism */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/esoftpasion", label: "Instagram" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/esoft-pasi%C3%B3n-por-la-tecnolog%C3%ADa-2006/", label: "LinkedIn" },
                { icon: <TikTokIcon size={18} />, href: "https://www.tiktok.com/@esoft.pasion", label: "TikTok" },
                { icon: <Youtube size={18} />, href: "https://www.youtube.com/@PasionPorLaTecnologia", label: "YouTube" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-md text-gray-600 dark:text-gray-400 hover:bg-esoft-accent hover:text-white dark:hover:bg-esoft-accent transition-all duration-300 border border-gray-200 dark:border-white/10 shadow-sm hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA (Span 7): Enlaces Estructurados */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">

            {/* Servicios */}
            <div>
              <h4 className="text-gray-900 dark:text-white font-heading font-bold uppercase tracking-[0.15em] mb-8 text-xs border-b border-gray-200 dark:border-white/10 pb-4 inline-block">
                {t('footer.col1', 'Soluciones')}
              </h4>
              <ul className="space-y-4">
                {[
                  { to: "/servicios#security", label: t('navbar.cybersecurity', 'Ciberseguridad') },
                  { to: "/servicios#consulting", label: t('navbar.consulting', 'Consultoría IT') },
                  { to: "/servicios#infra", label: t('navbar.packaged', 'Infraestructura') },
                  { to: "/soluciones", label: t('navbar.cases', 'Casos de Éxito') }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.to} className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-esoft-accent dark:hover:text-white transition-all duration-300 text-sm">
                      <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-esoft-accent mr-2" />
                      <span className="font-light">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compañía */}
            <div>
              <h4 className="text-gray-900 dark:text-white font-heading font-bold uppercase tracking-[0.15em] mb-8 text-xs border-b border-gray-200 dark:border-white/10 pb-4 inline-block">
                {t('footer.col2', 'Compañía')}
              </h4>
              <ul className="space-y-4">
                {[
                  { to: "/nosotros", label: t('navbar.about', 'Nuestra Identidad') },
                  { to: "/nosotros/historia", label: t('navbar.history', 'Evolución') },
                  { to: "/nosotros/equipo", label: t('navbar.team', 'El Equipo') },
                  { to: "/contacto", label: t('navbar.contact', 'Contacto') }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.to} className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-esoft-accent dark:hover:text-white transition-all duration-300 text-sm">
                      <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-esoft-accent mr-2" />
                      <span className="font-light">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto Directo */}
            <div>
              <h4 className="text-gray-900 dark:text-white font-heading font-bold uppercase tracking-[0.15em] mb-8 text-xs border-b border-gray-200 dark:border-white/10 pb-4 inline-block">
                {t('footer.col3', 'Soporte')}
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4 group">
                  <div className="mt-0.5 text-gray-400 group-hover:text-esoft-accent transition-colors">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:orlando.palacios@esoftpasion.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-esoft-accent transition-colors font-light">
                      orlando.palacios@esoftpasion.com
                    </a>
                    <a href="mailto:karla.garcia@esoftpasion.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-esoft-accent transition-colors font-light">
                      karla.garcia@esoftpasion.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 group items-center">
                  <div className="text-gray-400 group-hover:text-esoft-accent transition-colors">
                    <Phone size={18} />
                  </div>
                  <a href="tel:+525564604183" className="text-sm text-gray-600 dark:text-gray-400 hover:text-esoft-accent transition-colors font-mono pt-0.5">
                    +52 55 6460 4183
                  </a>
                </li>
                <li className="flex gap-4 group items-start">
                  <div className="mt-0.5 text-gray-400 group-hover:text-esoft-accent transition-colors">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    Montecito 38, Piso 33, Nápoles, CDMX
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* BARRA INFERIOR (Sub-footer Premium) */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">

          {/* Status Badge (Estilo Vercel/Apple) */}
          <div className="flex items-center gap-3 px-4 py-2 bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-full border border-gray-200 dark:border-white/10 shadow-sm cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-600 dark:text-gray-300">
              Sistemas Operativos
            </span>
          </div>

          {/* Copyright */}
          <div className="text-[11px] text-gray-500 dark:text-gray-500 font-medium tracking-wide text-center">
            &copy; {currentYear} eSoft Pasion. {t('footer.rights', 'Todos los derechos reservados.')}
          </div>

          {/* Legales */}
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest">
            <Link to="/privacidad" className="text-gray-500 dark:text-gray-500 hover:text-esoft-accent transition-colors">
              {t('footer.privacy', 'Privacidad')}
            </Link>
            <Link to="/cookies" className="text-gray-500 dark:text-gray-500 hover:text-esoft-accent transition-colors">
              {t('footer.cookies', 'Cookies')}
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}