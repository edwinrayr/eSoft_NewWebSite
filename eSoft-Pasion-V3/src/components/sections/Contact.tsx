import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight, MapPin, Phone, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // TUS CREDENCIALES DE EMAILJS (Ya integradas)
    const SERVICE_ID = 'service_24mhenf';
    const TEMPLATE_ID = 'template_vvr9ic9';
    const PUBLIC_KEY = 'H7lIYN47SEVm6KZyI';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
            setIsSending(false);
            form.current?.reset(); // Limpia el formulario
        }, (error) => {
            console.log(error.text);
            alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
            setIsSending(false);
        });
    }
  };

  return (
    <section id="contacto" className="py-24 relative bg-esoft-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda: Información eSoft */}
          <div className="space-y-8 sticky top-24">
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-tight text-white">
              {t('contact.titleLine1')} <br />
              <span className="text-esoft-accent">{t('contact.titleLine2')}</span>
            </h2>
            <p className="text-xl text-esoft-gray-light font-light leading-relaxed">
              {t('contact.subtitle')}
            </p>
            
            {/* Promesa de respuesta */}
            <div className="flex items-center gap-4 text-white font-medium py-2">
              <div className="w-12 h-1 bg-esoft-accent rounded-full"></div>
              <span>{t('contact.response')}</span>
            </div>

            {/* Lista de beneficios */}
            <ul className="space-y-4">
              {[1, 2, 3].map((num) => (
                <li key={num} className="flex items-center gap-3 text-esoft-gray-light">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-esoft-accent shrink-0">
                    <ArrowRight size={16} />
                  </div>
                  {/* Nota: Asegúrate de que las claves en tu JSON sean contact.list.item1, item2, etc. */}
                  <span className="text-lg">{t(`contact.list.item${num}`)}</span>
                </li>
              ))}
            </ul>

            {/* Datos de contacto directos */}
            <div className="pt-8 border-t border-white/10 mt-8 space-y-4">
               <div className="flex items-start gap-4 text-gray-400 hover:text-white transition-colors">
                  <MapPin className="text-esoft-accent mt-1" size={20} />
                  <p className="text-sm max-w-xs leading-relaxed">
                    {t('contact.info.address')}
                  </p>
               </div>
               <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  <Phone className="text-esoft-accent" size={20} />
                  <p className="text-sm font-mono tracking-wide">
                    {t('contact.info.phone')}
                  </p>
               </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <motion.form 
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm space-y-6 shadow-2xl relative"
          >
            {/* Destello decorativo */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-esoft-accent/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-2">
              <label className="text-xs font-bold text-esoft-accent uppercase tracking-widest ml-1">
                {t('contact.form.name')}
              </label>
              <input 
                type="text" 
                name="user_name" // Coincide con {{user_name}} en EmailJS
                required
                placeholder={t('contact.form.namePh')}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-esoft-accent focus:ring-1 focus:ring-esoft-accent transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-esoft-accent uppercase tracking-widest ml-1">
                {t('contact.form.email')}
              </label>
              <input 
                type="email" 
                name="user_email" // Coincide con {{user_email}} en EmailJS
                required
                placeholder={t('contact.form.emailPh')}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-esoft-accent focus:ring-1 focus:ring-esoft-accent transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-esoft-accent uppercase tracking-widest ml-1">
                {t('contact.form.message')}
              </label>
              <textarea 
                rows={5}
                name="message" // Coincide con {{message}} en EmailJS
                required
                placeholder={t('contact.form.messagePh')}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-esoft-accent focus:ring-1 focus:ring-esoft-accent transition-all placeholder:text-gray-600 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSending}
              className={`w-full py-5 bg-esoft-accent hover:bg-emerald-600 text-white font-bold rounded-xl uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 group shadow-lg shadow-esoft-accent/20 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSending ? (
                <>Enviando... <Loader2 className="animate-spin" size={18}/></>
              ) : (
                <>{t('contact.form.btn')} <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}