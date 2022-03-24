import { useState } from 'react'
import Modal from 'react-modal'

import { NewTransactionsModal } from './components/NewTransactionsModal'
import { TransactionsProvider } from './hooks/useTransactions'
import { Dashboard } from './components/Dashboard'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'

Modal.setAppElement('#root')

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => setIsOpenModal(!isOpenModal)

  return (
    <TransactionsProvider>
      <GlobalStyle />

      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />

      <NewTransactionsModal onRequestClose={handleOpenModal} isOpen={isOpenModal} />
    </TransactionsProvider>
  )
}

export { App }
