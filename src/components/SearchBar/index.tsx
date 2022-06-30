import Image from 'next/image'

import { Div, Form, Input, Span, Button } from './searchBarStyle'

import busca from '../../images/busca.svg'

interface IOnSubmit {
  preventDefault(): void
}

export default function SearchBar () {
  function onSubmit (event: IOnSubmit) {
    event.preventDefault()
  }

  return (
    <Div>
      <Form onSubmit={onSubmit}>
        <Input placeholder='Pesquisar' type="text" />
        <Span>aperte enter para buscar</Span>
        <Button type='submit'>
          <Image src={busca} alt="busca" width={30} height={30} />
        </Button>
      </Form>
    </Div>
  )
}
