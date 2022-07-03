import ProductContext from 'context/ProductContext'
import { useContext } from 'react'

import { Section, Label, Input, Span, H4 } from './style'

interface IInputEvent {
  target: {
    id: string;
  }
}

interface IInputDictionary {
  [key: string]: () => void
}

export default function PriceFilter () {
  const { products, setFilteredProducts } = useContext(ProductContext)

  function filterProducts (numberOne: number, numberTwo: number) {
    if (numberOne && numberTwo) {
      return products.filter(({ priceNonMember }) => priceNonMember >= numberOne && priceNonMember <= numberTwo)
    }

    return products.filter(({ priceNonMember }) => priceNonMember > numberOne)
  }

  function getNumbersFromId (id: string) {
    const numberOne = id.split('-')[0]
    const numberTwo = id.split('-')[1]

    return [Number(numberOne), Number(numberTwo)]
  }

  function updateProductsToShow (id: string) {
    const [numberOne, numberTwo] = getNumbersFromId(id)

    const productsToShow = filterProducts(numberOne, numberTwo)
    setFilteredProducts(productsToShow)
  }

  function inputHandleChange ({ target }: IInputEvent) {
    const { id } = target

    const inputDictionary: IInputDictionary = {
      '40': () => {
        const productsToShow = products.filter(({ priceNonMember }) => priceNonMember < Number(target.id))

        setFilteredProducts(productsToShow)
      },
      '40-60': () => {
        updateProductsToShow(id)
      },
      '100-200': () => {
        updateProductsToShow(id)
      },
      '200-500': () => {
        updateProductsToShow(id)
      },
      '500': () => {
        updateProductsToShow(id)
      }
    }

    inputDictionary[id]()
  }

  return (
    <Section>
      <H4>Refine sua busca</H4>
      <Span>Por preço</Span>
      <Label htmlFor="40">
        <Input
          name='priceFilter'
          onChange={inputHandleChange}
          id="40"
          type="radio"
          />
            Até R$40
      </Label>
      <Label htmlFor="40-60">
        <Input
          name='priceFilter'
          onChange={inputHandleChange}
          id="40-60"
          type="radio"
          />
            R$40 A R$60
      </Label>
      <Label htmlFor="100-200">
        <Input
          name='priceFilter'
          onChange={inputHandleChange}
          id="100-200"
          type="radio"
          />
            R$100 A R$200
      </Label>
      <Label htmlFor="200-500">
        <Input
          name='priceFilter'
          onChange={inputHandleChange}
          id="200-500"
          type="radio"
          />
            R$200 A R$500
      </Label>
      <Label htmlFor="500">
        <Input
          name='priceFilter'
          onChange={inputHandleChange}
          id="500"
          type="radio"
          />
            Acima de R$500
      </Label>
    </Section>
  )
}
