import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-esoft-dark border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      
      {/* Luz de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-esoft-accent/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca y Misión */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/esoftlogo.png" 
                alt="Logo eSoft Pasion" 
                className="h-12 w-auto object-contain opacity-90" 
              />
            </div>
            
            <p className="text-esoft-gray-light text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-esoft-gray-light hover:text-esoft-accent transition-colors p-2 hover:bg-white/5 rounded-full">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Servicios (ACTUALIZADO con datos de servicios.html) */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6 text-sm border-b border-esoft-accent/30 pb-2 w-fit">
              {t('footer.col1')}
            </h4>
            <ul className="space-y-3">
              {['renewal', 'support', 'presales', 'consulting'].map((key) => (
                <li key={key}>
                  <a href="/servicios" className="text-esoft-gray-light hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">
                    {t(`footer.links.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Compañía */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6 text-sm border-b border-esoft-accent/30 pb-2 w-fit">
              {t('footer.col2')}
            </h4>
            <ul className="space-y-3">
              {['about', 'portfolio', 'careers', 'blog', 'terms'].map((key) => (
                <li key={key}>
                  <a href="#" className="text-esoft-gray-light hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">
                    {t(`footer.links.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6 text-sm border-b border-esoft-accent/30 pb-2 w-fit">
              {t('footer.col3')}
            </h4>
            <ul className="space-y-4 text-sm text-esoft-gray-light">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-esoft-accent shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span>Montecito 38, Piso 33, Nápoles, CDMX</span>
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
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}