import { useState } from 'react'
import Modal from 'react-modal'

import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import closeImg from '../../assets/close.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles'
import { api } from '../../services/api'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onRequestClose: () => void
  isOpen: boolean
}

const NewTransactionsModal: React.FC<IProps> = ({ onRequestClose, isOpen }) => {
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')
  const [amount, setAmount] = useState(0)
  const [title, setTitle] = useState('')

  async function handleCreateNewTransaction(event: React.FormEvent) {
    event.preventDefault()

    const data = { amount, title, type, category }

    try {
      api.post('/transactions', data)
    } catch (error) {
      console.log(error)
    }
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />

        <input
          onChange={event => setAmount(Number(event.target.value))}
          placeholder="Valor"
          value={amount}
          type="number"
        />

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

        <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}

export { NewTransactionsModal }
