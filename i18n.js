import 'intl';
import 'intl/locale-data/jsonp/en'; // Add other locales as needed
import 'intl/locale-data/jsonp/nl';
import 'intl-pluralrules';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './locales/en.json';
import nl from './locales/nl.json';

const resources = {
  en: { translation: en },
  nl: { translation: nl }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Localization.locale,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
