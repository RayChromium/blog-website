export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh', 'no', 'ar', 'es', 'fi', 'sv', 'ja'],
  localeNames: {
    'en':'English', 
    'zh': '简体中文',
    'no': 'Norsk Bokmål',
    'ar': 'العربية',
    'es': 'Español',
    'fi': 'Suomi',
    'sv': 'Svenska',
    'ja': '日本語',
  }
} as const

export type Locale = (typeof i18n)['locales'][number]
