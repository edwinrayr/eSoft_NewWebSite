import { motion } from 'framer-motion';
import { Mail, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Internships() {
  const { t } = useTranslation();

  return (
    // CAMBIO: bg-transparent para dejar ver la animación de fondo de App.tsx
    <div className="min-h-screen bg-transparent pt-32 pb-20 px-6 relative overflow-hidden flex flex-col justify-center transition-colors duration-500">
      
      {/* Fondo Decorativo Sutil (Ajustado para ambos modos) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-esoft-accent/5 dark:bg-esoft-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Texto adaptable */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-esoft-accent/5 dark:bg-esoft-accent/10 border border-gray-200 dark:border-esoft-accent/20 text-esoft-accent text-xs font-bold uppercase tracking-widest mb-6 transition-colors">
              <Sparkles size={12} />
              {t('internshipsPage.hero.badge')}
            </span>

            {/* Título adaptable: Gris oscuro en light, Blanco en dark */}
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors">
              {t('internshipsPage.hero.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-esoft-accent to-emerald-400">
                {t('internshipsPage.hero.highlight')}
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-esoft-gray-light leading-relaxed mb-8 transition-colors">
              {t('internshipsPage.hero.subtitle')}
            </p>

            <div className="space-y-6">
                <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-3 transition-colors">{t('internshipsPage.general.title')}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 transition-colors">
                        {t('internshipsPage.general.desc')}
                    </p>
                </div>

                <ul className="space-y-3">
                    {(t('internshipsPage.general.benefits', { returnObjects: true }) as string[]).map((item, index) => (
                        <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-colors"
                        >
                            <div className="p-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 transition-colors">
                                <CheckCircle2 size={16} />
                            </div>
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Tarjeta Glassmorphism adaptable */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Efecto Glow adaptable */}
            <div className="absolute inset-0 bg-gradient-to-r from-esoft-accent to-blue-600 blur-3xl opacity-10 dark:opacity-20 rounded-3xl transition-opacity" />

            {/* TARJETA: bg-white/60 para modo claro, bg-white/5 para modo oscuro */}
            <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-10 rounded-3xl shadow-xl dark:shadow-2xl relative overflow-hidden group hover:border-esoft-accent/30 transition-all">
                
                <div className="absolute top-0 right-0 p-10 text-gray-900 dark:text-white opacity-5 pointer-events-none transition-colors">
                    <Mail size={150} />
                </div>

                <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                    {t('internshipsPage.cta.title')}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg leading-relaxed transition-colors">
                    {t('internshipsPage.cta.desc')}
                </p>

                <a 
                  href={`mailto:${t('internshipsPage.cta.email')}`}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-esoft-accent text-white font-bold rounded-xl hover:bg-emerald-600 transition-all hover:scale-[1.02] shadow-lg shadow-esoft-accent/20 group/btn"
                >
                  <Mail size={20} />
                  <span>{t('internshipsPage.cta.email')}</span>
                  <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>

                <p className="text-center text-gray-400 dark:text-gray-500 text-xs mt-6 transition-colors">
                    {t('internshipsPage.cta.note')}
                </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}