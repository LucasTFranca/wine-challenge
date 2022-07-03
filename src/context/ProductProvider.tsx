import React, { useEffect, useMemo, useState } from 'react'
import { getAllProducts } from 'service'
import { Page, Product } from 'types'
import ProductContext from './ProductContext'

interface ProviderProps {
  children: React.ReactElement[];
}

function ProductProvider ({ children }: ProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [productsToShow, setProductsToShow] = useState<Product[]>([])
  const [page, setPage] = useState<Page>({ previous: 0, current: 0 })
  const [productsFound, setProductFound] = useState<number>(0)

  useEffect(() => {
    async function loadProducts () {
      const { items } = await getAllProducts()

      setProducts(items)
      setPage({ previous: 0, current: 1 })
    }

    loadProducts()
  }, [])

  useEffect(() => {
    if (!filteredProducts.length) setProductFound(products.length)
    else setProductFound(filteredProducts.length)
  }, [products, filteredProducts])

  function arraySlicer (arrayToSlice: Product[], startNumber: number, endNumber: number) {
    const array = arrayToSlice.slice(startNumber, endNumber)

    return array
  }

  function verifyOrderToPaginate (productsToPaginate: Product[], startNumber: number, endNumber: number) {
    if (startNumber > endNumber) {
      const productsToFill = arraySlicer(productsToPaginate, endNumber - 9, startNumber - 9)

      setProductsToShow(productsToFill)
    } else {
      const productsToFill = arraySlicer(productsToPaginate, startNumber, endNumber)

      setProductsToShow(productsToFill)
    }
  }

  function paginateProducts (productsToPaginate: Product[]) {
    if (Math.abs(page.current - page.previous) !== 1) {
      if (page.current < page.previous) {
        verifyOrderToPaginate(productsToPaginate, (page.current * 9) - 18, (page.current * 9) - 9)
      } else {
        verifyOrderToPaginate(productsToPaginate, (page.current - page.previous) * 9, page.current * 9)
      }
    } else {
      verifyOrderToPaginate(productsToPaginate, page.previous * 9, page.current * 9)
    }
  }

  useEffect(() => {
    if (!filteredProducts.length) paginateProducts(products)
    else paginateProducts(filteredProducts)
  }, [filteredProducts, page])

  const state = useMemo(() => ({
    page,
    products,
    filteredProducts,
    productsToShow,
    productsFound,
    setFilteredProducts,
    setPage
  }), [products, productsToShow])

  return (
    <ProductContext.Provider value={state}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
