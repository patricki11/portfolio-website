import i18next from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';

// Function to import the resources for each language
const importCategory = async (language, category) => {
    return await import(`../../locales/${language}/${category}.json`); // Use the dynamic import with the file extension
};


const initializei18next = async () => {
  const resources = {};

  const supportedLanguages = ['en', 'nl']; // Define the languages you support

  await Promise.all(
    supportedLanguages.map(async (language) => {
      resources[language] = {
        translations: await importCategory(language, 'translations'),
        about: await importCategory(language, 'about'),
        employment: await importCategory(language, 'employment'),
        internship: await importCategory(language, 'internship'),
        education: await importCategory(language, 'education'),
        projects: await importCategory(language, 'projects')
      }
    }),
  );

  i18next.use(languageDetector);

  i18next.init({
    lng: localStorage.getItem('lang') || 'en', // Default language
    fallbackLng: 'en', // Fallback to English if a translation is missing
    resources: resources,
    defaultNS: 'translations'
  });
}

export default {
    install: function (app) {
      app.config.globalProperties.$i18n = i18next;
      app.config.globalProperties.$t = i18next.t.bind(i18next);
      app.provide('i18n', i18next);
    },
    initializei18next,
  };