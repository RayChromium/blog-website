import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import logo from '@/public/favicon-32x32.png'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6 bg-blue-800 text-white shadow-md'>
      <nav className='relative container mx-auto p-6'>
        <div className="flex items-center justify-between space-x-4">
          <div className="pt-2">
            <Link href={`/${lang}`} className='hover:text-blue-300'>
              <Image src={logo} alt="cool logo"/>
            </Link>
          </div>
      <Link href={`/${lang}`} className='hover:text-blue-300 hover:bg-white hover:bg-opacity-10 rounded-lg px-2 py-1 transition-all duration-200 ease-in-out'>
        {navigation.home}
      </Link>
      <Link href={`/${lang}/about`} className='hover:text-blue-300 hover:bg-white hover:bg-opacity-10 rounded-lg px-2 py-1 transition-all duration-200 ease-in-out'>
        {navigation.about}
      </Link>
      <Link href={`/${lang}/blogs`} className='hover:text-blue-300 hover:bg-white hover:bg-opacity-10 rounded-lg px-2 py-1 transition-all duration-200 ease-in-out'>
        {navigation.blogs}
      </Link>
    </div>
  </nav>
</header>
  )
}
