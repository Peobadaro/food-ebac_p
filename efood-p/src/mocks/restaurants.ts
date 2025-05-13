import { Restaurant } from '../models/restaurant'

const restaurants: Restaurant[] = [
  {
    id: 1,
    image: '/images/hioki.png',
    title: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa...',
    category: 'Japonesa',
    rating: 4.9,
    products: []
  },
  {
    id: 2,
    image: '/images/la-dolce.png',
    title: 'La Dolce Vita Trattoria',
    description: 'A autêntica cozinha italiana até você!',
    category: 'Italiana',
    rating: 4.6,
    products: []
  }
]

export default restaurants
