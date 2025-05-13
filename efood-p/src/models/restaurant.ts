export type Product = {
    id: number
    image: string
    title: string
    description: string
    price: number
    category: string
  }
  
  export type Restaurant = {
    id: number
    image: string
    title: string
    description: string
    category: string
    rating: number
    products: Product[]
  }
  