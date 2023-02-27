import Image from "next/image";
import Link from "next/link";
import { SuccessContainer, ImageContainer } from "../../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>
        {/* <Image /> */}
      </ImageContainer>

      <p>Uhull <strong>Luis</strong>, sua camiseta <strong>teste</strong> já está a caminho da sua casa.</p>

      <Link href="/">Voltar ao catalogo</Link>
    </SuccessContainer>
  )
}