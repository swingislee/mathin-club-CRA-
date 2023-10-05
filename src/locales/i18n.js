import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from './en/translation.json';
import zhTranslations from './zh/translation.json';


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations
            },
            zh: {
                translation: zhTranslations
            }
        },
        lng: "zh",  // default language to use
        interpolation: {
            escapeValue: false  // React already escapes values.
        }
    });

export default i18n;
