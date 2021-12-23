import { useContext, useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { NavBar } from "../../components/NavBar";
import { Select } from "../../components/Select";
import { AlertArea, Container, Content, FormArea, InputGroup, Title } from "./styles";
import axios from "axios";
import { baseURL } from "../../utils/api";
import { Botao } from "../../components/Botao";
import Loader from "react-loader-spinner";
import { ThemeContext } from "styled-components";
import Alert from '@mui/material/Alert';

export const CadastroLocalidade = () => {
    const [ loading, setLoading ] = useState(false);
    const { colors } = useContext(ThemeContext);
    const [ registered, setRegistered ] = useState(false);

    const [ cidades, setCidades ] = useState([]);
    const [ tipos, setTipos ] = useState([]);

    const [ nome, setNome ] = useState('');   
    const [ endereco, setEndereco ] = useState('');    
    const [ tipo, setTipo ] = useState();
    const [ cidade, setCidade ] = useState();    
    

    useEffect( async () => {
        setLoading(true);

        await axios({
            method: 'GET',
            url: `${baseURL}/cidades`
        })
        .then( response => {
            response.data.forEach( (response) => {
                setCidades(cidades => [...cidades, response])              
            })
            setCidade(response.data[0].id)
         })
        .catch(error => console.log(error))
        .finally(() => {setLoading(false)})

        await axios({
            method: 'GET',
            url: `${baseURL}/localidadestipos`
        })
        .then( response => {
            response.data.forEach( (response) => {
                setTipos(tipos => [...tipos, response])              
            })
            setTipo(response.data[0].id)
         })
        .catch(error => console.log(error))
        .finally(() => {setLoading(false)})

    },[]);

    useEffect(() => {
        registered && setTimeout( () => { 
            setRegistered(false)
        }, 3000)
    }, [registered])

    const registrar = async () => {
        if(nome === '' || endereco === '') {
            alert('Favor preencher todos os campos');
            return false;
        }else{            
            setLoading(true)        
            await axios ({
                method: 'POST',
                url: `${baseURL}/localidades`,
                data: {
                    nome: nome,
                    tipo: tipo,
                    endereco: endereco,
                    cidade: cidade
                }           
            })
            .then()
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
                setRegistered(true)
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
                            Localidade registrada com sucesso!
                        </Alert>
                    }
                </AlertArea>            
                {
                    !loading ?               
                        <FormArea>
                            <Title>
                                <h1>Nova Localidade</h1>
                            </Title>
                            <InputGroup>
                                    <Input
                                        value={nome}
                                        setValue={setNome}
                                        placeholder="Nome da localidade"
                                    />
                                    <Select
                                        opt={tipos}
                                        setValue={setTipo}
                                        value={tipo}
                                        label="Tipo"
                                    />
                                    <Input
                                        value={endereco}
                                        setValue={setEndereco}
                                        placeholder="Endereço da localidade"
                                    />
                                    <Select
                                        opt={cidades}
                                        setValue={setCidade}
                                        value={cidade}
                                        label="Cidades"
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