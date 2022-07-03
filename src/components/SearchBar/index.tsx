import Image from 'next/image'
import busca from '../../images/busca.svg'
import { ChangeEventHandler, FormEventHandler, useContext, useState } from 'react'
import ProductContext from 'context/ProductContext'

import { Div, Form, Input, Span, Button } from './style'

export default function SearchBar () {
  const { products, setFilteredProducts } = useContext(ProductContext)
  const [inputValue, setInputValue] = useState<string>('')

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const productsToFill = products.filter((product) => product.name.includes(inputValue))
    setFilteredProducts(productsToFill)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ currentTarget }) => {
    const { value } = currentTarget

    setInputValue(value)
  }

  return (
    <Div>
      <Form onSubmit={onSubmit}>
        <Input onChange={handleChange} value={inputValue} placeholder='Pesquisar' type="text" />
        <Span>aperte enter para buscar</Span>
        <Button type='submit'>
          <Image src={busca} alt="busca" width={30} height={30} />
        </Button>
      </Form>
    </Div>
  )
}
