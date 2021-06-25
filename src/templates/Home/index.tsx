import { useCallback, useState } from 'react'

import Card from 'components/Card'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import Modal from 'components/Modal'

import * as S from './styles'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const modalOpen = useCallback(() => {
    setIsOpen(isOpen ? false : true)
  }, [isOpen, setIsOpen])

  return (
    <S.Wrapper>
      <Container>
        <Menu />
        <S.Row>
          <S.Grid>
            <Card
              title="Site Responsivo DESKTOP"
              thumbnail="/img/desktop.png"
              text="Quando pressionado o botão <strong>Leia mais...</strong> o restante da
                informação deverá aparecer em scroll down."
              color="orange"
              isLongTexte
            />
          </S.Grid>

          <S.Grid>
            <Card
              title="Site Responsivo TABLET"
              thumbnail="/img/tablet.png"
              text="Quando pressionado o botão <strong>Leia mais...</strong> o restante da
                informação deverá aparecer em scroll down."
              color="yellow"
              modalOpen={modalOpen}
            />
          </S.Grid>

          <S.Grid>
            <Card
              title="Site Responsivo MOBILE"
              thumbnail="/img/mobile.png"
              text="Quando pressionado o botão <strong>Leia mais...</strong> o restante da
                informação deverá aparecer em scroll down."
              color="purple"
            />
          </S.Grid>
        </S.Row>
        <Footer />
      </Container>

      <Modal isOpen={isOpen} setIsOpen={modalOpen} />
    </S.Wrapper>
  )
}

export default Home
