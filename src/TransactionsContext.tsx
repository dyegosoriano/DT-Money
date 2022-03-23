import { createContext, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transaction {
  createdAt: string
  category: string
  amount: number
  title: string
  type: string
  id: number
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

const TransactionsContext = createContext<Transaction[]>([])

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  }, [])

  return <TransactionsContext.Provider value={transactions}>{children}</TransactionsContext.Provider>
}

export { TransactionsContext, TransactionsProvider }
