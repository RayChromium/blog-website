'use client'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { i18n } from '@/i18n.config'
import { ChangeEvent, useState } from 'react'

type targetSlug = {
    urlSlug_zh  :string,
    urlSlug_en  :string,
    urlSlug_no  :string,
    urlSlug_ar  :string,
    urlSlug_es  :string,
    urlSlug_fi  :string,
    urlSlug_sv  :string,
    urlSlug_jp  :string,
}

export default function LocaleSwitcher( {urlSlugs}: { urlSlugs: targetSlug} ) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathName = usePathname()
  const router = useRouter();
  

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    if( segments[2] === 'blogs' ) {
      if( locale === 'en' ) {
        segments[3] = urlSlugs.urlSlug_en;
      } else if ( locale === 'zh' ) {
        segments[3] = urlSlugs.urlSlug_zh;
      }
      else if ( locale === 'no' ) {
        segments[3] = urlSlugs.urlSlug_no;
      }else if ( locale === 'ar' ) {
        segments[3] = urlSlugs.urlSlug_ar;
      }else if ( locale === 'es' ) {
        segments[3] = urlSlugs.urlSlug_es;
      }else if ( locale === 'fi' ) {
        segments[3] = urlSlugs.urlSlug_fi;
      }else if ( locale === 'sv' ) {
        segments[3] = urlSlugs.urlSlug_sv;
      }else if ( locale === 'jp' ) {
        segments[3] = urlSlugs.urlSlug_jp;
      }
    }
    console.log(segments)
    return segments.join('/')
  }

  const handleChange = (locale: string) => {
    router.push(redirectedPathName(locale));
  };

  return (
  <div id='locale-switcher' className="fixed w-24 max-w-xs ml-auto mr-0">
    {/* <select aria-label="Language:" onChange={handleChange} className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      {i18n.locales.map((locale) => (
        <option key={locale} value={locale} className="text-gray-900">
          {i18n.localeNames[locale]}
        </option>
      ))}
    </select> */}
    <button className="bg-blue-500 text-darkGrayishBlue px-2 py-1 rounded" 
              onClick={toggleMenu}>A/أ/あ: Language</button>
      {isOpen && (
        <ul className="list-none p-0 mt-2 bg-white border border-gray-400">
          {i18n.locales.map((locale) => (
            <li key={locale} value={locale} className="p-2 cursor-pointer hover:bg-gray-200" 
            onClick={() => handleChange(locale)}>{i18n.localeNames[locale]}</li>
          ))}
        </ul>
      )}
  </div>
  )
}
