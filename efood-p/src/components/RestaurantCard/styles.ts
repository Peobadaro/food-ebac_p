import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`

export const Image = styled.div`
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`

export const Info = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  background-color: #e66767;
  color: #fff;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
`

export const Title = styled.h2`
  margin-top: 12px;
  font-size: 20px;
  color: #e66767;
`

export const Description = styled.p`
  margin-top: 8px;
  color: #555;
  font-size: 14px;
`
---

### 🧱 Agora no `Home/index.tsx`:

```tsx
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <RestaurantCard
          title="La Pasta"
          description="Deliciosas massas artesanais direto da Itália"
          infos={['Italiana', 'Massas']}
          image="/assets/restaurant-1.jpg"
        />
        {/* Adicione mais cards conforme necessário */}
      </div>
    </>
  )
}

export default Home
