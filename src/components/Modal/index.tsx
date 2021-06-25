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
      dksopakdo
    </S.ModalComponent>
  )
}

export default Modal
