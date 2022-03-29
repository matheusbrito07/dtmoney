import { Container, TransactionTypeContainer } from "./style";
import Modal from 'react-modal';
import FecharImg from '../../assets/Fechar.svg'
import EntradasImg from '../../assets/Entradas.svg'
import SaidasImg from '../../assets/Saidas.svg'

interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >

            <button 
            type='button'
            onClick={onRequestClose}
            className='react-modal-close'
            
            >
                <img src={FecharImg} alt="Fechar Modal"/>
            </button>
            <Container> 
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder="Titulo"
                />

                <input 
                    type='number'
                    placeholder="Valor"
                />

                <TransactionTypeContainer> 
                    <button 
                        type='button'
                    >
                        <img src={EntradasImg} alt='Entrada'/>
                        <span>Entrada</span>
                    </button>
                    <button 
                        type='button'
                    >
                        <img src={SaidasImg} alt='Saída'/>
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria"
                />

                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
            
        </Modal>
      
    );
}