import { Container } from "./styles";

export const MenuItem = ({text}) => {
    return(
        <Container>
            <span>{text}</span>
        </Container>
    );
}