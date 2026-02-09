import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-esoft-dark border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      
      {/* Luz de fondo sutil en el footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-esoft-accent/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca y Misión (CON LOGO) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* Imagen del Logo - Asegúrate de tener 'logo.png' en la carpeta public */}
              <img 
                src="/esoftlogo.png" 
                alt="Logo eSoft Pasion" 
                className="h-12 w-auto object-contain opacity-90" 
              />
            </div>
            
            <p className="text-esoft-gray-light text-sm leading-relaxed">
              Transformamos ideas complejas en experiencias digitales fluidas. 
              Tu socio tecnológico para el futuro de la web.
            </p>
            
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-esoft-gray-light hover:text-esoft-accent transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6">Servicios</h4>
            <ul className="space-y-4">
              {['Desarrollo Web', 'Apps Móviles', 'Diseño UX/UI', 'Consultoría Cloud', 'E-commerce'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-esoft-gray-light hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Compañía */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6">Compañía</h4>
            <ul className="space-y-4">
              {['Sobre Nosotros', 'Portafolio', 'Carreras', 'Blog', 'Términos Legales'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-esoft-gray-light hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto Rápido */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-esoft-gray-light">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-esoft-accent shrink-0" />
                <span>Estado de México, México.</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-esoft-accent shrink-0" />
                <a href="mailto:hola@esoftpasion.com" className="hover:text-white transition-colors">
                  hola@esoftpasion.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-esoft-accent shrink-0" />
                <a href="tel:+525512345678" className="hover:text-white transition-colors">
                  +52 55 1234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior: Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-esoft-gray-light">
            &copy; {currentYear} eSoft Pasion. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-esoft-gray-light">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}