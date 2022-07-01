import { Product } from 'types'

import { Div, Card, Button, ImageStyled, Name, Price, Discount, DiscountContainer, PriceMember, SpanPriceMember, PriceNonMember, PriceNonMemberContainer } from './ProductCardStyle'

interface IProductCardProps {
  product: Product
}

export default function ProductCard ({ product }: IProductCardProps) {
  function addToCart () {
    if (!localStorage.cart) localStorage.cart = JSON.stringify([])
    const productsInCart = JSON.parse(localStorage.cart)

    const productInCart = productsInCart.find(({ id }: { id: number }) => id === product.id)

    if (productInCart) {
      const productsToFillCart = productsInCart.filter(({ id }: { id: number }) => id !== product.id)

      localStorage.cart = JSON.stringify([...productsToFillCart, { ...productInCart, quantity: productInCart.quantity += 1 }])
    } else {
      localStorage.cart = JSON.stringify([...productsInCart, { ...product, quantity: 1 }])
    }
  }

  return (
    <Div>
      <Card>
        <ImageStyled src={product.image} alt={product.name} width={200} height={500} />
        <Name>
          {product.name}
        </Name>

        <DiscountContainer>
          <Price>
            {`R$ ${product.price}`.replace('.', ',')}
          </Price>
          <Discount>
            {`${product.discount}% OFF`}
          </Discount>
        </DiscountContainer>

        <DiscountContainer>
          <SpanPriceMember>
            SÓCIO WINE
          </SpanPriceMember>
          <PriceMember>
            {`R$${product.priceMember}`.replace('.', ',')}
          </PriceMember>
        </DiscountContainer>

        <PriceNonMemberContainer>
          <PriceNonMember>
            {`NÃO SÓCIO R$ ${product.priceNonMember}`}
          </PriceNonMember>
        </PriceNonMemberContainer>
      </Card>

      <Button onClick={addToCart}>
        ADICIONAR
      </Button>
    </Div>
  )
}
