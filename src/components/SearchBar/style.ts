import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;
  background: #F5F5F5;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 80em;
  position: relative;
`

export const Input = styled.input`
  width: 90em;
  height: 5vh;
  padding-left: 2em;
  border: unset;
  border-radius: 4px;
  outline: 0px;
`

export const Span = styled.span`
  transform: translateY(95%);
  right: 110px;
  position: absolute;
  font-size: 12px;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`

export const Button = styled.button`
  transform: translateY(25%);
  right: 65px;
  position: absolute;
  border: unset;
  cursor: pointer;
  background: white;
`
