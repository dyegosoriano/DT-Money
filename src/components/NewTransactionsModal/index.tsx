import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'

import { Container } from './styles'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onRequestClose: () => void
  isOpen: boolean
}

const NewTransactionsModal: React.FC<IProps> = ({ onRequestClose, isOpen }) => {
  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={onRequestClose}
      isOpen={isOpen}
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />

        <input placeholder="Valor" type="number" />

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}

export { NewTransactionsModal }
