import { Container } from "./styles";
import incomedImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saidas.png';
import totalImg from '../../assets/Total.png';


export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomedImg} alt="entradas" />
        </header>
        <strong>R$1000</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="entradas" />
        </header>
        <strong> - R$500</strong>
      </div>

      <div className="background-green">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="entradas" />
        </header>
        <strong>R$500</strong>
      </div>
    </Container>
  );
}