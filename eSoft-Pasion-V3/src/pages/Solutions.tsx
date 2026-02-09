import { motion } from 'framer-motion';
import { TrendingUp, Lock, Globe, ShoppingBag, Activity, Briefcase, ArrowRight, Check } from 'lucide-react';

export default function Solutions() {
  
  // Datos de los casos de éxito (Simulados)
  const caseStudies = [
    {
      sector: "FinTech",
      title: "Plataforma de Pagos Segura",
      challenge: "El cliente necesitaba procesar 10,000 transacciones simultáneas sin latencia y con seguridad bancaria.",
      solution: "Implementamos una arquitectura de microservicios en AWS con encriptación de extremo a extremo y balanceo de carga automático.",
      result: "99.99% de Uptime y reducción del fraude en un 40%.",
      icon: <Lock size={24} />
    },
    {
      sector: "E-Commerce",
      title: "Tienda Online Escalable",
      challenge: "Un retail de moda sufría caídas del servidor cada vez que lanzaban ofertas o en Black Friday.",
      solution: "Migración a una solución Headless con Next.js y Shopify Plus, separando el frontend del backend.",
      result: "Cargas de página en 0.8s y ventas récord sin caídas.",
      icon: <ShoppingBag size={24} />
    },
    {
      sector: "Salud (HealthTech)",
      title: "Gestión de Pacientes en Tiempo Real",
      challenge: "Hospitales con sistemas obsoletos y expedientes en papel que retrasaban la atención.",
      solution: "WebApp progresiva (PWA) para doctores con acceso instantáneo a historiales clínicos desde tablets.",
      result: "30% más eficiencia en consultas y digitalización total.",
      icon: <Activity size={24} />
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-esoft-dark relative overflow-hidden">
      
      {/* 1. HERO SOLUCIONES */}
      <section className="relative px-6 py-20 text-center">
        {/* Decoración de fondo */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-esoft-accent/10 rounded-full blur-[80px] animate-pulse" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <span className="text-esoft-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            Casos de Éxito
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase mb-6 leading-tight">
            Transformamos Problemas en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Ventajas Competitivas
            </span>
          </h1>
          <p className="text-xl text-esoft-gray-light font-light max-w-2xl mx-auto">
            No vendemos software, vendemos eficiencia, seguridad y escalabilidad. 
            Así es como ayudamos a empresas líderes.
          </p>
        </motion.div>
      </section>

      {/* 2. GRID DE CASOS DE ESTUDIO */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-all hover:-translate-y-2"
            >
              {/* Etiqueta del Sector */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-esoft-accent/10 text-esoft-accent text-xs font-bold uppercase tracking-wider border border-esoft-accent/20">
                  {study.sector}
                </span>
                <div className="text-esoft-gray-light group-hover:text-white transition-colors">
                  {study.icon}
                </div>
              </div>

              {/* Título */}
              <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-esoft-accent transition-colors">
                {study.title}
              </h3>

              {/* Reto vs Solución */}
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-1">El Reto</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{study.challenge}</p>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                <div>
                  <p className="text-xs text-esoft-accent uppercase font-bold mb-1">La Solución</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{study.solution}</p>
                </div>
              </div>

              {/* Resultado (Footer de la tarjeta) */}
              <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-2">
                <TrendingUp size={16} className="text-green-400" />
                <span className="text-sm font-bold text-white">{study.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. INDUSTRIAS (Icon Grid) */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-12">Sectores donde innovamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Finanzas & Banca', icon: <Briefcase /> },
              { name: 'E-Learning', icon: <Globe /> },
              { name: 'Logística', icon: <ArrowRight /> },
              { name: 'Retail', icon: <ShoppingBag /> },
            ].map((industry, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-3 hover:border-esoft-accent/50 transition-colors cursor-default"
              >
                <div className="text-esoft-gray-light">{industry.icon}</div>
                <span className="font-bold text-white">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFICIOS TÉCNICOS */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-esoft-charcoal to-black rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-heading font-bold text-white">¿Por qué software a la medida?</h2>
            <p className="text-esoft-gray-light leading-relaxed">
              Las soluciones "enlatadas" te obligan a adaptar tu negocio al software. 
              Nosotros construimos software que se adapta a tu negocio, permitiéndote escalar sin límites.
            </p>
            <ul className="space-y-3">
              {['Propiedad intelectual 100% tuya', 'Sin pagos mensuales por licencia', 'Seguridad personalizada'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-white">
                  <div className="bg-esoft-accent/20 p-1 rounded-full text-esoft-accent"><Check size={12} /></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="relative aspect-video bg-esoft-accent/10 rounded-xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-6xl text-white/10 font-bold group-hover:text-white/20 transition-colors">ROI+</span>
              </div>
              {/* Gráfica simulada con CSS puro */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-around px-8 pb-8">
                <div className="w-8 h-[40%] bg-white/20 rounded-t-sm"></div>
                <div className="w-8 h-[60%] bg-white/20 rounded-t-sm"></div>
                <div className="w-8 h-[80%] bg-esoft-accent rounded-t-sm shadow-[0_0_15px_#1b9f88]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}