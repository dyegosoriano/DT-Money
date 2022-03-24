import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface TransactionsContextData {
  createTransaction: (transaction: TransactionInput) => Promise<void>
  transactions: Transaction[]
}

interface Transaction {
  createdAt: string
  category: string
  amount: number
  title: string
  type: string
  id: number
}

// type TransactionInput = Pick<Transaction, 'category' | 'amount' | 'title' | 'type'>
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: React.ReactNode
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function createTransaction({ category, amount, title, type }: TransactionInput) {
    const data = { amount, title, type, category, createdAt: new Date() }

    try {
      const response = await api.post('/transactions', data)
      const { transaction } = response.data

      setTransactions([...transactions, transaction])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>{children}</TransactionsContext.Provider>
  )
}

function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}

export { TransactionsProvider, useTransactions }
