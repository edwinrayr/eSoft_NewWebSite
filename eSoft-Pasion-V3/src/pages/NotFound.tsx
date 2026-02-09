import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="h-screen bg-esoft-dark flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* Fondo con luz roja/naranja de advertencia */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 blur-[120px] pointer-events-none" />

      <h1 className="text-9xl font-heading font-bold text-white/10 select-none">404</h1>
      
      <div className="relative z-10 -mt-16 space-y-6">
        <h2 className="text-4xl font-heading font-bold text-white">Página no encontrada</h2>
        <p className="text-esoft-gray-light max-w-md mx-auto">
          Parece que te has perdido en el ciberespacio. La página que buscas no existe o ha sido movida.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-esoft-accent text-white rounded-full font-bold hover:bg-emerald-600 transition-colors"
        >
          <Home size={18} />
          Volver al Inicio
        </Link>
      </div>

    </div>
  );
}