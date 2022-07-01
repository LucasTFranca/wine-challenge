import Image from 'next/image'

import logo from '../../images/black.svg'

import { SpanStyled, Div } from './style'

export default function HeaderLeft () {
  return (
    <Div>
      <Image src={logo} alt="logo" />
      <SpanStyled>Clube</SpanStyled>
      <SpanStyled>Loja</SpanStyled>
      <SpanStyled>Produtores</SpanStyled>
      <SpanStyled>Ofertas</SpanStyled>
      <SpanStyled>Eventos</SpanStyled>
    </Div>
  )
}
