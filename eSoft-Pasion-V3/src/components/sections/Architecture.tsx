import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, Layers, GitMerge, Globe2 } from 'lucide-react';

const features = [
  {
    icon: <Cpu />,
    title: "Alto Rendimiento",
    desc: "Optimizamos cada línea de código. Tiempos de carga inferiores a 1s y puntuación 90+ en Google Lighthouse."
  },
  {
    icon: <ShieldCheck />,
    title: "Ciberseguridad",
    desc: "Protección contra ataques DDOS, encriptación SSL de grado militar y prácticas seguras OWASP."
  },
  {
    icon: <Globe2 />,
    title: "Escalabilidad Global",
    desc: "Infraestructura lista para crecer. Desde 100 hasta 1 millón de usuarios sin caídas del servidor."
  },
  {
    icon: <GitMerge />,
    title: "CI/CD Automatizado",
    desc: "Despliegues continuos sin interrupciones. Actualizamos tu software mientras sigue funcionando."
  },
  {
    icon: <Layers />,
    title: "Arquitectura Modular",
    desc: "Microservicios y componentes reutilizables que facilitan el mantenimiento y reducen costos futuros."
  },
  {
    icon: <Zap />,
    title: "Tecnología de Punta",
    desc: "Usamos el stack moderno: React, Node.js, Next.js y bases de datos NoSQL para máxima velocidad."
  }
];

export default function Architecture() {
  return (
    <section id="soluciones" className="py-24 bg-esoft-dark relative overflow-hidden">
      
      {/* Fondo decorativo (Rejilla) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-esoft-accent font-bold tracking-widest uppercase text-sm">Nuestro ADN</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
            Ingeniería de <span className="text-white">Clase Mundial</span>
          </h2>
          <p className="text-esoft-gray-light max-w-2xl mx-auto">
            No solo escribimos código, construimos ecosistemas digitales seguros, rápidos y escalables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-esoft-accent/50 hover:bg-white/[0.07] transition-all group"
            >
              <div className="w-12 h-12 bg-esoft-charcoal rounded-lg flex items-center justify-center text-esoft-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(27,159,136,0.2)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-esoft-gray-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}