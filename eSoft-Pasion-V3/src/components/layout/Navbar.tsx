import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { t, i18n } = useTranslation();
  const { openSearch } = useSearch();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: t('navbar.about'), 
      path: '/nosotros',
      subItems: [
        { name: t('navbar.history'), path: '/nosotros#historia' },
        { name: t('navbar.ceo'), path: 'https://soyjesusrivas.com/', isExternal: true },
        { name: t('navbar.team'), path: '/nosotros#nuestro-equipo' },
        { name: t('navbar.values'), path: '/nosotros#valores' },
      ]
    },
    { 
      name: t('navbar.services'), 
      path: '/servicios',
      // ACTUALIZADO: Ahora usa los 3 pilares definidos en tu BentoGrid
      subItems: [
        { name: t('services.cards.security.title'), path: '/servicios' },
        { name: t('services.cards.consulting.title'), path: '/servicios' },
        { name: t('services.cards.packaged.title'), path: '/servicios' }
      ]
    },
    { 
      name: t('navbar.solutions'), 
      path: '/soluciones',
      subItems: [
        { name: t('navbar.devsecops'), path: '/soluciones#devsecops' },
        { name: t('navbar.automic'), path: '/soluciones#automic' },
        { name: t('navbar.mainframe'), path: '/soluciones#mainframe' },
        { name: t('navbar.cybersecurity'), path: '/soluciones#cybersecurity' },
        { name: t('navbar.infrastructure'), path: '/soluciones#infraestructura' },
        { name: t('navbar.business_mgmt'), path: '/soluciones#business' }
      ]
    },
    { 
      name: t('navbar.contact'), 
      path: '/contacto',
      subItems: [
        { name: t('navbar.support'), path: '/contacto#soporte' },
        { name: t('navbar.sales'), path: '/contacto#ventas' },
        { name: t('navbar.location'), path: '/contacto#mapa' }
      ] 
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-esoft-dark/80 backdrop-blur-lg border-white/10 py-4 shadow-lg'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 z-10 group relative">
            <img 
              src="/esoftlogo.png" 
              alt="Logo eSoft" 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
            />
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link, index) => {
              const isActive = location.pathname.startsWith(link.path);
              const isMenuOpen = hoveredIndex === index;

              return (
                <div 
                  key={index}
                  className="relative flex items-center h-full" 
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors py-2 relative group/text ${
                      isActive || isMenuOpen ? 'text-white' : 'text-esoft-gray-light hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-esoft-accent transform transition-transform duration-300 origin-center ${
                        isActive || isMenuOpen ? 'scale-x-100' : 'scale-x-0 group-hover/text:scale-x-100'
                      }`}
                    ></span>
                  </Link>

                  <div 
                    className="h-full flex items-center justify-center cursor-pointer px-2 ml-1" 
                    onMouseEnter={() => setHoveredIndex(index)}
                  >
                    <div className={`p-1 rounded-full transition-colors ${isMenuOpen ? 'bg-white/10' : 'hover:bg-white/5'}`}>
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 ${
                          isMenuOpen ? 'rotate-180 text-esoft-accent' : 'text-esoft-gray-light'
                        }`} 
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isMenuOpen && link.subItems && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-64 z-50" 
                      >
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-esoft-charcoal rotate-45 border-l border-t border-white/10"></div>
                        <div className="bg-esoft-charcoal/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden relative z-10">
                          {link.subItems.map((sub, subIndex) => {
                            if (sub.isExternal) {
                              return (
                                <a
                                  key={subIndex}
                                  href={sub.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-4 py-3 rounded-xl hover:bg-white/5 text-sm text-esoft-gray-light hover:text-white transition-colors group/item flex items-center justify-between"
                                >
                                  {sub.name}
                                  <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-esoft-accent" />
                                </a>
                              );
                            }
                            return (
                              <Link
                                key={subIndex}
                                to={sub.path}
                                className="block px-4 py-3 rounded-xl hover:bg-white/5 text-sm text-esoft-gray-light hover:text-white transition-colors group/item flex items-center justify-between"
                              >
                                {sub.name}
                                <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-esoft-accent" />
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* ACCIONES */}
          <div className="flex items-center gap-3 z-10">
            <button onClick={openSearch} className="p-2 text-esoft-gray-light hover:text-white hover:bg-white/10 rounded-full transition-all">
              <Search size={18} />
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-medium text-esoft-gray-light hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-full hover:border-esoft-accent/50 hover:bg-white/5 backdrop-blur-sm group"
            >
              <Globe size={14} className="group-hover:text-esoft-accent transition-colors" />
              <span className="hidden sm:inline uppercase">{i18n.language}</span>
            </button>
            <button className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <div className={`fixed inset-0 z-40 bg-esoft-dark/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col pt-32 px-6 overflow-y-auto ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {navLinks.map((link, index) => (
          <div key={index} className="border-b border-white/10 pb-4 mb-4">
            <Link
              to={link.path}
              className="flex items-center justify-between text-2xl font-heading text-white mb-2 active:text-esoft-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
            <div className="pl-4 space-y-3 border-l-2 border-white/10 ml-1 mt-2">
              {link.subItems?.map((sub, subIndex) => {
                if (sub.isExternal) {
                  return (
                    <a
                      key={subIndex}
                      href={sub.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-esoft-gray-light hover:text-esoft-accent transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {sub.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={subIndex}
                    to={sub.path}
                    className="block text-sm text-esoft-gray-light hover:text-esoft-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sub.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}