import React from 'react'
import * as C from './styles'
import { GetStaticProps } from 'next'
import { createClient } from '../../services/prismicio'
import * as prismicR from '@prismicio/richtext'
import Head from 'next/head'
import {FaYoutube,FaInstagram,FaLinkedin } from 'react-icons/fa'


type Props = {
  about:{
    title: string,
    description:string,
    banner:string,
    linkedin:string,
    youtube:string,
    instagram:string
  }
}

const sobre = ({about}:Props) => {
  
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>
      <C.container>
        <div className="containerHeader">
          <C.ctaText>
            <h1>{about.title}</h1>
            <p>{about.description}</p>
            <a href={about.youtube} target="_blank" rel="noopener noreferrer">
              <FaYoutube size={40} />
            </a>
            <a href={about.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} />
            </a>
            <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} />
            </a>
          </C.ctaText>
          <img src={about.banner} alt="Sobre Fundação Dev" />
        </div>
      </C.container>
    </>
  )
}

export default sobre

export const getStaticProps: GetStaticProps = async({previewData})=>{
  const client = createClient({ previewData })
  const response = await client.getSingle('about')

  const {
    title,
    description,
    banner,
    linkedin,
    instagram,
    youtube
  } = response.data
  const about = {
    title: prismicR.asText(title),
    description:prismicR.asText(description),
    banner:banner.url,
    linkedin:linkedin.url,
    youtube:youtube.url,
    instagram:instagram.url
  }
  return{
    props:{
      about
    }
  }
}