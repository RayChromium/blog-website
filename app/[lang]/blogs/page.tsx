import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_ALL_POSTS } from '@/graphql/queries'
import Link from 'next/link'

type postCardContent = { 
  attributes:{
     description_en: string, 
     title_en: string, 
     urlSlug_en: string,
     description_zh: string, 
     title_zh: string, 
     urlSlug_zh: string,
    } 
}

export default async function Blogs({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  const client = new ApolloClient({
    uri:"http://192.168.56.1:1337/graphql",
    cache: new InMemoryCache(),
  });
  const {data} = await client.query( {
    query: GET_ALL_POSTS
  } );
  console.log('Home data:',data.blogs.data);

  return (
    <div className='container'>
      <h1 className='text-3xl font-bold'>{page.blogs.title}</h1>
      <p className='text-gray-500'>{page.blogs.description}</p>
      <section className='container'>
        { data.blogs.data.map( ( val: postCardContent, i: number ) => {
          if ( lang === 'en' ) {
            return (
              <Link href={`/${lang}/blogs/${val.attributes.urlSlug_en}`} key={i}>
                <div>
                  <h3>{val.attributes.title_en}</h3>
                  <p>{val.attributes.description_en? val.attributes.description_en : ''}</p>
                </div>
              </Link>
              
            )
          } else if ( lang == 'zh' ) {
            return (
              <Link href={`/${lang}/blogs/${val.attributes.urlSlug_zh}`} key={i}>
                <div >
                  <h3>{val.attributes.title_zh}</h3>
                  <p>{val.attributes.description_en? val.attributes.description_en : ''}</p>
                </div>
              </Link>
            )
          }
        } ) }
      </section>
    </div>
  )
}
