import { createContext, SetStateAction, Dispatch } from 'react'
import { Page, Product } from 'types'

interface ProviderState {
  products: Product[];
  filteredProducts: Product[];
  productsToShow: Product[];
  productsFound: number;
  productsInCart: Product[];
  page: Page;
  setFilteredProducts(value: Product[]): void;
  setPage: Dispatch<SetStateAction<Page>>;
  updateCart(value: Product[]): void;
}

const ProductContext = createContext({} as ProviderState)

export default ProductContext
