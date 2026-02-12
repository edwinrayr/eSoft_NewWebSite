import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Search, ExternalLink, CornerDownLeft, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../ui/ThemeToggle'; 

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // BASE DE DATOS DEL BUSCADOR (Recuperada completa)
  const searchItems = useMemo(() => [
    { title: t('navbar.cybersecurity', 'Ciberseguridad'), category: t('navbar.services', 'Servicios'), url: "/servicios#security", keywords: ["security", "seguridad"] },
    { title: t('navbar.consulting', 'Consultoría'), category: t('navbar.services', 'Servicios'), url: "/servicios#consulting", keywords: ["cloud", "nube"] },
    { title: t('navbar.packaged', 'Soluciones Empaquetadas'), category: t('navbar.services', 'Servicios'), url: "/servicios#infra", keywords: ["infraestructura"] },
    { title: t('navbar.fintech', 'FinTech'), category: t('navbar.solutions', 'Soluciones'), url: "/soluciones#fintech", keywords: ["banca"] },
    { title: t('navbar.ecommerce', 'E-Commerce'), category: t('navbar.solutions', 'Soluciones'), url: "/soluciones#ecommerce", keywords: ["tienda"] },
    { title: t('navbar.healthtech', 'HealthTech'), category: t('navbar.solutions', 'Soluciones'), url: "/soluciones#healthtech", keywords: ["salud"] },
    { title: t('navbar.sectors', 'Sectores'), category: t('navbar.solutions', 'Soluciones'), url: "/soluciones#sectores", keywords: ["industrias"] },
    { title: t('navbar.benefits', 'Beneficios'), category: t('navbar.solutions', 'Soluciones'), url: "/soluciones#beneficios", keywords: ["ventajas"] },
    { title: t('navbar.internships', 'Prácticas'), category: t('navbar.careers', 'Carreras'), url: "/practicas", popular: true, keywords: ["becarios"] },
    { title: t('navbar.history', 'Historia'), category: t('navbar.about', 'Nosotros'), url: "/nosotros#historia", keywords: ["trayectoria"] },
    { title: t('navbar.team', 'Equipo'), category: t('navbar.about', 'Nosotros'), url: "/nosotros#equipo", keywords: ["staff"] },
    { title: t('navbar.ceo', 'Nuestro CEO'), category: t('navbar.about', 'Nosotros'), url: "https://soyjesusrivas.com/", isExternal: true, keywords: ["jesús rivas"] },
    { title: t('navbar.values', 'Valores'), category: t('navbar.about', 'Nosotros'), url: "/nosotros#valores", keywords: ["misión"] },
    { title: t('navbar.contact', 'Contáctanos'), category: "General", url: "/contacto", keywords: ["email"] }
  ], [t]); 

  const [filteredResults, setFilteredResults] = useState<typeof searchItems>([]);

  useEffect(() => {
    if (isSearchOpen) {
        setFilteredResults(searchItems.slice(0, 6)); 
        setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen, searchItems]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [location]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(e.target.value);
    if (query.length === 0) {
        setFilteredResults(searchItems.slice(0, 6));
    } else {
        const filtered = searchItems.filter(item => {
            const inTitle = item.title.toLowerCase().includes(query);
            const inCategory = item.category.toLowerCase().includes(query);
            const inKeywords = item.keywords.some(k => k.toLowerCase().includes(query));
            return inTitle || inCategory || inKeywords;
        });
        setFilteredResults(filtered.slice(0, 8)); 
    }
  };

  const handleSuggestionClick = (item: any) => {
      if (item.isExternal) {
          window.open(item.url, '_blank', 'noopener,noreferrer');
      } else {
          navigate(item.url);
      }
      setIsSearchOpen(false);
      setSearchQuery('');
  };

  const handleEnterKey = (e: React.FormEvent) => {
      e.preventDefault();
      if (filteredResults.length > 0) {
          handleSuggestionClick(filteredResults[0]);
      } else if (searchQuery.trim()) {
          navigate(`/busqueda?q=${encodeURIComponent(searchQuery)}`);
          setIsSearchOpen(false);
      }
  };

  const navLinks = [
    {
      id: 'about',
      title: t('navbar.about', 'Nosotros'),
      path: '/nosotros',
      submenu: [
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
        { title: t('navbar.packaged', 'Soluciones Empaquetadas'), path: '/servicios#infra' },
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
    { id: 'internships', title: t('navbar.internships', 'Prácticas'), path: '/practicas', submenu: [] },
    { id: 'contact', title: t('navbar.contact', 'Contáctanos'), path: '/contacto', submenu: [] }
  ];

  const isHome = location.pathname === '/';
  
  // --- LÓGICA DE TRANSPARENCIA REFINADA ---
  const navBackgroundClass = isScrolled
    ? 'bg-esoft-dark/30 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl' // SCROLL: Muy transparente, mucho blur
    : isHome
      ? 'bg-transparent py-6' // TOP HOME: Invisible para que luzca el Hero
      : 'bg-esoft-dark py-5 border-b border-white/10'; // TOP INTERNAS: Sólido para legibilidad

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative h-10">
        
        {/* LOGO */}
        <div className="flex-shrink-0 z-20">
            <Link to="/" className="flex items-center gap-2 group">
                <img 
                  src="/esoftlogo.png" 
                  alt="eSoft Logo" 
                  className="h-10 w-auto group-hover:scale-105 transition-transform" 
                />
            </Link>
        </div>

        {/* MENÚ DE ESCRITORIO */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((item) => (
            <div 
              key={item.id}
              className="relative group h-full flex items-center justify-center"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link 
                to={item.path}
                className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors py-4 ${
                    hoveredItem === item.id 
                    ? 'text-esoft-accent' 
                    : 'text-gray-300 hover:text-white'
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

              <AnimatePresence>
                {item.submenu.length > 0 && hoveredItem === item.id && !isSearchOpen && ( 
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 z-50" 
                  >
                    <div className="bg-white dark:bg-esoft-charcoal border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-1 w-4 h-4 bg-white dark:bg-esoft-charcoal border-t border-l border-gray-200 dark:border-white/10 transform rotate-45"></div>
                        <div className="relative z-10 py-2">
                           {item.submenu.map((subItem, index) => {
                             const linkClasses = "block px-6 py-3 text-sm text-gray-600 dark:text-gray-400 hover:text-esoft-accent dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-esoft-accent";
                             return subItem.isExternal ? (
                               <a key={index} href={subItem.path} target="_blank" rel="noopener noreferrer" className={linkClasses}>{subItem.title}</a>
                             ) : (
                               <Link key={index} to={subItem.path} className={linkClasses}>{subItem.title}</Link>
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

        {/* DERECHA */}
        <div className="flex items-center gap-4 z-20 relative" ref={searchContainerRef}>
            <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`transition-colors p-2 hover:bg-white/10 rounded-full ${isSearchOpen ? 'text-esoft-accent' : 'text-gray-300 hover:text-white'}`}
            >
                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>

            <div className="hidden lg:block">
                <ThemeToggle />
            </div>

            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-4 w-[320px] md:w-[400px] bg-white dark:bg-esoft-charcoal border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md z-50 ring-1 ring-black/5 dark:ring-white/10"
                    >
                        <div className="p-3 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                            <form onSubmit={handleEnterKey} className="relative flex items-center">
                                <Search className="absolute left-3 text-gray-400" size={16} />
                                <input 
                                    ref={searchInputRef}
                                    type="text" 
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    placeholder={t('navbar.searchPlaceholder', 'Buscar...')}
                                    className="w-full bg-white dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-lg py-2 pl-9 pr-3 text-gray-900 dark:text-white text-sm focus:border-esoft-accent focus:ring-1 focus:ring-esoft-accent outline-none placeholder-gray-500"
                                    autoComplete="off"
                                />
                            </form>
                        </div>
                        <div className="max-h-[350px] overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-esoft-accent/40 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-esoft-accent">
                            <div className="px-4 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2 bg-gray-50 dark:bg-black/10 sticky top-0 z-10 backdrop-blur-sm">
                                <Sparkles size={10} />
                                {searchQuery ? t('navbar.results', 'Resultados') : t('navbar.suggestions', 'Sugerencias Rápidas')}
                            </div>
                            {filteredResults.length > 0 ? (
                                <ul>
                                    {filteredResults.map((item, index) => (
                                        <li key={index} className="border-b border-gray-100 dark:border-white/5 last:border-none">
                                            <button onClick={() => handleSuggestionClick(item)} className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-all group flex items-center justify-between">
                                                <div>
                                                    <span className="text-gray-800 dark:text-white text-sm font-medium block group-hover:text-esoft-accent transition-colors">{item.title}</span>
                                                    <span className="text-[11px] text-gray-500 uppercase tracking-wider mt-0.5">{item.category}</span>
                                                </div>
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                                    {item.isExternal ? <ExternalLink size={14} className="text-gray-400" /> : <CornerDownLeft size={14} className="text-gray-400" />}
                                                </div>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="p-6 text-center text-gray-500 text-sm">{t('navbar.noResults')} "{searchQuery}"</div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button onClick={toggleLanguage} className="hidden lg:flex items-center gap-2 text-gray-300 hover:text-white border border-white/20 px-3 py-1.5 rounded-full text-xs uppercase font-bold transition-all hover:border-esoft-accent hover:bg-white/5">
                <Globe size={14} /> 
                <span>{i18n.language.toUpperCase()}</span>
            </button>

            <button className="lg:hidden text-white hover:text-esoft-accent transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-esoft-dark border-t border-gray-200 dark:border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((item) => (
                <div key={item.id}>
                    <Link to={item.path} className="block text-lg font-bold text-gray-900 dark:text-white mb-2" onClick={() => setIsMobileMenuOpen(false)}>
                        {item.title}
                    </Link>
                    {item.submenu.length > 0 && (
                        <div className="pl-4 border-l-2 border-gray-200 dark:border-white/10 space-y-3 ml-2">
                            {item.submenu.map((sub, i) => (
                                <div key={i}> 
                                {sub.isExternal ? (
                                    <a href={sub.path} target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-esoft-accent" onClick={() => setIsMobileMenuOpen(false)}>{sub.title}</a>
                                ) : (
                                    <Link to={sub.path} className="block text-sm text-gray-600 dark:text-gray-400 hover:text-esoft-accent" onClick={() => setIsMobileMenuOpen(false)}>{sub.title}</Link>
                                )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex justify-between items-center">
                <button onClick={toggleLanguage} className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase">Change Language ({i18n.language.toUpperCase()})</button>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}