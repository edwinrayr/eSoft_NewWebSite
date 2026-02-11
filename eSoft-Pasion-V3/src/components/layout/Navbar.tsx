import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const navLinks = [
    {
      id: 'about',
      title: t('navbar.about', 'Nosotros'),
      path: '/nosotros',
      submenu: [
        // MODIFICADO: Cambiamos el '#' por '/' para abrir las nuevas páginas
        { title: t('navbar.history', 'Historia'), path: '/nosotros/historia' },
        { title: t('navbar.ceo', 'Nuestro CEO'), path: 'https://soyjesusrivas.com/', isExternal: true },
        { title: t('navbar.team', 'Equipo'), path: '/nosotros/equipo' },
        { title: t('navbar.values', 'Valores'), path: '/nosotros#valores' },
      ]
    },
    {
      id: 'services',
      title: t('navbar.services', 'Servicios'),
      path: '/servicios',
      submenu: [
        { title: t('navbar.cybersecurity', 'Ciberseguridad'), path: '/servicios#security' },
        { title: t('navbar.consulting', 'Consultoría'), path: '/servicios#consulting' },
        { title: t('navbar.infrastructure', 'Infraestructura'), path: '/servicios#infra' },
      ]
    },
    {
      id: 'solutions',
      title: t('navbar.solutions', 'Soluciones'),
      path: '/soluciones',
      submenu: [
        { title: t('navbar.cases', 'Casos de Éxito'), path: '/soluciones#casos' },
        { title: t('navbar.sectors', 'Sectores'), path: '/soluciones#sectores' },
        { title: t('navbar.benefits', 'Beneficios'), path: '/soluciones#beneficios' }
      ]
    },
    {
      id: 'contact',
      title: t('navbar.contact', 'Contáctanos'),
      path: '/contacto',
      submenu: [] 
    }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-esoft-dark/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        
        {/* 1. IZQUIERDA: LOGO */}
        <div className="flex-shrink-0 z-20">
            <Link to="/" className="flex items-center gap-2 group">
                <img src="/esoftlogo.png" alt="eSoft Logo" className="h-10 w-auto group-hover:opacity-80 transition-opacity" />
            </Link>
        </div>

        {/* 2. CENTRO: MENÚ DE ESCRITORIO */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((item) => (
            <div 
              key={item.id}
              className="relative group h-full flex items-center justify-center"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* ENLACE PRINCIPAL */}
              <Link 
                to={item.path}
                className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors py-4 ${
                    hoveredItem === item.id ? 'text-esoft-accent' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.title}
                {item.submenu.length > 0 && (
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${hoveredItem === item.id ? 'rotate-180' : ''}`} 
                  />
                )}
              </Link>

              {/* DROPDOWN MENU FLOTANTE */}
              <AnimatePresence>
                {item.submenu.length > 0 && hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 z-50" 
                  >
                    <div className="bg-esoft-charcoal border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-1 w-4 h-4 bg-esoft-charcoal border-t border-l border-white/10 transform rotate-45"></div>
                        <div className="relative z-10 py-2">
                           {item.submenu.map((subItem, index) => {
                             if (subItem.isExternal) {
                               return (
                                 <a 
                                    key={index}
                                    href={subItem.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-esoft-accent"
                                 >
                                    {subItem.title}
                                 </a>
                               );
                             }
                             return (
                              <Link 
                                  key={index}
                                  to={subItem.path}
                                  className="block px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-esoft-accent"
                              >
                                  {subItem.title}
                              </Link>
                             );
                           })}
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* 3. DERECHA: IDIOMA Y HAMBURGUESA MÓVIL */}
        <div className="flex items-center gap-4 z-20">
            <button 
                onClick={toggleLanguage}
                className="hidden lg:flex items-center gap-2 text-gray-300 hover:text-white border border-white/20 px-3 py-1.5 rounded-full text-xs uppercase font-bold transition-all hover:border-esoft-accent hover:bg-white/5"
            >
                <Globe size={14} /> 
                <span>{i18n.language.toUpperCase()}</span>
            </button>

            <button 
                className="lg:hidden text-white hover:text-esoft-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>

      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-esoft-dark border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((item) => (
                <div key={item.id}>
                    <Link 
                        to={item.path} 
                        className="block text-lg font-bold text-white mb-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.title}
                    </Link>
                    {item.submenu.length > 0 && (
                        <div className="pl-4 border-l-2 border-white/10 space-y-3 ml-2">
                            {item.submenu.map((sub, i) => {
                                if (sub.isExternal) {
                                  return (
                                    <a 
                                        key={i} 
                                        href={sub.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-sm text-gray-400 hover:text-esoft-accent"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {sub.title}
                                    </a>
                                  );
                                }
                                return (
                                  <Link 
                                      key={i} 
                                      to={sub.path}
                                      className="block text-sm text-gray-400 hover:text-esoft-accent"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                      {sub.title}
                                  </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <button onClick={toggleLanguage} className="text-sm font-bold text-gray-400 uppercase">
                    Change Language ({i18n.language.toUpperCase()})
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}