import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Hook de traducción

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estado para controlar qué menú desplegable está abierto
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Hooks
  const { t, i18n } = useTranslation(); // t = traducir, i18n = cambiar idioma
  const { openSearch } = useSearch();
  const location = useLocation();

  // Función para cambiar entre Español e Inglés
  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  // Detectar scroll para efecto "Glass"
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ESTRUCTURA DE NAVEGACIÓN (Usando traducciones)
  const navLinks = [
    { 
      name: t('navbar.about'), 
      path: '/nosotros',
      subItems: [
        { name: t('navbar.history') || 'Nuestra Historia', path: '/nosotros#historia' },
        { name: t('navbar.team') || 'Equipo', path: '/nosotros#equipo' },
        { name: 'Valores', path: '/nosotros#valores' },
        { name: 'Carreras', path: '/nosotros#carreras' }
      ]
    },
    { 
      name: t('navbar.services'), 
      path: '/servicios',
      subItems: [
        { name: t('navbar.web') || 'Desarrollo Web', path: '/servicios#web' },
        { name: t('navbar.mobile') || 'Apps Móviles', path: '/servicios#mobile' },
        { name: 'Cloud & DevOps', path: '/servicios#cloud' },
        { name: 'Diseño UX/UI', path: '/servicios#design' }
      ]
    },
    { 
      name: t('navbar.solutions'), 
      path: '/soluciones',
      subItems: [
        { name: 'E-Commerce', path: '/soluciones#ecommerce' },
        { name: 'Fintech', path: '/soluciones#fintech' },
        { name: 'Salud', path: '/soluciones#health' },
        { name: 'Casos de Éxito', path: '/soluciones#casos' }
      ]
    },
    { 
      name: t('navbar.contact'), 
      path: '/contacto',
      subItems: [
        { name: 'Soporte Técnico', path: '/contacto#soporte' },
        { name: 'Ventas', path: '/contacto#ventas' },
        { name: 'Ubicación', path: '/contacto#mapa' }
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
        onMouseLeave={() => setHoveredIndex(null)} // Cierra menú al salir del navbar
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
          
          {/* 1. LOGO */}
          <Link to="/" className="flex items-center gap-3 z-10 group relative">
            <img 
              src="/esoftlogo.png" // Asegúrate que tu archivo se llame así en la carpeta public
              alt="Logo eSoft" 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
            />
          </Link>

          {/* 2. MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link, index) => {
              const isActive = location.pathname.startsWith(link.path);
              const isHovered = hoveredIndex === index;

              return (
                <div 
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  {/* Enlace Principal */}
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors py-4 ${
                      isActive || isHovered ? 'text-white' : 'text-esoft-gray-light hover:text-white'
                    }`}
                  >
                    {link.name}
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${isHovered ? 'rotate-180 text-esoft-accent' : ''}`} 
                    />
                  </Link>

                  {/* Dropdown (Submenú) */}
                  <AnimatePresence>
                    {isHovered && link.subItems && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                      >
                        <div className="bg-esoft-charcoal/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden">
                          {link.subItems.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              to={sub.path}
                              className="block px-4 py-3 rounded-xl hover:bg-white/5 text-sm text-esoft-gray-light hover:text-white transition-colors group/item flex items-center justify-between"
                            >
                              {sub.name}
                              <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-esoft-accent" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* 3. ACCIONES (Buscador, Idioma, Menú Móvil) */}
          <div className="flex items-center gap-3 z-10">
            <button 
              onClick={openSearch} 
              className="p-2 text-esoft-gray-light hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <Search size={18} />
            </button>

            {/* Botón de Idioma */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-medium text-esoft-gray-light hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-full hover:border-esoft-accent/50 hover:bg-white/5 backdrop-blur-sm group"
            >
              <Globe size={14} className="group-hover:text-esoft-accent transition-colors" />
              <span className="hidden sm:inline uppercase">{i18n.language}</span>
            </button>

            {/* Botón Hamburguesa Móvil */}
            <button 
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 4. MENÚ MÓVIL (Con Sub-secciones) */}
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
            
            {/* Lista de sub-items en móvil */}
            <div className="pl-4 space-y-3 border-l-2 border-white/10 ml-1 mt-2">
              {link.subItems?.map((sub, subIndex) => (
                <Link
                  key={subIndex}
                  to={sub.path}
                  className="block text-sm text-esoft-gray-light hover:text-esoft-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}