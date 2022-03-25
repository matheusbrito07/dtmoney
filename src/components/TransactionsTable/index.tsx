import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionTable() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    },[]);

    return(
        <Container>
            <table>
                <thead>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>
                <tbody> 
                    <tr>
                        <td>Desenvolvimento Website</td>
                        <td className='deposit'>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>22/03/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className='withdraw'>-R$1.100</td>
                        <td>Casa</td>
                        <td>17/03/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}