import Header from 'components/Header'
import Pagination from 'components/Pagination'
import PriceFilter from 'components/PriceFilter'
import ProductList from 'components/ProductList'
import ProductsFound from 'components/ProductsFound'

import { Section, Container, Div } from './style'

export default function Store () {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <PriceFilter />
          <Div>
            <ProductsFound />
            <ProductList />
            <Pagination />
          </Div>
        </Container>
      </Section>
    </>
  )
}
