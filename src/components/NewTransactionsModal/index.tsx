import { useContext, useState } from 'react'
import Modal from 'react-modal'

import { TransactionsContext } from '../../TransactionsContext'

import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import closeImg from '../../assets/close.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onRequestClose: () => void
  isOpen: boolean
}

const NewTransactionsModal: React.FC<IProps> = ({ onRequestClose, isOpen }) => {
  const { createTransaction } = useContext(TransactionsContext)

  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)
  const [title, setTitle] = useState('')

  async function handleCreateNewTransaction(event: React.FormEvent) {
    event.preventDefault()

    await createTransaction({ category, type, amount, title })

    setType('deposit')
    setCategory('')
    setAmount(0)
    setTitle('')

    onRequestClose()
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
