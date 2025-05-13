import RestaurantCard from '../../components/RestaurantCard'
import RestaurantList from '../../components/RestaurantList'

const restaurants = [
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
    image: '/src/images/restaurant-italiano.png',
    category: 'Italiana',
    rating: 4.6,
    products: [],
    infos: ['Italiana', '4.6']
  },
  {
    id: 2,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.',
    image: '/src/images/restaurant-japonesa.png',
    category: 'Japonesa',
    rating: 4.9,
    products: [],
    infos: ['Japonesa', '4.9']
  }
]

const Home = () => (
  <div className="container">
    <RestaurantList restaurants={restaurants} />
  </div>
)

export default Home
  