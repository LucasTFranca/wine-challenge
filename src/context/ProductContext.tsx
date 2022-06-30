import { createContext } from 'react'
import { Product } from 'types'

interface ProviderState {
  products: Product[];
}

const ProductContext = createContext({} as ProviderState)

export default ProductContext
