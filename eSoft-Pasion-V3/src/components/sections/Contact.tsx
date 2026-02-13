import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowRight, MapPin, Phone, Loader2, CheckCircle2, Mail, Clock, Shield } from 'lucide-react';
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
    <section id="contacto" className="pt-32 pb-32 relative bg-[#f8fafc] dark:bg-[#050d0a] min-h-screen overflow-hidden transition-colors duration-500">

      {/* --- FONDO PREMIUM (Matriz de Puntos Global) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.5] dark:opacity-[0.15] transition-opacity duration-500"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #1b9f88 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-6 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-esoft-accent animate-pulse" />
            <span className="text-gray-600 dark:text-gray-200 text-xs font-bold uppercase tracking-[0.2em]">
              {t('contact.badge', 'Conexión Directa')}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Iniciemos tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent via-emerald-400 to-teal-300">Transformación</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ============================================================== */}
          {/* COLUMNA IZQUIERDA: TARJETA DE INFORMACIÓN (Ocupa 5 columnas)   */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative bg-gray-900 dark:bg-[#0a110e] rounded-[3rem] p-10 md:p-12 overflow-hidden shadow-2xl h-full flex flex-col justify-between"
          >
            {/* Luces y texturas internas del panel oscuro */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-esoft-accent/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-bold text-white mb-6 leading-tight">
                Hablemos de tus <br />
                <span className="text-esoft-accent">desafíos técnicos.</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-10">
                Ya sea que necesites auditar tu seguridad, migrar a la nube o desarrollar software a la medida, nuestros ingenieros están listos para trazar la ruta.
              </p>

              {/* Indicador de SLA de respuesta */}
              <div className="flex items-center gap-4 text-white font-medium mb-10 bg-white/5 p-4 rounded-2xl border border-white/5 w-fit">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-esoft-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-esoft-accent"></span>
                </span>
                <span className="text-sm font-bold tracking-wide">Tiempo de respuesta: {t('contact.response', '< 2 horas')}</span>
              </div>

              {/* Tarjetas Bento de Contacto Alternativo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors group cursor-default">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-esoft-accent mb-4 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Correo Directo</p>
                  <p className="text-white text-sm font-medium">contacto@esoftpasion.com</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors group cursor-default">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-esoft-accent mb-4 group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Línea Telefónica</p>
                  <p className="text-white text-sm font-mono tracking-wider">{t('contact.info.phone', '+52 55 6460 4183')}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:col-span-2 lg:col-span-1 hover:bg-white/10 transition-colors group cursor-default">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-esoft-accent mb-4 group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">HQ Corporate</p>
                  <p className="text-white text-sm font-medium leading-relaxed">{t('contact.info.address', 'Montecito 38, Piso 33, Nápoles, CDMX')}</p>
                </div>
              </div>
            </div>

            {/* Trust Badges en el pie de la columna izquierda */}
            <div className="relative z-10 flex items-center justify-between pt-8 mt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield size={16} className="text-esoft-accent" /> <span className="text-xs font-bold uppercase">Datos Seguros</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock size={16} className="text-esoft-accent" /> <span className="text-xs font-bold uppercase">Soporte 24/7</span>
              </div>
            </div>

          </motion.div>

          {/* ============================================================== */}
          {/* COLUMNA DERECHA: FORMULARIO GLASSMORPHISM (Ocupa 7 columnas)   */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-esoft-accent/10 blur-[120px] rounded-full pointer-events-none" />

            <AnimatePresence mode="wait">
              {isSuccess ? (
                // PANTALLA DE ÉXITO PREMIUM
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/60 dark:bg-white/[0.03] backdrop-blur-3xl border border-emerald-500/20 p-12 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center text-center h-[700px] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-esoft-accent/5 to-transparent pointer-events-none" />

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-24 h-24 bg-gradient-to-br from-esoft-accent to-emerald-400 rounded-3xl flex items-center justify-center text-white mb-8 shadow-[0_0_40px_rgba(27,159,136,0.5)]"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h3 className="text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                    {t('contact.successTitle', 'Iniciando Protocolo')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-sm mb-12 font-light">
                    {t('contact.successDesc', 'Hemos recibido tus datos con encriptación segura. Un arquitecto de soluciones te contactará pronto.')}
                  </p>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-3 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-full text-sm font-bold uppercase tracking-widest hover:border-esoft-accent hover:text-esoft-accent transition-all shadow-sm"
                  >
                    {t('contact.sendAnother', 'Nuevo Mensaje')}
                  </button>
                </motion.div>
              ) : (
                // FORMULARIO ACTIVO
                <motion.form
                  key="form"
                  ref={form}
                  onSubmit={sendEmail}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/60 dark:bg-white/[0.02] backdrop-blur-3xl border border-gray-200/50 dark:border-white/5 p-8 md:p-14 rounded-[3rem] shadow-xl hover:shadow-2xl dark:shadow-[0_20px_50px_-15px_rgba(27,159,136,0.1)] transition-all relative z-10"
                >
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Envíanos un mensaje</h3>
                    <p className="text-gray-500 text-sm font-light">Completa los datos y cuéntanos sobre tu proyecto.</p>
                  </div>

                  <div className="space-y-6">
                    {/* Input: Nombre */}
                    <div className="relative group">
                      <label className="absolute -top-2 left-4 px-2 bg-white dark:bg-[#08120d] text-[10px] font-bold text-gray-400 uppercase tracking-widest transition-colors group-focus-within:text-esoft-accent">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        required
                        className="w-full bg-transparent border-2 border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-esoft-accent transition-all placeholder:text-gray-300 dark:placeholder:text-gray-700"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Input: Email */}
                    <div className="relative group">
                      <label className="absolute -top-2 left-4 px-2 bg-white dark:bg-[#08120d] text-[10px] font-bold text-gray-400 uppercase tracking-widest transition-colors group-focus-within:text-esoft-accent">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        className="w-full bg-transparent border-2 border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-esoft-accent transition-all placeholder:text-gray-300 dark:placeholder:text-gray-700"
                        placeholder="john@empresa.com"
                      />
                    </div>

                    {/* Textarea: Mensaje */}
                    <div className="relative group">
                      <label className="absolute -top-2 left-4 px-2 bg-white dark:bg-[#08120d] text-[10px] font-bold text-gray-400 uppercase tracking-widest transition-colors group-focus-within:text-esoft-accent">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        rows={6}
                        name="message"
                        required
                        className="w-full bg-transparent border-2 border-gray-200 dark:border-white/10 rounded-2xl px-6 py-5 text-gray-900 dark:text-white focus:outline-none focus:border-esoft-accent transition-all placeholder:text-gray-300 dark:placeholder:text-gray-700 resize-none"
                        placeholder="Describe brevemente los requerimientos de tu proyecto o el desafío que enfrentas..."
                      ></textarea>
                    </div>

                    {/* Botón de Envío */}
                    <button
                      type="submit"
                      disabled={isSending}
                      className={`w-full py-5 bg-esoft-accent hover:bg-emerald-500 text-white font-bold rounded-2xl uppercase tracking-[0.2em] text-sm transition-all flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(27,159,136,0.3)] hover:shadow-[0_15px_30px_rgba(27,159,136,0.5)] mt-4 ${isSending ? 'opacity-70 cursor-not-allowed scale-95' : 'hover:-translate-y-1'}`}
                    >
                      {isSending ? (
                        <>Procesando <Loader2 className="animate-spin" size={18} /></>
                      ) : (
                        <>{t('contact.form.btn', 'Enviar Solicitud')} <Send size={18} className="transition-transform" /></>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}