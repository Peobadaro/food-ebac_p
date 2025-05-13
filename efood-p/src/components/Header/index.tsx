import { HeaderBar, Logo, BackLink } from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderBar>
      <Link to="/">
        <Logo>EFOOD</Logo>
      </Link>
      <BackLink to="/perfil">Perfil</BackLink>
    </HeaderBar>
  )
}

export default Header
