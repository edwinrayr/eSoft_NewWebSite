import { Routes, Route } from 'react-router-dom';

// Layouts Globales
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Funcionalidades
import SearchOverlay from './components/features/SearchOverlay';
import { SearchProvider } from './context/SearchContext';
import ScrollToTop from './components/utils/ScrollToTop';

// IMPORTAR EL BOTÓN DE WHATSAPP (Asegúrate de haber creado el archivo en el paso anterior)
import WhatsAppButton from './components/ui/WhatsAppButton'; 

// Páginas
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    // 1. El Proveedor de Búsqueda envuelve TODA la app
    <SearchProvider>
      
      {/* Estructura Flex para que el Footer siempre quede al final */}
      <div className="min-h-screen bg-esoft-dark text-white font-sans overflow-x-hidden selection:bg-esoft-accent selection:text-white flex flex-col relative">
        
        {/* Componentes que NO cambian al navegar */}
        <Navbar />
        <ScrollToTop /> 
        <SearchOverlay />

        {/* Área Principal */}
        <main className="flex-grow">
          <Routes>
            {/* Rutas Oficiales */}
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/soluciones" element={<Solutions />} />
            <Route path="/contacto" element={<ContactPage />} />

            {/* Ruta de Error 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Pie de Página */}
        <Footer /> 

        {/* BOTÓN FLOTANTE DE WHATSAPP (Se verá encima de todo gracias a su posición 'fixed') */}
        <WhatsAppButton />

      </div>
    </SearchProvider>
  )
}

export default App;