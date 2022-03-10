import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { NewTransactionsModal } from './components/NewTransactionsModal'

Modal.setAppElement('#root')

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => setIsOpenModal(!isOpenModal)

  return (
    <>
      <GlobalStyle />

      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />

      <NewTransactionsModal onRequestClose={handleOpenModal} isOpen={isOpenModal} />
    </>
  )
}

export { App }
