
import { useRouter } from "next/router"

import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer />

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus, at doloremque quo pariatur aliquid expedita provident sunt reiciendis mollitia perferendis, dolorum neque cupiditate architecto quae officiis, eos itaque voluptatem?</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}