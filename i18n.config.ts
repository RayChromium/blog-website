export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh'],
  localeNames: {
    'en':'English', 
    'zh': '简体中文',
  }
} as const

export type Locale = (typeof i18n)['locales'][number]
