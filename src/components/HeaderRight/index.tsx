import Cart from 'components/Cart'
import { Dispatch, SetStateAction } from 'react'
import busca from '../../images/busca.svg'
import conta from '../../images/conta.svg'

import { Div, ImageStyled } from './style'

interface IHeaderRightProps {
  searchBarVisible: boolean
  setSearchBarVisible: Dispatch<SetStateAction<boolean>>
}

export default function HeaderRight (props: IHeaderRightProps) {
  const { searchBarVisible, setSearchBarVisible } = props

  function toggleSearchBarVisible () {
    setSearchBarVisible(!searchBarVisible)
  }

  return (
    <Div>
      <ImageStyled onClick={toggleSearchBarVisible} src={busca} alt="busca" />
      <ImageStyled src={conta} alt="conta" />
      <Cart />
    </Div>
  )
}
