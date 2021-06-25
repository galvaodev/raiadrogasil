import { CloseOutline as CloseOutlineIcon } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'

interface PropsModal {
  setIsOpen?: any
  isOpen: boolean
}

const Modal = ({ setIsOpen, isOpen }: PropsModal) => {
  const modalStyles = { overlay: { zIndex: 10 } }

  return (
    <S.ModalComponent
      isOpen={isOpen}
      style={modalStyles}
      onRequestClose={() => setIsOpen()}
      ariaHideApp={false}
      closeTimeoutMS={500}
      contentLabel="Experiemente grátis por 30 dias"
    >
      <S.Row>
        <S.Button onClick={() => setIsOpen()}>
          <CloseOutlineIcon />
        </S.Button>
        <S.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus
          sapien quis ligula laoreet, id vehicula neque rhoncus. In nec ornare
          enim. Aliquam sagittis nulla molestie blandit gravida. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Ut metus magna,
          lacinia et ipsum vitae, dapibus rhoncus sapien. Duis vel quam sit amet
          magna ornare tempor. Mauris pretium fermentum leo. Integer nisl purus,
          egestas tempor turpis sed, imperdiet mollis tellus. Etiam non leo nec
          justo dignissim consectetur ut sed sapien. Ut luctus ullamcorper
          pellentesque. Aenean finibus imperdiet mattis. Pellentesque elementum
          vitae risus eget maximus. Morbi imperdiet eleifend mauris, vel blandit
          magna luctus porta. Sed ac augue ipsum. Nulla condimentum nulla
          ligula, nec molestie nunc vehicula sed. Ut rhoncus ipsum velit, at
          consectetur dui sagittis at.
        </S.Body>
      </S.Row>
    </S.ModalComponent>
  )
}

export default Modal
