import * as C from './styles'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import Link from 'next/link'

export const Header = () => {
  return (
    <C.headerContainer>
      <div className="headerContent">
        <Link href="/">
          <Image src={logo} alt="Sujeito Programador Logo" />
        </Link>
        <nav>
          <Link className='active' href="/">Home</Link>
          <Link href="/posts">Conteúdos</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>
        <a className='readyButton' type='button' href="https://sujeitoprogramador.com">COMEÇAR</a>
      </div>
    </C.headerContainer>
  )
}

