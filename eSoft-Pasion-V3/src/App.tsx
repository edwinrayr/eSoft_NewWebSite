import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts Globales
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CookieBanner from './components/layout/CookieBanner';

// Funcionalidades
import SearchOverlay from './components/features/SearchOverlay';
import { SearchProvider } from './context/SearchContext';
import ScrollToTop from './components/utils/ScrollToTop';

// UI
import WhatsAppButton from './components/ui/WhatsAppButton'; 
import Preloader from './components/ui/Preloader';

// Páginas
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';
import SearchResults from './pages/SearchResults';
import Internships from './pages/Internships';
import Privacy from './pages/Privacy';

// Páginas independientes
import History from './pages/about/History';
import Team from './pages/about/Team';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SearchProvider>
      {/* CORRECCIÓN AQUÍ: 
          - Cambiado bg-gray-50 por bg-white para un fondo blanco puro en modo claro.
      */}
      <div className="min-h-screen bg-white dark:bg-esoft-dark text-gray-900 dark:text-white font-sans overflow-x-hidden selection:bg-esoft-accent selection:text-white flex flex-col relative transition-colors duration-300">
        
        {/* CAPA DE ANIMACIÓN GLOBAL (Solo para modo Claro) */}
        <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 opacity-100 dark:opacity-0
             bg-gradient-to-br from-emerald-100/30 via-white to-teal-100/30 
             bg-[length:200%_200%] animate-gradient-x" 
        />

        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        {!isLoading && (
          <div className="relative z-10 flex flex-col flex-grow">
            <Navbar />
            <ScrollToTop /> 
            <SearchOverlay />

            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<About />} />
                <Route path="/nosotros/historia" element={<History />} />
                <Route path="/nosotros/equipo" element={<Team />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/soluciones" element={<Solutions />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/busqueda" element={<SearchResults />} />
                <Route path="/practicas" element={<Internships />} />
                <Route path="/privacidad" element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer /> 
            <WhatsAppButton />
            <CookieBanner />
          </div>
        )}
      </div>
    </SearchProvider>
  )
}

export default App;