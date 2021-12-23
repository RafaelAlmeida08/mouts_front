import { Container } from "./styles";

export const Botao = ({text}) => {
    return(
        <Container>
            <button> 
                <span>{text}</span>
            </button>
        </Container>
        
    );
}