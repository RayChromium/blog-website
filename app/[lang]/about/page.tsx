import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from '../components/locale-switcher'

export default async function About({
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
        <div className='container'>
          <h1 className='text-3xl font-bold'>{page.about.title}</h1>
          <p className='text-gray-500'>{page.about.description}</p>
        </div>
      </section>
    </>
  )
}
