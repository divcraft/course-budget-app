import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
import { CustomBackend } from './CustomBackend'
import LanguageDetector from 'i18next-browser-languagedetector';
// not like to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

const token = 'a3bf6586ab616d8b980795910e5e87d0'
const id = '341681'

i18n
   // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
   // learn more: https://github.com/i18next/i18next-http-backend
   .use(CustomBackend)
   // detect user language
   // learn more: https://github.com/i18next/i18next-browser-languageDetector
   .use(LanguageDetector)
   // pass the i18n instance to react-i18next.
   .use(initReactI18next)
   // init i18next
   // for all options read: https://www.i18next.com/overview/configuration-options
   .init({
      defaultLanguage: 'en',
      otherLanguages: ['pl'],
      fallbackLng: 'en',
      debug: true,
      saveMissing: true,

      backend: {
         loadPath: 'https://cors-anywhere.herokuapp.com/https://api.poeditor.com/v2/terms/list',
         addPath: 'https://cors-anywhere.herokuapp.com/https://api.poeditor.com/v2/terms/add',
         crossDomain: true,
         parse: data => {
            const parsedData = JSON.parse(data)
            const terms = parsedData.result.terms.reduce((acc, item) => {
               acc[item.term] = item.translation.content || item.term;

               return acc;
            }, {})

            return terms
         },
         parsePayLoad: (namespace, key) => {
            if (key === '_t') return
            const data = [{
               term: key,
            }];
            const payload = {
               api_token: token,
               data: JSON.stringify(data),
               id,
            };
            return payload;
         },
         parseLoadPayLoad: ({ lng }) => {
            const payload = {
               api_token: token,
               language: lng,
               id,
            };
            return payload;
         },
      },

      interpolation: {
         escapeValue: false, // not needed for react as it escapes by default
      }
   });


export default i18n;