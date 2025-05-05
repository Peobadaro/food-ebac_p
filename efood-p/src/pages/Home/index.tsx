import RestaurantList from '../../components/RestaurantList'
import { Restaurant } from '../../models'

const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    description: 'A autêntica cozinha italiana...',
    infos: ['Italiana'],
    rating: 4.6,
    image: '/images/massa.png'
  },
  {
    id: 2,
    title: 'Hioki Sushi',
    description: 'O melhor da culinária japonesa...',
    infos: ['Japonesa', 'Destaque da semana'],
    rating: 4.9,
    image: '/images/sushi.png'
  }
]

const Home = () => {
  return <RestaurantList restaurants={restaurants} />
}

export default Home
