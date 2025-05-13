import { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import { CartButton, CartBox } from './styles'

const Cart = () => {
  const { items } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <CartButton onClick={() => setIsOpen(!isOpen)}>
        🛒 ({items.length})
      </CartButton>
      {isOpen && (
        <CartBox>
          <h4>Itens no carrinho:</h4>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item.name} - R$ {item.price.toFixed(2)}</li>
            ))}
          </ul>
        </CartBox>
      )}
    </>
  )
}

export default Cart
