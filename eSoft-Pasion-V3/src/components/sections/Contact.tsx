import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowRight, MapPin, Phone, Loader2, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = 'service_24mhenf';
    const TEMPLATE_ID = 'template_vvr9ic9';
    const PUBLIC_KEY = 'H7lIYN47SEVm6KZyI';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setIsSuccess(true);
            setIsSending(false);
            form.current?.reset();
        }, (error) => {
            console.log(error.text);
            alert(t('contact.error', 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.'));
            setIsSending(false);
        });
    }
  };

  return (
    // CONTENEDOR: Adaptable con animación menta
    <section id="contacto" className="pt-32 pb-24 relative bg-white dark:bg-esoft-dark min-h-screen overflow-hidden transition-colors duration-300">
      
      {/* CAPA DE ANIMACIÓN VERDE MENTA (Solo visible en Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500">
         <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/50 to-white bg-[length:200%_200%] animate-gradient-x" />
         <div className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: 'linear-gradient(#1b9f88 1px, transparent 1px), linear-gradient(to right, #1b9f88 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda: Información */}
          <div className="space-y-8 sticky top-32">
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-tight text-gray-900 dark:text-white">
              {t('contact.titleLine1')} <br />
              <span className="text-esoft-accent">{t('contact.titleLine2')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-esoft-gray-light font-light leading-relaxed">
              {t('contact.subtitle')}
            </p>
            
            <div className="flex items-center gap-4 text-gray-900 dark:text-white font-medium py-2">
              <div className="w-12 h-1 bg-esoft-accent rounded-full"></div>
              <span>{t('contact.response')}</span>
            </div>

            <ul className="space-y-4">
              {[1, 2, 3].map((num) => (
                <li key={num} className="flex items-center gap-3 text-gray-600 dark:text-esoft-gray-light">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-esoft-accent shrink-0 shadow-sm">
                    <ArrowRight size={16} />
                  </div>
                  <span className="text-lg">{t(`contact.list.item${num}`)}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-gray-200 dark:border-white/10 mt-8 space-y-4">
               <div className="flex items-start gap-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <MapPin className="text-esoft-accent mt-1" size={20} />
                  <p className="text-sm max-w-xs leading-relaxed">
                    {t('contact.info.address')}
                  </p>
               </div>
               <div className="flex items-center gap-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Phone className="text-esoft-accent" size={20} />
                  <p className="text-sm font-mono tracking-wide">
                    {t('contact.info.phone')}
                  </p>
               </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white/80 dark:bg-white/5 border border-emerald-500/30 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center h-full min-h-[500px]"
                >
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-20 h-20 bg-esoft-accent rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-esoft-accent/30"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                    {t('contact.successTitle', '¡Mensaje Recibido!')}
                  </h3>
                  <p className="text-gray-600 dark:text-esoft-gray-light text-lg leading-relaxed max-w-md">
                    {t('contact.successDesc', 'Gracias por contactar con nosotros. Nuestro equipo ha recibido tu solicitud y te responderemos en breve.')}
                  </p>
                  
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-sm text-esoft-accent font-bold uppercase tracking-widest hover:text-emerald-700 dark:hover:text-white transition-colors"
                  >
                    {t('contact.sendAnother', 'Enviar otro mensaje')}
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  ref={form}
                  onSubmit={sendEmail}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md space-y-6 shadow-2xl relative transition-colors"
                >
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-esoft-accent/20 rounded-full blur-3xl pointer-events-none" />

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-esoft-accent uppercase tracking-widest ml-1">
                      {t('contact.form.name')}
                    </label>
                    <input 
                      type="text" 
                      name="user_name"
                      required
                      placeholder={t('contact.form.namePh')}
                      className="w-full bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-esoft-accent focus:ring-1 focus:ring-esoft-accent transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-esoft-accent uppercase tracking-widest ml-1">
                      {t('contact.form.email')}
                    </label>
                    <input 
                      type="email" 
                      name="user_email" 
                      required
                      placeholder={t('contact.form.emailPh')}
                      className="w-full bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-esoft-accent focus:ring-1 focus:ring-esoft-accent transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-esoft-accent uppercase tracking-widest ml-1">
                      {t('contact.form.message')}
                    </label>
                    <textarea 
                      rows={5}
                      name="message" 
                      required
                      placeholder={t('contact.form.messagePh')}
                      className="w-full bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-esoft-accent focus:ring-1 focus:ring-esoft-accent transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 shadow-sm resize-none"
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
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}