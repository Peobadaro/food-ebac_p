import ProductCard from '../ProductCard'
import { Product } from '../../models'
import { List } from './styles'

type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => (
  <List>
    {products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </List>
)

export default ProductList
