import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Icono de TikTok personalizado (SVG inline)
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
    /* CAMBIO: 
       - bg-esoft-dark/80: Da transparencia en modo claro.
       - dark:bg-esoft-dark: Vuelve al color sólido en modo oscuro.
       - backdrop-blur-md: Hace que el fondo se vea como cristal esmerilado.
    */
    <footer className="bg-esoft-dark/80 dark:bg-esoft-dark border-t border-white/10 pt-20 pb-10 relative overflow-hidden z-10 backdrop-blur-md transition-colors duration-500">
      
      {/* Luz de fondo sutil (Efecto Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-esoft-accent/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca y Misión */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Link to="/">
                <img 
                  src="/esoftlogo.png" 
                  alt="Logo eSoft Pasion" 
                  className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
                />
              </Link>
            </div>
            
            <p className="text-esoft-gray-light text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/esoftpasion?igsh=ZzlsOG1sNjJrejVt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-esoft-gray-light hover:text-esoft-accent transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a 
                href="https://www.linkedin.com/company/esoft-pasi%C3%B3n-por-la-tecnolog%C3%ADa-2006/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-esoft-gray-light hover:text-esoft-accent transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a 
                href="https://www.tiktok.com/@esoft.pasion" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-esoft-gray-light hover:text-esoft-accent transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label="TikTok"
              >
                <TikTokIcon size={20} />
              </a>

              <a 
                href="https://www.youtube.com/@PasionPorLaTecnologia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-esoft-gray-light hover:text-esoft-accent transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios & Soluciones */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6 text-sm border-b border-esoft-accent/30 pb-2 w-fit">
              {t('footer.col1')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicios#security" className="group flex items-center text-esoft-gray-light hover:text-esoft-accent transition-colors text-sm">
                  <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-out text-esoft-accent">
                    <ChevronRight size={16} />
                  </span>
                  <span>{t('navbar.cybersecurity', 'Ciberseguridad')}</span>
                </Link>
              </li>
              <li>
                <Link to="/servicios#consulting" className="group flex items-center text-esoft-gray-light hover:text-esoft-accent transition-colors text-sm">
                  <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-out text-esoft-accent">
                    <ChevronRight size={16} />
                  </span>
                  <span>{t('navbar.consulting', 'Consultoría')}</span>
                </Link>
              </li>
              <li>
                <Link to="/servicios#infra" className="group flex items-center text-esoft-gray-light hover:text-esoft-accent transition-colors text-sm">
                  <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-out text-esoft-accent">
                    <ChevronRight size={16} />
                  </span>
                  <span>{t('navbar.packaged', 'Soluciones Empaquetadas')}</span>
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="group flex items-center text-esoft-gray-light hover:text-esoft-accent transition-colors text-sm">
                  <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-out text-esoft-accent">
                    <ChevronRight size={16} />
                  </span>
                  <span>{t('navbar.cases', 'Casos de Éxito')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Compañía */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6 text-sm border-b border-esoft-accent/30 pb-2 w-fit">
              {t('footer.col2')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/nosotros" className="group flex items-center text-esoft-gray-light hover:text-esoft-accent transition-colors text-sm">
                  <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-out text-esoft-accent">
                    <ChevronRight size={16} />
                  </span>
                  <span>{t('navbar.about', 'Acerca de Nosotros')}</span>
                </Link>
              </li>
              <li>
                <Link to="/nosotros/historia" className="group flex items-center text-esoft-gray-light hover:text-esoft-accent transition-colors text-sm">
                  <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-out text-esoft-accent">
                    <ChevronRight size={16} />
                  </span>
                  <span>{t('navbar.history', 'Nuestra Historia')}</span>
                </Link>
              </li>
              <li>
                <Link to="/nosotros/equipo" className="group flex items-center text-esoft-gray-light hover:text-esoft-accent transition-colors text-sm">
                  <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-out text-esoft-accent">
                    <ChevronRight size={16} />
                  </span>
                  <span>{t('navbar.team', 'Nuestro Equipo')}</span>
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="group flex items-center text-esoft-gray-light hover:text-esoft-accent transition-colors text-sm">
                  <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-out text-esoft-accent">
                    <ChevronRight size={16} />
                  </span>
                  <span>{t('navbar.contact', 'Contáctanos')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6 text-sm border-b border-esoft-accent/30 pb-2 w-fit">
              {t('footer.col3')}
            </h4>
            <ul className="space-y-4 text-sm text-esoft-gray-light">
              <li className="flex items-start gap-3 group cursor-default">
                <MapPin size={18} className="text-esoft-accent shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">Montecito 38, Piso 33, Nápoles, CDMX</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-esoft-accent shrink-0 group-hover:text-white transition-colors" />
                <a href="mailto:orlando.palacios@esoftpasion.com" className="hover:text-white transition-colors break-all">
                  orlando.palacios@esoftpasion.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-esoft-accent shrink-0 group-hover:text-white transition-colors" />
                <a href="mailto:karla.garcia@esoftpasion.com" className="hover:text-white transition-colors break-all">
                  karla.garcia@esoftpasion.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-esoft-accent shrink-0 group-hover:text-white transition-colors" />
                <a href="tel:+525564604183" className="hover:text-white transition-colors">
                  +52 55 6460 4183
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-esoft-gray-light">
            &copy; {currentYear} eSoft Pasion. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-xs text-esoft-gray-light">
            <Link to="/privacidad" className="hover:text-esoft-accent transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}