import { useEffect, useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, FileQuestion } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <--- Importamos el hook de traducción

export default function SearchResults() {
  const { t } = useTranslation(); // <--- Activamos las traducciones
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<any[]>([]);

  // 1. BASE DE DATOS DINÁMICA (Traducida y con palabras clave)
  // Usamos useMemo para que se actualice cuando cambias de idioma (t)
  const siteContent = useMemo(() => [
    // --- SERVICIOS ---
    { 
      title: t('navbar.cybersecurity', 'Ciberseguridad'), 
      description: t('servicesPage.items.security.desc', 'Protección integral para tu ecosistema digital.'), 
      url: "/servicios#security", 
      category: t('searchResults.categories.service', 'Servicio'),
      keywords: ["security", "protection", "antivirus", "malware"] 
    },
    { 
      title: t('navbar.consulting', 'Consultoría de Software'), 
      description: t('servicesPage.items.consulting.desc', 'Transformamos tu estrategia tecnológica.'), 
      url: "/servicios#consulting", 
      category: t('searchResults.categories.service', 'Servicio'),
      keywords: ["cloud", "aws", "migration", "nube"]
    },
    { 
      title: t('navbar.packaged', 'Soluciones Empaquetadas'), 
      description: t('servicesPage.items.packaged.desc', 'Automatización inteligente y gestión simplificada.'), 
      url: "/servicios#infra", 
      category: t('searchResults.categories.service', 'Servicio'),
      keywords: ["infrastructure", "automic", "broadcom"]
    },

    // --- CASOS DE ÉXITO ---
    { 
      title: t('navbar.fintech', 'FinTech'), 
      description: t('solutionsPage.cases.fintech.challenge', 'Plataforma de pagos segura.'), 
      url: "/soluciones#fintech", 
      category: t('searchResults.categories.case', 'Caso de Éxito'),
      keywords: ["finance", "banking", "banca", "pagos"]
    },
    { 
      title: t('navbar.ecommerce', 'E-Commerce'), 
      description: t('solutionsPage.cases.ecommerce.challenge', 'Tienda online escalable.'), 
      url: "/soluciones#ecommerce", 
      category: t('searchResults.categories.case', 'Caso de Éxito'),
      keywords: ["shop", "store", "retail", "ventas"]
    },
    { 
      title: t('navbar.healthtech', 'HealthTech'), 
      description: t('solutionsPage.cases.healthtech.challenge', 'Gestión de pacientes en tiempo real.'), 
      url: "/soluciones#healthtech", 
      category: t('searchResults.categories.case', 'Caso de Éxito'),
      keywords: ["health", "salud", "hospital", "doctor"]
    },
    { 
      title: t('navbar.sectors', 'Sectores'), 
      description: t('solutionsPage.sectors.title', 'Sectores donde innovamos'), 
      url: "/soluciones#sectores", 
      category: t('searchResults.categories.case', 'Caso de Éxito'),
      keywords: ["industries", "retail", "logistics", "logística"]
    },
    { 
      title: t('navbar.benefits', 'Beneficios'), 
      description: t('solutionsPage.benefits.title', '¿Por qué software a la medida?'), 
      url: "/soluciones#beneficios", 
      category: t('searchResults.categories.case', 'Caso de Éxito'),
      keywords: ["roi", "custom", "advantages", "ventajas"]
    },

    // --- NOSOTROS ---
    { 
      title: t('navbar.history', 'Historia'), 
      description: t('aboutPage.history.badge', 'Nuestra trayectoria.'), 
      url: "/nosotros/historia", 
      category: t('searchResults.categories.about', 'Nosotros'),
      keywords: ["roots", "raíces", "2006"]
    },
    { 
      title: t('navbar.team', 'Equipo'), 
      description: t('aboutPage.team.subtitle', 'Conoce a nuestro talento humano.'), 
      url: "/nosotros/equipo", 
      category: t('searchResults.categories.about', 'Nosotros'),
      keywords: ["staff", "ceo", "cto", "engineers"]
    },
    { 
      title: t('navbar.values', 'Valores'), 
      description: t('aboutPage.values.desc', 'Nuestros principios y cultura.'), 
      url: "/nosotros#valores", 
      category: t('searchResults.categories.about', 'Nosotros'),
      keywords: ["mission", "vision", "culture", "misión"]
    },

    // --- CONTACTO ---
    { 
      title: t('navbar.contact', 'Contacto'), 
      description: t('contact.subtitle', 'Cuéntanos tus desafíos tecnológicos.'), 
      url: "/contacto", 
      category: t('searchResults.categories.contact', 'Contacto'),
      keywords: ["email", "phone", "support", "sales", "ventas"]
    },
  ], [t]); // Se vuelve a calcular cuando cambia el idioma

  // 2. LÓGICA DE BÚSQUEDA
  useEffect(() => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      
      const filtered = siteContent.filter(item => {
        // Buscamos en Título, Descripción y Keywords
        const inTitle = item.title.toLowerCase().includes(lowerQuery);
        const inDesc = item.description.toLowerCase().includes(lowerQuery);
        const inKeywords = item.keywords?.some(k => k.toLowerCase().includes(lowerQuery));
        
        return inTitle || inDesc || inKeywords;
      });
      
      setResults(filtered);
    }
  }, [query, siteContent]);

  return (
    <div className="pt-32 min-h-screen bg-esoft-dark px-6">
      <div className="max-w-4xl mx-auto">
        {/* TÍTULO TRADUCIDO */}
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
          {t('searchResults.title')} <span className="text-esoft-accent">"{query}"</span>
        </h1>
        <p className="text-gray-400 mb-12">
          {results.length} {t('searchResults.count')}
        </p>

        {results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-esoft-accent/50 transition-colors group"
              >
                <Link to={result.url} className="block">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-esoft-accent uppercase tracking-wider mb-2 block">
                        {result.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-esoft-accent transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{result.description}</p>
                    </div>
                    <ArrowRight className="text-gray-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          /* ESTADO VACÍO TRADUCIDO */
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
            <FileQuestion className="mx-auto h-16 w-16 text-gray-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{t('searchResults.noResultsTitle')}</h3>
            <p className="text-gray-400">{t('searchResults.noResultsDesc')}</p>
          </div>
        )}
      </div>
    </div>
  );
}