import { Dispatch, SetStateAction } from 'react'
import busca from '../../images/busca.svg'
import conta from '../../images/conta.svg'
import winebox from '../../images/winebox.svg'

import { Div, ImageStyled } from './headerRightStyle'

interface IHeaderRightProps {
  searchBarVisible: boolean
  setSearchBarVisible: Dispatch<SetStateAction<boolean>>
}

export default function HeaderRight (props: IHeaderRightProps) {
  const { searchBarVisible, setSearchBarVisible } = props

  function test () {
    setSearchBarVisible(!searchBarVisible)
  }

  return (
    <Div>
      <ImageStyled onClick={test} src={busca} alt="busca" />
      <ImageStyled src={conta} alt="conta" />
      <ImageStyled src={winebox} alt="winebox" />
    </Div>
  )
}
