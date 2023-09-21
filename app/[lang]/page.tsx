import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './components/locale-switcher'
import coolPic from '@/public/IMG_20230809_165910.jpg'
import Image from 'next/image'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  const emptySlugs = {
    urlSlug_zh  :'',
    urlSlug_en  :'',
    urlSlug_no  :'',
    urlSlug_ar  :'',
    urlSlug_es  :'',
    urlSlug_fi  :'',
    urlSlug_sv  :'',
    urlSlug_jp  :'',
  }

  return (
    <>
      <LocaleSwitcher urlSlugs={emptySlugs} />
      <section className='py-24'>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className='text-3xl font-bold'>{page.home.title}</h1>
            <p className='text-gray-500'>{page.home.description}</p>
          </div>
          <div className="md:width-1/2">
            <Image src={coolPic} alt='cool photo' width={450}/>
          </div>
        </div>
      </section>
    </>
  )
}
