import styled from 'styled-components'
import Image from 'next/image'

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 1em;
  width: 22em;
  height: 12vh;
  background: #FFFFFF;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  position: relative;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const ImageStyled = styled(Image)`
  object-fit: contain;
`

export const Name = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
`

export const PriceNonMember = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

  margin-left: 0.5em;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #B6116E;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #9f9f9f;
  cursor: pointer;
  color: #9f9f9f;
  font-size: 18px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`
