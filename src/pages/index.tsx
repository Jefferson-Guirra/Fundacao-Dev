import * as C from '../styles/home'
import Head from 'next/head'
import Image from 'next/image'
import techImage from '../../public/images/techs.svg'
export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>
      <C.container>
        <div className="containerHeader">
          <section className="ctaText">
            <h1>Levando você ao próximo nível!</h1>
            <span>
              Uma plataforma com cursos que vão do zero ate o profissional na
              pratica, direto ao ponto aplicando o que usamos no mercado de
              trabalho.
            </span>
            <a>
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
            <h2>Aprenda a criar aplicativos para Android e IOS</h2>
            <span>
              Você vai descobrir o jeito mais moderno de desenvolver apps,
              nativos para IOS e Androis, construindo do zero até a aplicação.
            </span>
          </section>
          <img
            src="/images/financasApp.png"
            alt="conteúdos desenvolvimento de apps"
          />
        </C.sectionContent>

        <C.divisor></C.divisor>

        <C.sectionContent>
          <img
            src="/images/webDev.png"
            alt="conteúdos desenvolvimento de aplicações web"
          />
          <section>
            <h2>Aprenda a criar sistemas web</h2>
            <span>
              Criar sitemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.
            </span>
          </section>
        </C.sectionContent>

        <C.nextLevelContent>
          <Image quality={100} src={ techImage } alt="tecnologias"/>
          <h2>Mais de <span className='alunos'>15 mil</span> já levaram sua carreira ao próximo nivel.</h2>
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
