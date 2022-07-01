import ProductCard from 'components/ProductCard'
import ProductContext from 'context/ProductContext'
import { useContext } from 'react'
import { Product } from 'types'

import { Section } from './style'

export default function ProductList () {
  const { productsToShow } = useContext(ProductContext)

  return (
    <Section>
      {
        productsToShow.map((product: Product) => <ProductCard key={`${product.name}-${product.id}`} product={product} />)
      }
    </Section>
  )
}
