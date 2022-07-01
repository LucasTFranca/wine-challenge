import React, { useEffect, useMemo, useState } from 'react'
import { getAllProducts } from 'service'
import { Product } from 'types'
import ProductContext from './ProductContext'

interface ProviderProps {
  children: React.ReactElement[];
}

function ProductProvider ({ children }: ProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [productsToShow, setProductsToShow] = useState<Product[]>([])

  useEffect(() => {
    async function loadProducts () {
      const { items } = await getAllProducts()

      setProducts(items)
    }

    loadProducts()
  }, [])

  const state = useMemo(() => ({ products, productsToShow, setProductsToShow }), [products, productsToShow])

  return (
    <ProductContext.Provider value={state}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
