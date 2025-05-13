import { TagContainer, Card, Image, Infos, Title, Description, Rating } from './styles'

type Props = {
  title: string
  description: string
  image: string
  category: string
  rating: number
}

const RestaurantCard = ({ title, description, image, category, rating }: Props) => (
  <Card>
    <Image style={{ backgroundImage: `url(${image})` }}>
      <TagContainer>{category}</TagContainer>
    </Image>
    <Infos>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Rating>⭐ {rating.toFixed(1)}</Rating>
    </Infos>
  </Card>
)

export default RestaurantCard
