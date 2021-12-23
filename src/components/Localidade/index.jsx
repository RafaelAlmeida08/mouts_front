import { Container, LocalContent, LocalDataLeft, LocalDataRight, LocalDays, LocalDistance, Localname, Localreviews } from "./styles";

import localidade1 from '../../assets/images/house.jpg';
import { Card } from "../Card";

export const Localidade = () => {
    return(
        <Container>
            <Card img={localidade1}/>
            <LocalContent>
                <LocalDataLeft>
                    <Localname>Localidade nome</Localname>
                    <LocalDistance><span>end</span></LocalDistance>
                    <LocalDays><span>Sex - Dom / 17h às 0h</span></LocalDays>   
                </LocalDataLeft>
                <LocalDataRight>                           
                    <Localreviews>                                    
                        <span>Avaliações</span>         
                    </Localreviews>
                </LocalDataRight>   
            </LocalContent>
        </Container>
    );
}