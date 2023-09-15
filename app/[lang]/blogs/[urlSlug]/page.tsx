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
import { MDXRemote } from 'next-mdx-remote/rsc'

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
  
    urlSlug_esp :string,
    title_esp   :string,
    content_esp :string,
  
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
  const client = new ApolloClient({
    uri:"http://192.168.56.1:1337/graphql",
    cache: new InMemoryCache(),
  });

  let queryLocale = GET_INFIVIDUAL_POST_EN;
  if( lang === 'zh' ) {
    queryLocale = GET_INFIVIDUAL_POST_ZH;
  } else if( lang === 'no' ) {
    queryLocale = GET_INFIVIDUAL_POST_NO;
  } else if( lang === 'ar' ) {
    queryLocale = GET_INFIVIDUAL_POST_AR;
  } else if( lang === 'es' ) {
    queryLocale = GET_INFIVIDUAL_POST_ESP;
  } else if( lang === 'fi' ) {
    queryLocale = GET_INFIVIDUAL_POST_FI;
  } else if( lang === 'sv' ) {
    queryLocale = GET_INFIVIDUAL_POST_SV;
  } else if( lang === 'ja' ) {
    queryLocale = GET_INFIVIDUAL_POST_JP;
  } 
  urlSlug = decodeURIComponent(urlSlug);

  const {data}  = await client.query( {
        query: queryLocale,
        variables: { slugUrl: urlSlug },
  });
  const blogAttr = data.blogs.data[0]?.attributes;

  const targetSlugs = {
    urlSlug_zh  :blogAttr?.urlSlug_zh,
    urlSlug_en  :blogAttr?.urlSlug_en,
    urlSlug_no  :blogAttr?.urlSlug_no,
    urlSlug_ar  :blogAttr?.urlSlug_ar,
    urlSlug_es  :blogAttr?.urlSlug_esp,
    urlSlug_fi  :blogAttr?.urlSlug_fi,
    urlSlug_sv  :blogAttr?.urlSlug_sv,
    urlSlug_jp  :blogAttr?.urlSlug_jp,
  }

  if( lang === 'zh' ) {
    return (
    <>
    <LocaleSwitcher urlSlugs={targetSlugs} />
      <div className='container'>
        <h1 className='text-3xl font-bold'>{blogAttr?.title_zh}</h1>
        <MDXRemote source={blogAttr?.content_cn}/>
      </div>
    </>
    )
  } else if ( lang === 'en' ) {
    return (
      <>
        <LocaleSwitcher urlSlugs={targetSlugs} />
        <div className='container'>
          <h1 className='text-3xl font-bold'>{blogAttr?.title_en}</h1>
          <MDXRemote source={blogAttr?.content_en}/>
        </div>
      </>
    )
  } else if ( lang === 'no' ) {
    return (
      <>
        <LocaleSwitcher urlSlugs={targetSlugs} />
        <div className='container'>
          <h1 className='text-3xl font-bold'>{blogAttr?.title_no}</h1>
          <MDXRemote source={blogAttr?.content_no}/>
        </div>
      </>
    )
  } else if ( lang === 'ar' ) {
    return (
      <>
        <LocaleSwitcher urlSlugs={targetSlugs} />
        <div className='container'>
          <h1 className='text-3xl font-bold'>{blogAttr?.title_ar}</h1>
          <MDXRemote source={blogAttr?.content_ar}/>
        </div>
      </>
    )
  } else if ( lang === 'es' ) {
    return (
      <>
        <LocaleSwitcher urlSlugs={targetSlugs} />
        <div className='container'>
          <h1 className='text-3xl font-bold'>{blogAttr?.title_esp}</h1>
          <MDXRemote source={blogAttr?.content_esp}/>
        </div>
      </>
    )
  } else if ( lang === 'fi' ) {
    return (
      <>
        <LocaleSwitcher urlSlugs={targetSlugs} />
        <div className='container'>
          <h1 className='text-3xl font-bold'>{blogAttr?.title_fi}</h1>
          <MDXRemote source={blogAttr?.content_fi}/>
        </div>
      </>
    )
  } else if ( lang === 'sv' ) {
    return (
      <>
        <LocaleSwitcher urlSlugs={targetSlugs} />
        <div className='container'>
          <h1 className='text-3xl font-bold'>{blogAttr?.title_sv}</h1>
          <MDXRemote source={blogAttr?.content_sv}/>
        </div>
      </>
    )
  } else if ( lang === 'ja' ) {
    return (
      <>
        <LocaleSwitcher urlSlugs={targetSlugs} />
        <div className='container'>
          <h1 className='text-3xl font-bold'>{blogAttr?.title_jp}</h1>
          <MDXRemote source={blogAttr?.content_jp}/>
        </div>
      </>
    )
  }
  
}
