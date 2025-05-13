import Rotas from './routes'
import GlobalStyles from './styles/GlobalStyles'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <GlobalStyles />
      <Cart /> {/* Carrinho sempre visível */}
      <Rotas />
    </>
  )
}

export default App
