import { Container, LocalContent, LocalDataLeft, LocalDataRight, LocalDays, LocalDistance, Localname, Localreviews } from "./styles";

import localidade1 from '../../assets/images/house.jpg';
import { Card } from "../Card";

export const Localidade = ({data}) => {
    console.log(data)
    return(
        <Container>
            <Card img={localidade1}/>
            <LocalContent>
                <LocalDataLeft>
                    <Localname>{data.nome}</Localname>
                    <LocalDistance><span>{data.endereco}</span></LocalDistance>
                    <LocalDays><span>Sex - Dom / 17h às 0h</span></LocalDays>   
                </LocalDataLeft>
                <LocalDataRight>                           
                    <Localreviews>
                        <span>{data.notas.length}</span>
                        <span>
                            {data.notas.length > 1 ?  'Avaliações' : 'Avaliação'} 
                        </span>                                
                    </Localreviews>
                </LocalDataRight>   
            </LocalContent>
        </Container>
    );
}