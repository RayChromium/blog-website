import { gql } from '@apollo/client';

const GET_ALL_POSTS = gql`
query {
    blogs {
        data{
            attributes{
              title_zh
              description_zh
              urlSlug_zh
            
              title_en
              description_en
              urlSlug_en
            
              title_no
              description_no
              urlSlug_no
            
              title_ar
              description_ar
              urlSlug_ar
            
              title_esp
              description_esp
              urlSlug_esp
            
              title_fi
              description_fi
              urlSlug_fi
            
              title_sv
              description_sv
              urlSlug_sv
            
              title_jp
              description_jp
              urlSlug_jp
            }
        }
    }
}
`

const GET_ALL_SLUGS = gql`
query {
    blogs {
        data{
            attributes{
              urlSlug_zh
            
              urlSlug_en
            
              urlSlug_no
            
              urlSlug_ar
            
              urlSlug_esp
            
              urlSlug_fi
            
              urlSlug_sv
            
              urlSlug_jp
            }
        }
    }
}`

const GET_INFIVIDUAL_POST_EN = gql`
query($slugUrl: String!) {
    blogs (filters: { urlSlug_en: {eq: $slugUrl}}) {
        data{
            attributes{
              title_zh
              urlSlug_zh
              content_cn
            
              urlSlug_en
              title_en
              content_en
            
              urlSlug_no
              title_no
              content_no
            
              title_ar
              urlSlug_ar
              content_ar
            
              urlSlug_esp
              title_esp
              content_esp
            
              urlSlug_fi
              title_fi
              content_fi
            
              urlSlug_sv
              title_sv
              content_sv
            
              urlSlug_jp
              title_jp
              content_jp
            }
        }
    }
}
`
const GET_INFIVIDUAL_POST_ZH = gql`
query($slugUrl: String!) {
    blogs (filters: { urlSlug_zh: {eq: $slugUrl}}) {
        data{
            attributes{
              title_zh
              urlSlug_zh
              content_cn
            
              urlSlug_en
              title_en
              content_en
            
              urlSlug_no
              title_no
              content_no
            
              title_ar
              urlSlug_ar
              content_ar
            
              urlSlug_esp
              title_esp
              content_esp
            
              urlSlug_fi
              title_fi
              content_fi
            
              urlSlug_sv
              title_sv
              content_sv
            
              urlSlug_jp
              title_jp
              content_jp
            }
        }
    }
}
`
const GET_INFIVIDUAL_POST_NO = gql`
query($slugUrl: String!) {
    blogs (filters: { urlSlug_no: {eq: $slugUrl}}) {
        data{
            attributes{
              title_zh
              urlSlug_zh
              content_cn
            
              urlSlug_en
              title_en
              content_en
            
              urlSlug_no
              title_no
              content_no
            
              title_ar
              urlSlug_ar
              content_ar
            
              urlSlug_esp
              title_esp
              content_esp
            
              urlSlug_fi
              title_fi
              content_fi
            
              urlSlug_sv
              title_sv
              content_sv
            
              urlSlug_jp
              title_jp
              content_jp
            }
        }
    }
}
`
const GET_INFIVIDUAL_POST_AR = gql`
query($slugUrl: String!) {
    blogs (filters: { urlSlug_ar: {eq: $slugUrl}}) {
        data{
            attributes{
              title_zh
              urlSlug_zh
              content_cn
            
              urlSlug_en
              title_en
              content_en
            
              urlSlug_no
              title_no
              content_no
            
              title_ar
              urlSlug_ar
              content_ar
            
              urlSlug_esp
              title_esp
              content_esp
            
              urlSlug_fi
              title_fi
              content_fi
            
              urlSlug_sv
              title_sv
              content_sv
            
              urlSlug_jp
              title_jp
              content_jp
            }
        }
    }
}
`
const GET_INFIVIDUAL_POST_ESP = gql`
query($slugUrl: String!) {
    blogs (filters: { urlSlug_esp: {eq: $slugUrl}}) {
        data{
            attributes{
              title_zh
              urlSlug_zh
              content_cn
            
              urlSlug_en
              title_en
              content_en
            
              urlSlug_no
              title_no
              content_no
            
              title_ar
              urlSlug_ar
              content_ar
            
              urlSlug_esp
              title_esp
              content_esp
            
              urlSlug_fi
              title_fi
              content_fi
            
              urlSlug_sv
              title_sv
              content_sv
            
              urlSlug_jp
              title_jp
              content_jp
            }
        }
    }
}
`
const GET_INFIVIDUAL_POST_FI = gql`
query($slugUrl: String!) {
    blogs (filters: { urlSlug_fi: {eq: $slugUrl}}) {
        data{
            attributes{
              title_zh
              urlSlug_zh
              content_cn
            
              urlSlug_en
              title_en
              content_en
            
              urlSlug_no
              title_no
              content_no
            
              title_ar
              urlSlug_ar
              content_ar
            
              urlSlug_esp
              title_esp
              content_esp
            
              urlSlug_fi
              title_fi
              content_fi
            
              urlSlug_sv
              title_sv
              content_sv
            
              urlSlug_jp
              title_jp
              content_jp
            }
        }
    }
}
`
const GET_INFIVIDUAL_POST_SV = gql`
query($slugUrl: String!) {
    blogs (filters: { urlSlug_sv: {eq: $slugUrl}}) {
        data{
            attributes{
              title_zh
              urlSlug_zh
              content_cn
            
              urlSlug_en
              title_en
              content_en
            
              urlSlug_no
              title_no
              content_no
            
              title_ar
              urlSlug_ar
              content_ar
            
              urlSlug_esp
              title_esp
              content_esp
            
              urlSlug_fi
              title_fi
              content_fi
            
              urlSlug_sv
              title_sv
              content_sv
            
              urlSlug_jp
              title_jp
              content_jp
            }
        }
    }
}
`
const GET_INFIVIDUAL_POST_JP = gql`
query($slugUrl: String!) {
    blogs (filters: { urlSlug_jp: {eq: $slugUrl}}) {
        data{
            attributes{
              title_zh
              urlSlug_zh
              content_cn
            
              urlSlug_en
              title_en
              content_en
            
              urlSlug_no
              title_no
              content_no
            
              title_ar
              urlSlug_ar
              content_ar
            
              urlSlug_esp
              title_esp
              content_esp
            
              urlSlug_fi
              title_fi
              content_fi
            
              urlSlug_sv
              title_sv
              content_sv
            
              urlSlug_jp
              title_jp
              content_jp
            }
        }
    }
}
`

export { 
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
}