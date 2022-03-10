import logoSvg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  handleOpenModal: () => void
}

const Header: React.FC<IProps> = ({ handleOpenModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="DT Money" />

        <button type="button" onClick={handleOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}

export { Header }
