import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6'>
      <nav className='relative container mx-auto p-6'>
        <div className="flex items-center justify-between space-x-4">
          <Link href={`/${lang}`} className='hover:text-darkGrayishBlue'>{navigation.home}</Link>
          <Link href={`/${lang}/about`} className='hover:text-darkGrayishBlue'>{navigation.about}</Link>
          <Link href={`/${lang}/blogs`} className='hover:text-darkGrayishBlue'>{navigation.blogs}</Link>
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  )
}
