import { Summary } from '../Summary'
import { Container } from './styles'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Dashboard: React.FC<IProps> = () => {
  return (
    <Container>
      <Summary />
    </Container>
  )
}

export { Dashboard }
