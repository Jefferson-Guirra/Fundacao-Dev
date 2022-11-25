import * as C from '../styles/home'
import * as prismicR from '@prismicio/richtext'
import Head from 'next/head'
import Image from 'next/image'
import techImage from '../../public/images/techs.svg'
import { GetStaticProps } from 'next'
import { createClient } from '../services/prismicio'




type Props = {
    content : {
    title: string,
    titleContent: string,
    linkAction: string,
    mobileTitle: string,
    mobileContent: string,
    mobileBanner: string,
    webTitle: string,
    webContent: string,
    webBanner: string
  }
}

export default function Home({content}:Props) {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>
      <C.container>
        <div className="containerHeader">
          <section className="ctaText">
            <h1>{content.title}</h1>
            <span>
              {content.titleContent}
            </span>
            <a href={content.linkAction} >
              <button>COMEÇAR AGORA!</button>
            </a>
          </section>
          <img
            src="/images/banner-conteudos.png"
            alt="Conteúdos Sujeito Programador"
          />
        </div>
        <C.divisor></C.divisor>

        <C.sectionContent>
          <section>
            <h2>{content.mobileTitle}</h2>
            <span>
              {content.mobileContent}
            </span>
          </section>
          <img
            src={content.mobileBanner}
            alt="conteúdos desenvolvimento de apps"
          />
        </C.sectionContent>

        <C.divisor></C.divisor>

        <C.sectionContent>
          <img
            src={content.webBanner}
            alt="conteúdos desenvolvimento de aplicações web"
          />
          <section>
            <h2>{content.webTitle}</h2>
            <span>
              {content.webContent}
            </span>
          </section>
        </C.sectionContent>

        <C.nextLevelContent>
          <Image quality={100} src={techImage} alt="tecnologias" />
          <h2>
            Mais de <span className="alunos">15 mil</span> já levaram sua
            carreira ao próximo nivel.
          </h2>
          <span>
            E você vai perder a chance de evoluir de uma vez por todas?
          </span>
          <a href="#">
            <button>ACESSAR TURMA!</button>
          </a>
        </C.nextLevelContent>
      </C.container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })
  const page = await client.getSingle('home')
  const {title,sub_title,link_action,mobile,mobile_content,mobile_banner,title_web,web_content,web_banner} = page.data
  
  const content = {
    title: prismicR.asText(title),
    titleContent: prismicR.asText(sub_title),
    linkAction: link_action.url,
    mobileTitle: prismicR.asText(mobile),
    mobileContent: prismicR.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: prismicR.asText(title_web),
    webContent: prismicR.asText(web_content),
    webBanner: web_banner.url
  }
  

  return {
    props: {
      content
    },
    revalidate: 60 * 5
  }
}
