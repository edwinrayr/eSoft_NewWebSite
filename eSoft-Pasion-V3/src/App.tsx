import { Routes, Route } from 'react-router-dom';

// Layouts Globales (Se ven en todas las páginas)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Funcionalidades (Buscador y Utilidades)
import SearchOverlay from './components/features/SearchOverlay';
import { SearchProvider } from './context/SearchContext';
import ScrollToTop from './components/utils/ScrollToTop';

// Páginas (El contenido cambiante)
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    // 1. El Proveedor de Búsqueda envuelve TODA la app para que funcione en cualquier lado
    <SearchProvider>
      
      {/* Estructura Flex para que el Footer siempre quede al final si la página es corta */}
      <div className="min-h-screen bg-esoft-dark text-white font-sans overflow-x-hidden selection:bg-esoft-accent selection:text-white flex flex-col">
        
        {/* Componentes que NO cambian al navegar */}
        <Navbar />
        <ScrollToTop /> {/* Truco mágico: Sube el scroll al cambiar de página */}
        <SearchOverlay />

        {/* Área Principal (Aquí se cargan las distintas páginas) */}
        <main className="flex-grow">
          <Routes>
            {/* Rutas Oficiales */}
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/soluciones" element={<Solutions />} />
            <Route path="/contacto" element={<ContactPage />} />

            {/* Ruta de Error 404 (Siempre al final) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Pie de Página (Siempre visible al final) */}
        <Footer /> 

      </div>
    </SearchProvider>
  )
}

export default App