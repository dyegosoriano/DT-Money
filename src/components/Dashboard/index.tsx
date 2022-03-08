import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import { Container } from './styles'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Dashboard: React.FC<IProps> = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}

export { Dashboard }
