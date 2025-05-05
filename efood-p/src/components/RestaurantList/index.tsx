import RestaurantCard from '../RestaurantCard'
import { Restaurant } from '../../models'
import { List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
      <RestaurantCard key={restaurant.id} {...restaurant} />
    ))}
  </List>
)

export default RestaurantList
