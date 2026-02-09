import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna Izquierda: Texto de Venta */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-tight">
              ¿Tienes un <br />
              <span className="text-esoft-accent">proyecto</span> en mente?
            </h2>
            <p className="text-xl text-esoft-gray-light font-light">
              Hablemos de cómo podemos llevar tu empresa al siguiente nivel. 
              La primera asesoría técnica va por nuestra cuenta.
            </p>
            
            <div className="flex items-center gap-4 text-white font-medium">
              <div className="w-12 h-1 bg-esoft-accent"></div>
              <span>Respuesta en menos de 24 horas</span>
            </div>

            <ul className="space-y-4 pt-4">
              {['Consultoría Gratuita', 'Presupuesto a Medida', 'Sin Compromiso'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-esoft-gray-light">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-esoft-accent">
                    <ArrowRight size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Derecha: Formulario */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm space-y-6 shadow-2xl"
          >
            <div className="space-y-2">
              <label className="text-sm font-bold text-white uppercase tracking-wider">Nombre</label>
              <input 
                type="text" 
                placeholder="Tu nombre o empresa"
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-esoft-accent focus:ring-1 focus:ring-esoft-accent transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-white uppercase tracking-wider">Correo</label>
              <input 
                type="email" 
                placeholder="ejemplo@correo.com"
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-esoft-accent focus:ring-1 focus:ring-esoft-accent transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-white uppercase tracking-wider">Mensaje</label>
              <textarea 
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto..."
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-esoft-accent focus:ring-1 focus:ring-esoft-accent transition-all placeholder:text-gray-600 resize-none"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-esoft-accent hover:bg-opacity-90 text-white font-bold rounded-lg uppercase tracking-wide transition-all flex items-center justify-center gap-2 group">
              Enviar Mensaje
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}