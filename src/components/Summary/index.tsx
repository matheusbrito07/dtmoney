import { Container } from "./styles"

import EntradasImg from "../../assets/Entradas.svg"
import SaidasImg from "../../assets/Saidas.svg"
import TotalImg from '../../assets/Total.svg'

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradasImg} alt="Valor Positivo" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={SaidasImg} alt="Valor Negativo" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Resultado" />
                </header>
                <strong>R$500,00</strong>
            </div>
            
        </Container>
    )
}
