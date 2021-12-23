import { AlertArea, Container, Content, FormArea, InputGroup, Title } from "./styles";
import { NavBar } from '../../components/NavBar';
import { Input } from "../../components/Input";
import { useContext, useState } from "react";
import { Select } from "../../components/Select";
import { estados } from "../../utils/estados";
import { Botao } from "../../components/Botao";
import axios from "axios";
import { baseURL } from "../../utils/api";
import Loader from "react-loader-spinner";
import { ThemeContext } from "styled-components";
import Alert from '@mui/material/Alert';

export const CadastroCidade = () => {
       
    const [ cidade, setCidade ] = useState('');
    const [ pais, setPais ] = useState('');
    const [ estado, setEstado ] = useState(estados[0]);
    const [ loading, setLoading ] = useState(false);
    const [ registered, setRegistered ] = useState(false);
    const { colors } = useContext(ThemeContext)   

    const registrar = async () => {
        if(cidade === '' || pais === '') {
            alert('Favor preencher todos os campos');
            return false;
        }else {
            setLoading(true)
            await axios({
                method: 'POST',
                url: `${baseURL}/cidades`,
                data: {
                    nome: cidade,
                    estado: estado,
                    pais: pais
                }
            })
            .then( response => setRegistered(true) )
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })
        }               
    };

    return(
        <Container>
            <NavBar/>
            <Content>
                <AlertArea>
                    {registered && 
                        <Alert variant="filled" severity="success">
                            Cidade registrada com sucesso!
                        </Alert>
                    }
                </AlertArea>            
            {
                !loading ?
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
                                opt={estados}
                                setValue={setEstado}                                
                                label="Estado"
                                fixo={true}
                            />
                            <Input
                                value={pais}
                                setValue={setPais}
                                placeholder="Nome do Pais"
                            />
                        </InputGroup>
                        <div onClick={() => registrar()} >
                            <Botao text="Registrar" />
                        </div>
                    </FormArea> 
                :
                    <Loader
                        type="Puff"
                        color={colors.spinner}
                        height={100}
                        width={100}
                        timeout={0} 
                    />           
            }
            </Content>
        </Container>
    );
}