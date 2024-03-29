import { GetServerSideProps } from "next";
import Stripe from "stripe";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { stripe } from "../../lib/stripe";
import { SuccessContainer, ImageContainer } from "../../styles/pages/success";

interface SuccessProps {
  customesName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ customesName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageContainer>
          <Image src={product.imageUrl} width={120} height={110} alt="" />
        </ImageContainer>

        <p>Uhull <strong>{customesName}</strong>, sua camiseta <strong>{product.name}</strong> já está a caminho da sua casa.</p>

        <Link href="/">Voltar ao catalogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product']
  });

  const customesName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return {
      props: {
          customesName,
          product: {
              name: product.name,
              imageUrl: product.images[0],
          }
      }
  }
}