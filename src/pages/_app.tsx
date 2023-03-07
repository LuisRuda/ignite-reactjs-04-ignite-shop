import Image from 'next/image'
import type { AppProps } from 'next/app'

import logoImg from '../assets/logo.svg'
import cartImg from '../assets/cart.svg'
import { globalStyles } from '../styles/global'
import { Container, Header, CartButton } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Ignite Shop" />
        <CartButton>
          <div>
            <span className="cart-counter">1</span>
          </div>
          <Image src={cartImg} alt="Carrinho" />
        </CartButton>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
