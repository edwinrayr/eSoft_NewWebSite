import { motion } from 'framer-motion';
import { Users, Target, Zap, Clock, Trophy, Heart } from 'lucide-react';
import Card from '../components/ui/Card'; // Reutilizamos tu tarjeta del BentoGrid

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-esoft-dark relative overflow-hidden">
      
      {/* 1. HERO DE LA PÁGINA (Encabezado) */}
      <section className="relative px-6 py-20 text-center max-w-5xl mx-auto">
        {/* Luz de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-esoft-accent/10 blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-esoft-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            Nuestra Esencia
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-8">
            Más que código, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              creamos futuro
            </span>
          </h1>
          <p className="text-xl text-esoft-gray-light max-w-3xl mx-auto leading-relaxed font-light">
            En eSoft Pasion, nacimos con una misión clara: democratizar la tecnología de alto nivel. 
            No somos solo una agencia de desarrollo; somos el socio estratégico que tu empresa necesita 
            para navegar la era digital.
          </p>
        </motion.div>
      </section>

      {/* 2. ESTADÍSTICAS (Números que importan) */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '3+', label: 'Años de Experiencia', icon: <Clock /> },
            { num: '50+', label: 'Proyectos Exitosos', icon: <Trophy /> },
            { num: '99%', label: 'Clientes Felices', icon: <Heart /> },
            { num: '24/7', label: 'Soporte Técnico', icon: <Zap /> },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-center text-esoft-accent mb-2 opacity-80">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">{stat.num}</h3>
              <p className="text-sm text-esoft-gray-light uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. NUESTROS VALORES (Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Texto Izquierda */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              ¿Por qué elegir <br />
              <span className="text-esoft-accent">eSoft Pasion?</span>
            </h2>
            <p className="text-lg text-esoft-gray-light leading-relaxed">
              En un mercado saturado de soluciones genéricas, nosotros apostamos por la personalización 
              y la excelencia técnica. Cada línea de código que escribimos tiene un propósito.
            </p>
            <ul className="space-y-6">
              {[
                { title: 'Innovación Constante', desc: 'Nunca dejamos de aprender. Usamos lo último en Tech.' },
                { title: 'Transparencia Total', desc: 'Sin letras chiquitas. Sabrás exactamente qué estamos haciendo.' },
                { title: 'Pasión por el Diseño', desc: 'No solo funciona bien, se ve increíble.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-esoft-accent">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-esoft-gray-light text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tarjetas Derecha (Visual) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-esoft-accent/20 to-transparent border-esoft-accent/20">
              <Users className="text-esoft-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Equipo Humano</h3>
              <p className="text-sm text-esoft-gray-light">Talento joven y experimentado trabajando juntos.</p>
            </Card>
            <Card className="sm:translate-y-12">
              <Zap className="text-yellow-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Velocidad</h3>
              <p className="text-sm text-esoft-gray-light">Entregas ágiles sin sacrificar calidad.</p>
            </Card>
          </div>

        </div>
      </section>

      {/* 4. CTA FINAL (Llamado a la acción) */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-esoft-charcoal to-black border border-white/10 rounded-3xl p-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-esoft-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative z-10">
            ¿Listo para empezar tu transformación?
          </h2>
          <p className="text-esoft-gray-light mb-8 relative z-10">
            Conoce al equipo que hará realidad tu visión.
          </p>
          <button className="relative z-10 px-8 py-3 bg-white text-esoft-dark font-bold rounded-full hover:bg-esoft-accent hover:text-white transition-all">
            Hablar con un Experto
          </button>
        </div>
      </section>
      
    </div>
  );
}