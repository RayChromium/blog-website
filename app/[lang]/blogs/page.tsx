import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <div className='container'>
      <h1 className='text-3xl font-bold'>{page.blogs.title}</h1>
      <p className='text-gray-500'>{page.blogs.description}</p>
    </div>
  )
}
