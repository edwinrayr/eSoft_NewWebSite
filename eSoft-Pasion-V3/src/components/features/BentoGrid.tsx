import { Monitor, Smartphone, Palette, Server } from 'lucide-react';
import Card from '../ui/Card';

export default function BentoGrid() {
  return (
    <section id="servicios" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de la Sección */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
            Nuestros <span className="text-esoft-accent">Servicios</span>
          </h2>
          <p className="text-esoft-gray-light max-w-2xl mx-auto text-lg">
            Soluciones tecnológicas integrales diseñadas para escalar tu negocio.
          </p>
        </div>

        {/* EL GRID MAGICO (Layout estilo Bento) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* 1. Tarjeta Gigante: Desarrollo Web (Ocupa 2 espacios de ancho) */}
          <Card className="md:col-span-2 md:row-span-2 bg-gradient-to-b from-white/5 to-white/[0.02]">
            <div className="bg-esoft-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-esoft-accent">
              <Monitor size={32} />
            </div>
            <h3 className="text-3xl font-heading font-bold mb-4">Desarrollo Web Full Stack</h3>
            <p className="text-esoft-gray-light text-lg mb-8 flex-grow">
              Creamos sitios web ultrarrápidos y aplicaciones complejas usando las últimas tecnologías (React, Node.js, Next.js).
              Nos enfocamos en SEO, rendimiento y una experiencia de usuario impecable.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
              alt="Code" 
              className="w-full h-64 object-cover rounded-xl opacity-60 group-hover:opacity-80 transition-opacity mask-image-gradient"
            />
          </Card>

          {/* 2. Tarjeta Vertical: Apps Móviles (Ocupa 2 espacios de alto) */}
          <Card className="md:row-span-2 relative overflow-hidden" delay={0.1}>
            <div className="bg-blue-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
              <Smartphone size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-3">Apps Móviles</h3>
            <p className="text-esoft-gray-light mb-6">
              Llevamos tu idea a iOS y Android con desarrollo nativo o híbrido.
            </p>
            {/* Decoración Visual */}
            <div className="absolute bottom-0 right-0 w-32 h-64 bg-gradient-to-t from-blue-500/20 to-transparent blur-3xl" />
            <div className="mt-auto border border-white/10 rounded-xl p-4 bg-black/40 backdrop-blur-sm">
              <div className="flex gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-3/4 bg-white/20 rounded" />
                <div className="h-2 w-1/2 bg-white/20 rounded" />
              </div>
            </div>
          </Card>

          {/* 3. Tarjeta Pequeña: Diseño UX/UI */}
          <Card delay={0.2}>
            <div className="bg-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-purple-400">
              <Palette size={24} />
            </div>
            <h3 className="text-xl font-heading font-bold mb-2">Diseño UX/UI</h3>
            <p className="text-sm text-esoft-gray-light">
              Interfaces modernas, intuitivas y centradas en la conversión del usuario.
            </p>
          </Card>

          {/* 4. Tarjeta Pequeña: Cloud & Hosting */}
          <Card delay={0.3}>
            <div className="bg-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-orange-400">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-heading font-bold mb-2">Cloud Services</h3>
            <p className="text-sm text-esoft-gray-light">
              Implementación en AWS, Azure o Google Cloud. Escalabilidad garantizada.
            </p>
          </Card>

        </div>
      </div>
    </section>
  );
}