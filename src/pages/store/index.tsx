import Header from 'components/Header'
import PriceFilter from 'components/PriceFilter'
import ProductList from 'components/ProductList'

import { Section, Div } from './style'

export default function Store () {
  return (
    <>
      <Header />
      <Section>
        <Div>
          <PriceFilter />
          <ProductList />
        </Div>
      </Section>
    </>
  )
}
