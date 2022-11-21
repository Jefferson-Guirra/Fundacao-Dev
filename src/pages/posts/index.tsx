import thumbImg from '../../../public/images/thumb.png'
import * as C from './styles'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {FiChevronLeft,FiChevronsLeft,FiChevronRight,FiChevronsRight} from 'react-icons/fi'
const Posts = () => {
  return (
    <>
      <Head>
        <title>Blog | Diário da Programação</title>
      </Head>
      <C.container>
        <div className="posts">
          <Link href="/">
            <Image
              src={thumbImg}
              alt="Post título 1"
              width={720}
              height={410}
              quality={100}
            />
            <strong>Criando minha primeira aplicação</strong>
            <time>14 JULHO 2021</time>
            <p>
              Hoje vamos criar o controle de mostrar a senha no input, uma opção
              para os nossos formulários de cadastro e login. Mas chage de
              vonversa e bora pro código junto comigo que o vídeo está show de
              bola!
            </p>
          </Link>
          <div className="buttonsNavigate">
            <div>
              <button>
                <FiChevronsLeft size={25} color="#FFF" />
              </button>
              <button>
                <FiChevronLeft size={25} color="#FFF" />
              </button>
            </div>

            <div>
              <button>
                <FiChevronRight size={25} color ="#FFF" />
              </button>
              <button>
                <FiChevronsRight size={25} color="#FFF" />
              </button>
            </div>

          </div>
        </div>
      </C.container>
    </>
  )
}

export default Posts
