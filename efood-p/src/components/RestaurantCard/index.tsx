
import { Restaurant } from '../../models'
import { Card, Image, Infos, Title, Description, Rating } from './styles'
import Tag from '../Tag'

type Props = Restaurant

const RestaurantCard = ({ title, description, infos, rating, image }: Props) => (
  <Card>
    <Image style={{ backgroundImage: `url(${image})` }}>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
    </Image>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Rating>{rating.toFixed(1)} ★</Rating>
  </Card>
)

export default RestaurantCard
