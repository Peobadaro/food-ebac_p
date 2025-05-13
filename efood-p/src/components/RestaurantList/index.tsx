import { Restaurant } from '../../models/restaurant'
import RestaurantCard from '../RestaurantCard'
import { List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurante) => (
      <RestaurantCard
        key={restaurante.id}
        title={restaurante.title}
        description={restaurante.description}
        image={restaurante.image}
        category={restaurante.category}
        rating={restaurante.rating}
      />
    ))}
  </List>
)

export default RestaurantList
