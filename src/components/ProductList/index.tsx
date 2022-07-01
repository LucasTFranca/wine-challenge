import ProductCard from 'components/ProductCard'
import ProductContext from 'context/ProductContext'
import { useContext } from 'react'
import { Product } from 'types'

import { Section } from './ProductList'

export default function ProductList () {
  const { products } = useContext(ProductContext)

  return (
    <Section>
      {
        products.map((product: Product) => <ProductCard key={`${product.name}-${product.id}`} product={product} />)
      }
    </Section>
  )
}
