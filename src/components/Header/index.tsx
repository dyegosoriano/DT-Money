import logoSvg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<IProps> = () => {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="DT Money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}

export { Header }
