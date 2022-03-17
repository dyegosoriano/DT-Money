import { useState } from 'react'
import Modal from 'react-modal'

import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import closeImg from '../../assets/close.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onRequestClose: () => void
  isOpen: boolean
}

const NewTransactionsModal: React.FC<IProps> = ({ onRequestClose, isOpen }) => {
  const [type, setType] = useState('deposit')

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

        <TransactionTypeContainer>
          <RadioBox isActive={type === 'deposit'} activeColor="green" type="button" onClick={() => setType('deposit')}>
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox isActive={type === 'withdraw'} activeColor="red" type="button" onClick={() => setType('withdraw')}>
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}

export { NewTransactionsModal }
