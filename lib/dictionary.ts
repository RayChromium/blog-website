import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  zh: () => import('@/dictionaries/zh_CN.json').then(module => module.default),
  no: () => import('@/dictionaries/no.json').then(module => module.default),
  ar: () => import('@/dictionaries/ar.json').then(module => module.default),
  fi: () => import('@/dictionaries/fi.json').then(module => module.default),
  sv: () => import('@/dictionaries/sv.json').then(module => module.default),
  es: () => import('@/dictionaries/es.json').then(module => module.default),
  ja: () => import('@/dictionaries/ja.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
