import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    // CONTENEDOR: Fondo blanco en claro, esoft-dark en oscuro
    <div className="h-screen bg-white dark:bg-esoft-dark flex flex-col items-center justify-center text-center px-6 relative overflow-hidden transition-colors duration-300">
      
      {/* 1. CAPA DE ANIMACIÓN VERDE MENTA (Solo modo Claro) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500">
         <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/50 to-white bg-[length:200%_200%] animate-gradient-x" />
      </div>

      {/* 2. EFECTO GLOW DE ADVERTENCIA (Se mantiene en ambos pero más sutil en claro) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 dark:bg-red-500/5 blur-[120px] pointer-events-none" />

      {/* TEXTO 404: Adaptado para ser visible pero discreto de fondo */}
      <h1 className="text-9xl font-heading font-bold text-gray-100 dark:text-white/5 select-none transition-colors">404</h1>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 -mt-16 space-y-6"
      >
        {/* TÍTULO: Gris oscuro en claro, blanco en oscuro */}
        <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white transition-colors">
          Página no encontrada
        </h2>
        
        {/* PÁRRAFO: Gris suave en claro */}
        <p className="text-gray-600 dark:text-esoft-gray-light max-w-md mx-auto leading-relaxed">
          Parece que te has perdido en el ciberespacio. La página que buscas no existe o ha sido movida.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-10 py-4 bg-esoft-accent text-white rounded-full font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-esoft-accent/20 hover:-translate-y-1"
        >
          <Home size={18} />
          Volver al Inicio
        </Link>
      </motion.div>

    </div>
  );
}