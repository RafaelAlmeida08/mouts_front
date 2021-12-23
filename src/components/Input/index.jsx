import { Container } from "./styles";

export const Input = ({placeholder, setValue, value}) => {
    return(
        <Container>                  
            <input 
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
            /> 
        </Container>
    );
}