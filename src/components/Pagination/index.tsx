import ProductContext from 'context/ProductContext'
import { MouseEventHandler, useContext } from 'react'
import { Page } from 'types'
import {
  Section,
  Button,
  SelectedButton,
  MiddleButton,
  MiddleButtonSelected,
  BorderButton
} from './style'

interface IButtonDictionary {
  [key: string]: () => void;
}

export default function Pagination () {
  const { page, productsFound, setPage } = useContext(ProductContext)

  const handleClick: MouseEventHandler<HTMLButtonElement> = ({ currentTarget }) => {
    const { value, className } = currentTarget
    const classNamesSplitted = className.split(' ')
    const lastClassName = classNamesSplitted[classNamesSplitted.length - 1]

    const buttonDictionary: IButtonDictionary = {
      'button': () => {
        setPage((prevState: Page) => ({
          previous: prevState.current,
          current: Number(value)
        }))
      },
      'nextButton': () => {
        setPage((prevState: Page) => ({
          previous: prevState.current,
          current: prevState.current + 1
        }))
      },
      'previousButton': () => {
        setPage((prevState: Page) => ({
          previous: prevState.current,
          current: prevState.current - 1
        }))
      }
    }

    buttonDictionary[lastClassName]()
  }

  function renderButtons () {
    if (page.current === 1) {
      return (
        <>
          <SelectedButton>
            { page.current }
          </SelectedButton>
          <MiddleButton value={page.current + 1} className="button" onClick={handleClick}>
            { page.current + 1 }
          </MiddleButton>
          <Button value={page.current + 2} className="button" onClick={handleClick}>
            { page.current + 2 }
          </Button>
          <BorderButton className="nextButton" onClick={handleClick}>
            {'Próximo >>'}
          </BorderButton>
        </>
      )
    } else if (page.current === Math.ceil(productsFound / 9)) {
      return (
        <>
          <BorderButton className="previousButton" onClick={handleClick}>
            {'<< Anterior'}
          </BorderButton>
          <Button value={ page.current - 2 } className="button" onClick={handleClick}>
            { page.current - 2 }
          </Button>
          <MiddleButton value={ page.current - 1 } className="button" onClick={handleClick}>
            { page.current - 1 }
          </MiddleButton>
          <SelectedButton>
            { page.current }
          </SelectedButton>
        </>
      )
    }

    return (
      <>
        <BorderButton className="previousButton" onClick={handleClick}>
          {'<< Anterior'}
        </BorderButton>
        <Button value={ page.current - 1 } className="button" onClick={handleClick}>
          { page.current - 1 }
        </Button>
        <MiddleButtonSelected>
          { page.current }
        </MiddleButtonSelected>
        <Button value={ page.current + 1 } className="button" onClick={handleClick}>
          { page.current + 1 }
        </Button>
        <BorderButton className="nextButton" onClick={handleClick}>
          {'Próximo >>'}
        </BorderButton>
      </>
    )
  }

  return (
    <Section>
      {
        renderButtons()
      }
    </Section>
  )
}
