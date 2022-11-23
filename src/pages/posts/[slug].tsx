import { GetServerSideProps } from 'next'
import { createClient } from '../../services/prismicio'
import * as prismicR from '@prismicio/richtext'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import * as C from './post'
import Image from 'next/image'
import React from 'react'

type Params={
slug:string
}
type PropsPost = {
  post:{
  slug: string,
  title: string,
  description: string,
  cover: string,
  updatedAt: string
  }
}
export  const Post= ({post}:PropsPost) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <C.container>
        <C.post>
          <Image
            src={post.cover}
            alt={post.title}
            quality={100}
            width={720}
            height={410}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0NTXfDgACogFakP/skwAAAABJRU5ErkJggg=="
          />
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div className='postContent' dangerouslySetInnerHTML={{__html:post.description}}></div>
        </C.post>
      </C.container>
    </>
  )
}

export default Post

export const getServerSideProps : GetServerSideProps = async ({params,previewData})=>{
  const client = createClient({ previewData })
  const { slug } = params as Params 
  try{
    const response = await client.getByUID('post', slug)
    const post = {
      slug:slug,
      title:prismicR.asText(response.data.title),
      description: prismicH.asHTML(response.data.description),
      cover:response.data.cover.url,
      updatedAt: new Date(response.last_publication_date,).toLocaleDateString('pt-BR',{
        day:'2-digit',
        month:'long',
        year:'numeric'
      })
    }
    return{
      props:{
        post
      }
    }
    
  }catch(err){
    console.log(err)
    return{
      redirect:{
        destination:'/posts',
        permanent:false
      }
    }
  }
  

}
