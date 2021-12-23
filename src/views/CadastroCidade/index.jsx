import { Container, FormArea, InputGroup, Title } from "./styles";
import { NavBar } from '../../components/NavBar';
import { Input } from "../../components/Input";
import { useState } from "react";
import { Select } from "../../components/Select";

export const CadastroCidade = () => {
    const [ cidade, setCidade ] = useState('');
    const [ pais, setPais ] = useState('');
    return(
        <Container>
            <NavBar/>
            <FormArea>
                <Title>
                    <h1>Nova Cidade</h1>
                </Title>
                <InputGroup>
                    <Input
                        value={cidade} 
                        setValue={setCidade}
                        placeholder="Nome da Cidade"
                    />  
                    <Select
                        opt={2}
                    />            
                    <Input
                        value={pais} 
                        setValue={setPais}
                        placeholder="Nome do Pais"
                    />                                                                    
                </InputGroup>   
            </FormArea>
        </Container>
    );
}