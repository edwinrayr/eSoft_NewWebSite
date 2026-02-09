import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // <--- IMPORTANTE

// Layouts Globales
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Funcionalidades
import SearchOverlay from './components/features/SearchOverlay';
import { SearchProvider } from './context/SearchContext';
import ScrollToTop from './components/utils/ScrollToTop';

// UI
import WhatsAppButton from './components/ui/WhatsAppButton'; 
import Preloader from './components/ui/Preloader'; // <--- IMPORTA EL PRELOADER

// Páginas
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  // Estado para controlar la carga
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga de 3 segundos (ajusta este tiempo si quieres)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SearchProvider>
      <div className="min-h-screen bg-esoft-dark text-white font-sans overflow-x-hidden selection:bg-esoft-accent selection:text-white flex flex-col relative">
        
        {/* PRELOADER: Envuelto en AnimatePresence para la animación de salida */}
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        {/* CONTENIDO DE LA APP: Solo se muestra (o se hace interactivo) cuando termina la carga */}
        {!isLoading && (
          <>
            <Navbar />
            <ScrollToTop /> 
            <SearchOverlay />

            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<About />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/soluciones" element={<Solutions />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer /> 
            <WhatsAppButton />
          </>
        )}

      </div>
    </SearchProvider>
  )
}

export default App;