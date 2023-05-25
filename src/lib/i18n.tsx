import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslate from '../locale/en.json'
import ptTranslate from '../locale/pt.json'

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enTranslate
    },
    pt: {
      ...ptTranslate
    }
  },
  lng: localStorage.getItem('lng') ?? 'en'
})
