import { Container } from "./styles";

export const Card = ({img}) => {
    return(
        <Container>
            <img src={img} />
        </Container>
    );
}