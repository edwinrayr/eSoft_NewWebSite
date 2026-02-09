import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Zap, Layout, Shield } from 'lucide-react';

// Importamos tus componentes existentes
import Hero from '../components/layout/Hero';
import BentoGrid from '../components/features/BentoGrid';
import Architecture from '../components/sections/Architecture';
import ContactSection from '../components/sections/Contact';

// COMPONENTE INTERNO: Cinta Infinita de Tecnologías (Efecto Marquee)
const TechMarquee = () => {
  const techs = ["React", "Node.js", "TypeScript", "AWS", "Docker", "Next.js", "Tailwind", "Python", "GraphQL", "Figma"];
  return (
    <div className="w-full bg-black/20 border-y border-white/5 py-8 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-esoft-dark to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-esoft-dark to-transparent z-10" />
      
      <div className="flex gap-12 items-center animate-scroll whitespace-nowrap min-w-full">
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <span key={i} className="text-xl font-heading font-bold text-white/20 uppercase tracking-widest hover:text-esoft-accent transition-colors cursor-default">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

// COMPONENTE INTERNO: Resumen "Sobre Nosotros" (Teaser)
const AboutTeaser = () => (
  <section className="py-24 px-6 relative">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-esoft-accent/20 blur-[100px] rounded-full" />
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
          alt="Equipo eSoft" 
          className="relative z-10 rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
        />
        {/* Tarjeta flotante decorativa */}
        <div className="absolute -bottom-6 -right-6 bg-esoft-dark border border-white/10 p-6 rounded-xl shadow-xl z-20 hidden md:block">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold uppercase text-white tracking-wider">Status</span>
          </div>
          <p className="text-esoft-accent font-heading text-xl">Aceptando Proyectos</p>
        </div>
      </motion.div>

      <div className="space-y-8">
        <h2 className="text-4xl md:text-5xl font-heading font-bold">
          No somos una agencia más, <br />
          <span className="text-esoft-accent">somos tus aliados.</span>
        </h2>
        <p className="text-lg text-esoft-gray-light leading-relaxed">
          Nacimos con la idea de que el software empresarial no tiene por qué ser aburrido ni lento. 
          Combinamos ingeniería de alto nivel con diseño estratégico para crear productos que la gente ama usar.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <Zap size={20} />, text: "Desarrollo Ágil" },
            { icon: <Shield size={20} />, text: "Seguridad Total" },
            { icon: <Layout size={20} />, text: "Diseño UX/UI" },
            { icon: <Code2 size={20} />, text: "Código Limpio" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
              <div className="text-esoft-accent">{item.icon}</div>
              {item.text}
            </div>
          ))}
        </div>

        <Link to="/nosotros" className="inline-flex items-center gap-2 text-white font-bold border-b border-esoft-accent pb-1 hover:text-esoft-accent transition-colors group">
          Conoce nuestra historia <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="bg-esoft-dark overflow-hidden">
      
      {/* 1. HERO PRINCIPAL */}
      <Hero />

      {/* 2. CINTA INFINITA (Separador Visual) */}
      <TechMarquee />
      
      {/* 3. SERVICIOS (Con fondo degradado sutil) */}
      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <BentoGrid />
        
        {/* Botón "Ver Todos" centrado debajo del grid */}
        <div className="text-center pb-20 -mt-10 relative z-10">
          <Link to="/servicios" className="inline-block px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-esoft-accent hover:border-transparent transition-all text-sm uppercase tracking-widest font-bold">
            Explorar todos los servicios
          </Link>
        </div>
      </div>

      {/* 4. TEASER "SOBRE NOSOTROS" */}
      <AboutTeaser />

      {/* 5. ARQUITECTURA (Tecnología) */}
      <div className="relative">
        {/* Un efecto de luz verde detrás de la sección */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-esoft-accent/5 blur-[120px] pointer-events-none" />
        <Architecture />
      </div>

      {/* 6. CONTACTO FINAL */}
      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-esoft-accent/50 to-transparent" />
        <ContactSection />
      </div>

    </div>
  );
}