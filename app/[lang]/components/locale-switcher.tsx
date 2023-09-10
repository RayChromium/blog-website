'use client'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { i18n } from '@/i18n.config'
import { ChangeEvent } from 'react'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push(redirectedPathName(locale));
  };

  return (
  <div className="flex hidden md:block  w-24 max-w-xs ml-auto mr-0">
    <select onChange={handleChange} className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      {i18n.locales.map((locale) => (
        <option key={locale} value={locale} className="text-gray-900">
          {i18n.localeNames[locale]}
        </option>
      ))}
    </select>
  </div>
  )
}
