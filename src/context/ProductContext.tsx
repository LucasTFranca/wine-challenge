import { createContext } from 'react'
import { Product } from 'types'

interface ProviderState {
  products: Product[];
  productsToShow: Product[];
  setProductsToShow(value: Product[]): void;
}

const ProductContext = createContext({} as ProviderState)

export default ProductContext
