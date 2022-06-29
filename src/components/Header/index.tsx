import logoImg from '../../assets/Logo.svg';

import { Container, Content } from './styles';

interface Props {
  //evento de click type
  onOpenNewTransactionModal: () => void;
}

export function Header ({ onOpenNewTransactionModal }: Props) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>        
      </Content>
    </Container>
  )
}