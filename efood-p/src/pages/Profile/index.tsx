// src/pages/Profile/index.tsx

import ProductList from '../../components/ProductList'
import ProductCard from '../../components/ProductCard'
import { useParams } from 'react-router-dom'

const products = [
  {
    id: 1,
    title: 'Pizza Margherita',
    description:
      'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    image: '/src/images/pizza-margherita.png',
    price: 60.9,
    tags: ['Pizza', 'Italiana']
  },
  {
    id: 2,
    title: 'Pizza Margherita',
    description:
      'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    image: '/src/images/pizza-margherita.png',
    price: 60.9,
    tags: ['Pizza', 'Italiana']
  }
]

const Profile = () => {
  const { id } = useParams()

  return (
    <div className="container">
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            tags={product.tags}
          />
        ))}
      </ProductList>
    </div>
  )
}

export default Profile
