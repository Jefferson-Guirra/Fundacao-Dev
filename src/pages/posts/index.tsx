import thumbImg from '../../../public/images/thumb.png'
import * as C from './styles'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import * as prismicR from '@prismicio/richtext'
import {
  FiChevronLeft,
  FiChevronsLeft,
  FiChevronRight,
  FiChevronsRight
} from 'react-icons/fi'
import { GetStaticProps } from 'next'
import { createClient } from '../../services/prismicio'

type Posts = {
  slug: string | null
  title: string
  description: string
  updatedAt: string
  cover: {
    dimensions: number[]
    alt: string
    copyright: string | null
    url: string
  }
}
type Props = {
  postsBlog: Posts[]
  page: number
  totalPage: number
}

const Posts = ({ postsBlog, page, totalPage }: Props) => {
  const [posts, setPosts] = useState(postsBlog || [])
  const [currentPage, setCurrentPage] = useState(page)
  
  async function reqPost (pageNumber:number){
    const client = createClient()
    const response = await client.getByType('post', {
      fetch: ['post.title', 'post.description,post.cover'],
      pageSize: 3,
      page:pageNumber
    })
    return response
  }
 
  const navigatePage = async (pageNumber:number)=>{
    const response = await reqPost(pageNumber)
    if(response.results.length === 0){
      return
    }

      const getPosts  = response.results.map(post => {
        return {
          slug: post.uid,
          title: prismicR.asText(post.data.title),
          description:
            post.data.description.find(
              (content: any) => content.type === 'paragraph'
            )?.text ?? '',
          cover: post.data.cover,
          updatedAt: new Date(post.last_publication_date).toLocaleDateString(
            'pt-BR',
            {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            }
          )
        }
      }) 
    setPosts(getPosts)
    setCurrentPage(pageNumber)
  }
  return (
    <>
      <Head>
        <title>Blog | Diário da Programação</title>
      </Head>
      <C.container>
        <div className="posts">
          {posts.map(post => (
            <Link key={post.title} href={`/posts/${post.slug}`}>
              <Image
                src={post.cover.url}
                alt={post.cover.alt}
                width={720}
                height={410}
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0NTXfDgACogFakP/skwAAAABJRU5ErkJggg=="
              />
              <strong>{post.title}</strong>
              <time>{post.updatedAt}</time>
              <p>{post.description}</p>
            </Link>
          ))}
          <div className="buttonsNavigate">
            {Number(currentPage) >= 2 && (
              <div>
                <button onClick={() => navigatePage(1)}>
                  <FiChevronsLeft size={25} color="#FFF" />
                </button>
                <button onClick={() => navigatePage(Number(currentPage - 1))}>
                  <FiChevronLeft size={25} color="#FFF" />
                </button>
              </div>
            )}

            {Number(currentPage) < Number(totalPage) && (
              <div>
                <button onClick={() => navigatePage(Number(currentPage + 1))}>
                  <FiChevronRight size={25} color="#FFF" />
                </button>
                <button onClick={() => navigatePage(Number(totalPage))}>
                  <FiChevronsRight size={25} color="#FFF" />
                </button>
              </div>
            )}
          </div>
        </div>
      </C.container>
    </>
  )
}

export default Posts

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })
  const pages = await client.getByType('post', {
    fetch: ['post.title', 'post.description,post.cover'],
    pageSize: 3
  })
  const postsBlog = pages.results.map(post => {
    return {
      slug: post.uid,
      title: prismicR.asText(post.data.title),
      description:
        post.data.description.find(
          (content: any) => content.type === 'paragraph'
        )?.text ?? '',
      cover: post.data.cover,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }
      )
    }
  })
  return {
    props: {
      page: pages.page,
      totalPage: pages.total_pages,
      postsBlog
    },
    revalidate: 60 * 30 // Atualiza a cada 30 minutos
  }
}
