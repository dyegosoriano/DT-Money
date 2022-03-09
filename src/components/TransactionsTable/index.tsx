import React, { useEffect } from 'react'
import { api } from '../../services/api'

import { Container } from './styles'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const TransactionsTable: React.FC<IProps> = () => {
  useEffect(() => {
    api.get('/transactions').then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>27/09/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>07/09/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export { TransactionsTable }
