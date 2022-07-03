import ProductContext from 'context/ProductContext'
import { useContext } from 'react'
import { Product } from 'types'
import { Card, ImageStyled, Container, Name, PriceNonMember, Button } from './style'

interface ICartCardProps {
  product: Product;
}

export default function CartCard ({ product }: ICartCardProps) {
  const { productsInCart, updateCart } = useContext(ProductContext)

  function removeFromCart () {
    const updatedCart = productsInCart.filter(({ id }) => id !== product.id)

    localStorage.cart = JSON.stringify(updatedCart)
    updateCart(updatedCart)
  }

  return (
    <Card>
      <ImageStyled src={product.image} alt={product.name} width={100} height={100} />
      <Container>
        <Name>{product.name}</Name>
        <PriceNonMember>{`R$ ${product.priceNonMember}`}</PriceNonMember>
      </Container>
      <Button onClick={removeFromCart}>x</Button>
    </Card>
  )
}
