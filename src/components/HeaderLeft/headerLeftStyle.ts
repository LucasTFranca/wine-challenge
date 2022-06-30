import styled from 'styled-components'

export const SpanStyled = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Exo:wght@100;200;300;400;500;600;700&display=swap');

  font-family: 'Exo', sans-serif;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:hover {
    color: #D14B8F;
    box-shadow: 0px 30px 0px -9px  #D14B8F;
  }
`

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40em;
`
