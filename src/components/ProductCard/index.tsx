import ProductContext from 'context/ProductContext'
import { useContext } from 'react'
import { Product } from 'types'

import {
  Div,
  Card,
  Button,
  ImageStyled,
  Name,
  Price,
  Discount,
  DiscountContainer,
  PriceMember,
  SpanPriceMember,
  PriceNonMember,
  PriceNonMemberContainer
} from './style'

interface IProductCardProps {
  product: Product
}

export default function ProductCard ({ product }: IProductCardProps) {
  const { updateCart } = useContext(ProductContext)

  function addToCart () {
    const productsInCart = JSON.parse(localStorage.cart)

    const productInCart = productsInCart.find(({ id }: { id: number }) => id === product.id)

    if (productInCart) {
      const productsToFillCart = productsInCart.filter(({ id }: { id: number }) => id !== product.id)
      const arrayCart = [...productsToFillCart, { ...productInCart, quantity: productInCart.quantity += 1 }]

      localStorage.cart = JSON.stringify(arrayCart)
      updateCart(arrayCart)
    } else {
      const arrayCart = [...productsInCart, { ...product, quantity: 1 }]

      localStorage.cart = JSON.stringify(arrayCart)
      updateCart(arrayCart)
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
