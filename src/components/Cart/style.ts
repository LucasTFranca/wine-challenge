import styled from 'styled-components'
import Image from 'next/image'

export const Div = styled.div`
  position: relative;
`

export const ImageStyled = styled(Image)`
  cursor: pointer;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35px;
  right: -2px;
  padding-top: 0.2em;
  padding-left: 0.2em;
  width: 1.3em;
  height: 2.2vh;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`

export const Span = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  color: #4FBFA5;
`

export const Button = styled.button`
  align-self: flex-start;
  border: unset;
  background: white;
`

export const Arrow = styled(Image)`
  cursor: pointer;
  transform: rotate(180deg);
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  right: 1px;
  width: 25.2em;
  height: 100vh;
  position: absolute;
  top: 0px;
  z-index: 1;
  overflow-x: auto;
  background: white;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
`
