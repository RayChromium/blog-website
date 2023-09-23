import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_ALL_POSTS } from '@/graphql/queries'
import Link from 'next/link'
import LocaleSwitcher from '../components/locale-switcher'

type postCardContent = { 
  attributes:{
     description_en: string, 
     title_en: string, 
     urlSlug_en: string,

     description_zh: string, 
     title_zh: string, 
     urlSlug_zh: string,

     description_no: string, 
     title_no: string, 
     urlSlug_no: string,

     description_ar: string, 
     title_ar: string, 
     urlSlug_ar: string,

     description_esp: string, 
     title_esp: string, 
     urlSlug_esp: string,

     description_fi: string, 
     title_fi: string, 
     urlSlug_fi: string,

     description_sv: string, 
     title_sv: string, 
     urlSlug_sv: string,

     description_jp: string, 
     title_jp: string, 
     urlSlug_jp: string,
    } 
}

export default async function Blogs({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  const client = new ApolloClient({
    uri:process.env.CSM_URL,
    cache: new InMemoryCache(),
  });
  const {data} = await client.query( {
    query: GET_ALL_POSTS
  } );
  console.log('Home data:',data.blogs.data);
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
      <div className='container'>
      <h1 className='text-3xl py-2 font-bold'>{page.blogs.title}</h1>
      <p className='text-gray-500 py-2'>{page.blogs.description}</p>
      <section className='container'>
        { data.blogs.data.map( ( val: postCardContent, i: number ) => {
          if ( lang === 'en' ) {
            return (
              <Link href={`/${lang}/blogs/${val.attributes.urlSlug_en}`} className="flex flex-col overflow-hidden rounded-lg hover:shadow-lg transform hover:scale-95 transition-all duration-200 ease-in-out" key={i}>
                <div className="flex flex-col justify-between flex-grow p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {val.attributes.title_en}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {val.attributes.description_en ? val.attributes.description_en : ''}
                    </p>
                  </div>
                </div>
              </Link>
              
            )
          } else if ( lang == 'zh' ) {
            return (
              <Link href={`/${lang}/blogs/${val.attributes.urlSlug_zh}`} className="flex flex-col overflow-hidden rounded-lg hover:shadow-lg transform hover:scale-95 transition-all duration-200 ease-in-out" key={i}>
              <div className="flex flex-col justify-between flex-grow p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {val.attributes.title_zh}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {val.attributes.description_zh ? val.attributes.description_zh : ''}
                  </p>
                </div>
              </div>
            </Link>
            )
          } else if ( lang == 'no' ) {
            return (
              <Link href={`/${lang}/blogs/${val.attributes.urlSlug_no}`} className="flex flex-col overflow-hidden rounded-lg hover:shadow-lg transform hover:scale-95 transition-all duration-200 ease-in-out" key={i}>
              <div className="flex flex-col justify-between flex-grow p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {val.attributes.title_no}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {val.attributes.description_no ? val.attributes.description_no : ''}
                  </p>
                </div>
              </div>
            </Link>
            )
          } else if ( lang == 'ar' ) {
            return (
              <Link href={`/${lang}/blogs/${val.attributes.urlSlug_ar}`} className="flex flex-col overflow-hidden rounded-lg hover:shadow-lg transform hover:scale-95 transition-all duration-200 ease-in-out" key={i}>
              <div className="flex flex-col justify-between flex-grow p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {val.attributes.title_ar}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {val.attributes.description_ar ? val.attributes.description_ar : ''}
                  </p>
                </div>
              </div>
            </Link>
            )
          }  else if ( lang == 'es' ) {
            return (
              <Link href={`/${lang}/blogs/${val.attributes.urlSlug_esp}`} className="flex flex-col overflow-hidden rounded-lg hover:shadow-lg transform hover:scale-95 transition-all duration-200 ease-in-out" key={i}>
              <div className="flex flex-col justify-between flex-grow p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {val.attributes.title_esp}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {val.attributes.description_esp ? val.attributes.description_esp : ''}
                  </p>
                </div>
              </div>
            </Link>
            )
          }  else if ( lang == 'fi' ) {
            return (
              <Link href={`/${lang}/blogs/${val.attributes.urlSlug_fi}`} className="flex flex-col overflow-hidden rounded-lg hover:shadow-lg transform hover:scale-95 transition-all duration-200 ease-in-out" key={i}>
              <div className="flex flex-col justify-between flex-grow p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {val.attributes.title_fi}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {val.attributes.description_fi ? val.attributes.description_fi : ''}
                  </p>
                </div>
              </div>
            </Link>
            )
          }  else if ( lang == 'sv' ) {
            return (
              <Link href={`/${lang}/blogs/${val.attributes.urlSlug_sv}`} className="flex flex-col overflow-hidden rounded-lg hover:shadow-lg transform hover:scale-95 transition-all duration-200 ease-in-out" key={i}>
              <div className="flex flex-col justify-between flex-grow p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {val.attributes.title_sv}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {val.attributes.description_sv ? val.attributes.description_sv : ''}
                  </p>
                </div>
              </div>
            </Link>
            )
          }  else if ( lang == 'ja' ) {
            return (
              <Link href={`/${lang}/blogs/${val.attributes.urlSlug_jp}`} className="flex flex-col overflow-hidden rounded-lg hover:shadow-lg transform hover:scale-95 transition-all duration-200 ease-in-out" key={i}>
              <div className="flex flex-col justify-between flex-grow p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {val.attributes.title_jp}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {val.attributes.description_jp ? val.attributes.description_jp : ''}
                  </p>
                </div>
              </div>
            </Link>
            )
          }
        } ) }
      </section>
    </div>
    </>
    
  )
}
