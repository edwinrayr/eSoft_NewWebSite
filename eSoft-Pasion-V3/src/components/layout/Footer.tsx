import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube, ChevronRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Icono de TikTok personalizado estilizado
const TikTokIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white/30 dark:bg-[#050d0a]/60 border-t border-gray-200 dark:border-white/5 pt-24 pb-12 overflow-hidden backdrop-blur-2xl transition-colors duration-500">

      {/* Luces de ambiente sincronizadas con el Home */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-esoft-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Columna 1: Marca y Presencia Digital */}
          <div className="space-y-8">
            <Link to="/" className="inline-block transform hover:scale-105 transition-transform duration-300">
              <img
                src="/esoftlogo.png"
                alt="Logo eSoft Pasion"
                className="h-14 w-auto object-contain dark:brightness-110"
              />
            </Link>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">
              {t('footer.description')}
            </p>

            {/* Redes Sociales Estilo Apple (Glass Buttons) */}
            <div className="flex gap-3">
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
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-esoft-accent hover:text-white dark:hover:bg-esoft-accent transition-all duration-300 border border-transparent hover:border-esoft-accent/20 shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Servicios con Hover Inteligente */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-heading font-bold uppercase tracking-[0.15em] mb-8 text-xs">
              {t('footer.col1')}
            </h4>
            <ul className="space-y-4">
              {[
                { to: "/servicios#security", label: t('navbar.cybersecurity') },
                { to: "/servicios#consulting", label: t('navbar.consulting') },
                { to: "/servicios#infra", label: t('navbar.packaged') },
                { to: "/soluciones", label: t('navbar.cases') }
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

          {/* Columna 3: Compañía */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-heading font-bold uppercase tracking-[0.15em] mb-8 text-xs">
              {t('footer.col2')}
            </h4>
            <ul className="space-y-4">
              {[
                { to: "/nosotros", label: t('navbar.about') },
                { to: "/nosotros/historia", label: t('navbar.history') },
                { to: "/nosotros/equipo", label: t('navbar.team') },
                { to: "/contacto", label: t('navbar.contact') }
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

          {/* Columna 4: Contacto Estilizado */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-heading font-bold uppercase tracking-[0.15em] mb-8 text-xs">
              {t('footer.col3')}
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-esoft-accent/10 flex items-center justify-center text-esoft-accent shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  Montecito 38, Piso 33, Nápoles, CDMX
                </span>
              </li>
              <li className="flex gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-esoft-accent/10 flex items-center justify-center text-esoft-accent shrink-0 group-hover:bg-esoft-accent group-hover:text-white transition-colors">
                  <Mail size={16} />
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
              <li className="flex gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-esoft-accent/10 flex items-center justify-center text-esoft-accent shrink-0 group-hover:bg-esoft-accent group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <a href="tel:+525564604183" className="text-sm text-gray-600 dark:text-gray-400 hover:text-esoft-accent transition-colors font-light pt-1">
                  +52 55 6460 4183
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior Premium */}
        <div className="pt-10 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-500 font-medium tracking-wide">
            <span>&copy; {currentYear} eSoft Pasion.</span>
            <span className="hidden md:block">|</span>
            <span>{t('footer.rights')}</span>
          </div>

          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest">
            <Link to="/privacidad" className="text-gray-500 dark:text-gray-500 hover:text-esoft-accent transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/cookies" className="text-gray-500 dark:text-gray-500 hover:text-esoft-accent transition-colors">
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}