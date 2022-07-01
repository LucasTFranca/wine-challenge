import styled from 'styled-components'
import Image from 'next/image'

export const Div = styled.div`
  margin-bottom: 2em;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4em;
  width: 18em;
  height: 40vh;
  background: #FFFFFF;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
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

export const Price = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

  padding-top: 0.2em;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-decoration: line-through;
  color: #888888;
`

export const DiscountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.8em;
`

export const Discount = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

  margin-left: 1em;
  padding: 0.4em;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #FFFFFF;
  border-radius: 2px;
  background: #F79552;
`

export const SpanPriceMember = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #1D1D1B;
`

export const PriceMember = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

  margin-left: 0.5em;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #B6116E;
`

export const PriceNonMemberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.4em;
  margin-bottom: 1.5em;
`

export const PriceNonMember = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: #888888;
`

export const Button = styled.button`
  margin-top: 1em;
  width: 100%;
  height: 4.2vh;
  border: unset;
  border-radius: 3.9px;
  color: white;
  cursor: pointer;
  background: #7EBC43;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
`
