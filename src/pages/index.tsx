import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

import Image from "next/image";

import shirt1 from '../assets/shirts/1.png';
import shirt2 from '../assets/shirts/2.png';
import shirt3 from '../assets/shirts/3.png';
import shirt4 from '../assets/shirts/4.png';
import { HomeContainer, Product } from "../styles/pages/home";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt2} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt4} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
