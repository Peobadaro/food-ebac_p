import { Card, Title, Info, Description, Tag, Image } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}

const RestaurantCard = ({ title, description, infos, image }: Props) => (
  <Card>
    <Image style={{ backgroundImage: `url(${image})` }} />
    <Info>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Info>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
)

export default RestaurantCard
