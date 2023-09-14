import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { 
  GET_ALL_POSTS, 
  GET_ALL_SLUGS, 
  GET_INFIVIDUAL_POST_EN,
  GET_INFIVIDUAL_POST_ZH,
  GET_INFIVIDUAL_POST_NO,
  GET_INFIVIDUAL_POST_AR,
  GET_INFIVIDUAL_POST_ESP,
  GET_INFIVIDUAL_POST_FI,
  GET_INFIVIDUAL_POST_SV,
  GET_INFIVIDUAL_POST_JP 
} from '@/graphql/queries'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import LocaleSwitcher from '../../components/locale-switcher'

type individualPostContent = { 
  attributes:{
    title_zh    :string,
    urlSlug_zh  :string,
    content_cn  :string,
  
    urlSlug_en  :string,
    title_en    :string,
    content_en  :string,
  
    urlSlug_no  :string,
    title_no    :string,
    content_no  :string,
  
    title_ar    :string,
    urlSlug_ar  :string,
    content_ar  :string,
  
    urlSlug_es  :string,
    title_esp   :string,
    content_es  :string,
  
    urlSlug_fi  :string,
    title_fi    :string,
    content_fi  :string,
  
    urlSlug_sv  :string,
    title_sv    :string,
    content_sv  :string,
  
    urlSlug_jp  :string,
    title_jp    :string,
    content_jp  :string,
    } 
}

export default async function Blogs({
  params: { lang, urlSlug }
}: {
  params: { lang: Locale, urlSlug: string }
}) {
  const { page } = await getDictionary(lang)
  console.log(urlSlug)
  console.log(decodeURIComponent(urlSlug));
  const client = new ApolloClient({
    uri:"http://192.168.56.1:1337/graphql",
    cache: new InMemoryCache(),
  });

  let queryLocale = GET_INFIVIDUAL_POST_EN;
  if( lang === 'zh' ) {
    queryLocale = GET_INFIVIDUAL_POST_ZH;
    urlSlug = decodeURIComponent(urlSlug);
  } 
  // else if( lang === 'no' ) {
  //   queryLocale = GET_INFIVIDUAL_POST_NO;
  // } else if( lang === 'ar' ) {
  //   queryLocale = GET_INFIVIDUAL_POST_NO;
  // } else if( lang === 'es' ) {
  //   queryLocale = GET_INFIVIDUAL_POST_NO;
  // } else if( lang === 'fi' ) {
  //   queryLocale = GET_INFIVIDUAL_POST_NO;
  // } else if( lang === 'sv' ) {
  //   queryLocale = GET_INFIVIDUAL_POST_NO;
  // } else if( lang === 'jp' ) {
  //   queryLocale = GET_INFIVIDUAL_POST_NO;
  // } 

  const {data} = await client.query( {
    query: queryLocale,
    variables: { slugUrl: urlSlug }
  } );
  console.log('individual post data:',data.blogs.data);
  const blogAttr = data.blogs.data[0]?.attributes;

  const targetSlugs = {
    urlSlug_zh  :blogAttr.urlSlug_zh,
    urlSlug_en  :blogAttr.urlSlug_en,
    urlSlug_no  :blogAttr.urlSlug_no,
    urlSlug_ar  :blogAttr.urlSlug_ar,
    urlSlug_es  :blogAttr.urlSlug_es,
    urlSlug_fi  :blogAttr.urlSlug_fi,
    urlSlug_sv  :blogAttr.urlSlug_sv,
    urlSlug_jp  :blogAttr.urlSlug_jp,
  }

  if( lang === 'zh' ) {
    return (
    <>
    <LocaleSwitcher urlSlugs={targetSlugs} />
      <div className='container'>
        <h1 className='text-3xl font-bold'>{blogAttr?.title_zh}</h1>
        <p className='text-gray-500'>{blogAttr?.content_cn}</p>
      </div>
    </>
    )
  } else if ( lang === 'en' ) {
    return (
      <>
        <LocaleSwitcher urlSlugs={targetSlugs} />
        <div className='container'>
          <h1 className='text-3xl font-bold'>{blogAttr?.title_en}</h1>
          <p className='text-gray-500'>{blogAttr?.content_en}</p>
        </div>
      </>
      
    )
  }
  
}
