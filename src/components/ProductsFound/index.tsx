import ProductContext from 'context/ProductContext'
import { useContext } from 'react'

import { Section, Span, SpanProductFound } from './style'

export default function ProductsFound () {
  const { productsFound } = useContext(ProductContext)

  return (
    <Section>
      <SpanProductFound>{productsFound}</SpanProductFound>
      <Span>produtos encontrados</Span>
    </Section>
  )
}
