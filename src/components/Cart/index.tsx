import CartCard from 'components/CartCard'
import ProductContext from 'context/ProductContext'
import { useContext, useState } from 'react'
import { Product } from 'types'
import winebox from '../../images/winebox.svg'
import arrow from '../../images/arrow.png'

import { Div, Container, ImageStyled, Span, Button, Modal, Arrow } from './style'

export default function Cart () {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const { productsInCart } = useContext(ProductContext)

  function showModal () {
    setModalVisible(true)
    document.body.style.overflow = 'hidden'
  }

  function unShowModal () {
    setModalVisible(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <Div>
        <ImageStyled onClick={showModal} src={winebox} alt="winebox" />
        <Container>
          <Span>{productsInCart.length}</Span>
        </Container>
      </Div>
      {
        modalVisible &&
          <Modal>
            <Button onClick={unShowModal}>
              <Arrow src={arrow} />
            </Button>
            {
              productsInCart.map((product: Product) => <CartCard key={`${product.price}-${product.id}`} product={ product } />)
            }
          </Modal>
      }
    </>
  )
}
