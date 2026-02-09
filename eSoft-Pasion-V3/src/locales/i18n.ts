import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// IMPORTAMOS LOS JSON QUE ACABAMOS DE CREAR
import es from './es.json';
import en from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: es // Aquí cargamos el archivo es.json
      },
      en: {
        translation: en // Aquí cargamos el archivo en.json
      }
    },
    lng: 'es', // Idioma inicial
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;