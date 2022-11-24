import * as C from './styles'
import Image from 'next/image'
import logo from '../../../public/images/foundation.svg'
import Link from 'next/link'
import {ActiveLink} from '../ActiveLink'

export const Header = () => {
  return (
    <C.headerContainer>
      <div className="headerContent">
        <Link className='logo' href="/">
          <Image src={logo} width={100} height={72} alt="Sujeito Programador Logo" />
            <p>Fundação <span>Dev</span></p>
          
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

