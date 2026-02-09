import { motion } from 'framer-motion';
import { Monitor, Smartphone, Cloud, PenTool, CheckCircle, ArrowRight, Code } from 'lucide-react';
import Card from '../components/ui/Card';

export default function Services() {
  
  const services = [
    {
      id: 'web',
      icon: <Monitor size={32} />,
      title: "Desarrollo Web Full Stack",
      desc: "No usamos plantillas genéricas. Construimos plataformas a medida que se adaptan a tus reglas de negocio.",
      features: ["SPA (Single Page Applications)", "E-commerce escalable", "Paneles de Administración (Dashboards)", "Integración de APIs y Pasarelas de Pago"]
    },
    {
      id: 'mobile',
      icon: <Smartphone size={32} />,
      title: "Aplicaciones Móviles",
      desc: "Lleva tu negocio al bolsillo de tus clientes. Desarrollo nativo y multiplataforma con rendimiento nativo.",
      features: ["iOS & Android (React Native)", "Notificaciones Push", "Geolocalización", "Modo Offline"]
    },
    {
      id: 'cloud',
      icon: <Cloud size={32} />,
      title: "Infraestructura Cloud",
      desc: "Olvídate de servidores caídos. Diseñamos arquitecturas en la nube que crecen automáticamente con tu tráfico.",
      features: ["AWS / Google Cloud / Azure", "Docker & Kubernetes", "Migración de servidores", "Seguridad y Backups automáticos"]
    },
    {
      id: 'ui',
      icon: <PenTool size={32} />,
      title: "Diseño UI/UX",
      desc: "Antes de escribir código, diseñamos experiencias. Prototipos interactivos que validan tu idea.",
      features: ["Wireframing & Prototyping", "Sistemas de Diseño", "Tests de Usabilidad", "Diseño Responsivo"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-esoft-dark relative overflow-hidden">
      
      {/* 1. HERO SERVICES */}
      <section className="relative px-6 py-20 text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-6">
            Soluciones <span className="text-esoft-accent">Integrales</span>
          </h1>
          <p className="text-xl text-esoft-gray-light font-light">
            Desde la primera línea de código hasta el despliegue en la nube. 
            Cubrimos todo el ciclo de vida del desarrollo de software.
          </p>
        </motion.div>
      </section>

      {/* 2. LISTA DETALLADA (ZIG-ZAG) */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-32">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row gap-12 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Visual (Tarjeta con Icono Gigante) */}
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-esoft-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Card className="flex items-center justify-center h-80 bg-gradient-to-br from-white/5 to-black border-esoft-accent/20">
                  <div className="text-esoft-accent transform group-hover:scale-110 transition-transform duration-500">
                    {/* Clonamos el icono para hacerlo gigante */}
                    <div className="scale-[3]">{service.icon}</div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contenido */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-3 text-esoft-accent mb-2">
                {service.icon}
                <span className="font-heading font-bold uppercase tracking-wider text-sm">Servicio 0{index + 1}</span>
              </div>
              
              <h2 className="text-4xl font-heading font-bold text-white">{service.title}</h2>
              <p className="text-lg text-esoft-gray-light leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-esoft-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 flex items-center gap-2 text-white border-b border-esoft-accent pb-1 hover:text-esoft-accent transition-colors group">
                Consultar presupuesto <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 3. TECH STACK (Tecnologías) */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-12">Nuestro <span className="text-esoft-accent">Arsenal Tecnológico</span></h2>
          
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* Simulación de logos con texto estilizado */}
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'].map((tech) => (
              <div key={tech} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 flex items-center gap-2 hover:border-esoft-accent hover:text-white hover:opacity-100 transition-all cursor-default">
                <Code size={18} />
                <span className="font-heading font-medium tracking-wide">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SIMPLE */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-2xl text-esoft-gray-light mb-6">¿No ves lo que buscas?</h3>
        <p className="max-w-2xl mx-auto mb-8 text-gray-400">
          Nos encantan los retos. Si tienes un requerimiento técnico específico o una idea loca, 
          probablemente podemos construirla.
        </p>
        <button className="px-8 py-3 bg-esoft-charcoal border border-white/10 text-white rounded-lg hover:bg-esoft-accent hover:border-transparent transition-all">
          Contáctanos para una solución a medida
        </button>
      </section>

    </div>
  );
}