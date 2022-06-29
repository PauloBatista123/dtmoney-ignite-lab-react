import ReactModal from "react-modal";
import {Container, RadioBox, TransactionTypeContainer} from './styles';

import closeImg from '../../assets/closeButton.svg'
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saidas.png'
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionProps){

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {title, value, category, type};

    api.post('/transactions', data);
  }

  return (
    <ReactModal
        overlayClassName="react-modal-overlay"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <img src={closeImg} alt="btn close" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>
          <input 
            type="text" 
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input 
            type="number" 
            placeholder="Valor"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => {setType('deposit')}}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="" />
              Entradas
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => {setType('withdraw')}}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="" />
              Saídas
            </RadioBox>
          </TransactionTypeContainer>

          <input 
            type="text" 
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
          <button type="submit">
            Cadastrar
          </button>
        </Container>
    </ReactModal>
  )
}