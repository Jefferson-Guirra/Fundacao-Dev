import * as C from './styles'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import Link from 'next/link'
import {ActiveLink} from '../ActiveLink'

export const Header = () => {
  return (
    <C.headerContainer>
      <div className="headerContent">
        <Link href="/">
          <Image src={logo} alt="Sujeito Programador Logo" />
        </Link>
        <nav>
          <ActiveLink activeClassName='active'  href="/">Home</ActiveLink>
          <ActiveLink activeClassName='active' href="/posts">Conteúdos</ActiveLink>
          <ActiveLink activeClassName='active' href="/sobre">Sobre</ActiveLink>
        </nav>
        <a className='readyButton' type='button' href="https://sujeitoprogramador.com">COMEÇAR</a>
      </div>
    </C.headerContainer>
  )
}

