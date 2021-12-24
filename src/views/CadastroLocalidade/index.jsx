import React from "react";
import { useContext, useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { NavBar } from "../../components/NavBar";
import { Select } from "../../components/Select";
import { AlertArea, Container, Content, FormArea, InputGroup, Title } from "./styles";
import { getCidades, getCategorias, postLocalidades } from "../../utils/api";
import { Botao } from "../../components/Botao";
import Loader from "react-loader-spinner";
import { ThemeContext } from "styled-components";
import Alert from '@mui/material/Alert';

export const CadastroLocalidade = () => {
    const [ loading, setLoading ] = useState(true);
    const { colors } = useContext(ThemeContext);
    const [ registered, setRegistered ] = useState(false); 
    const [ error, setError ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('')

    const [ cidades, setCidades ] = useState([]);
    const [ categorias, setCategorias ] = useState([]);
    const [ liberado, setLiberado ] = useState(true);

    const [ nome, setNome ] = useState('');   
    const [ endereco, setEndereco ] = useState('');    
    const [ categoria, setCategoria ] = useState();
    const [ cidade, setCidade ] = useState();  

    useEffect(() => {
        getCidades()
        .then( response => {            
            response.length !== 0 && setLiberado(true);
            response.forEach( (response) => {
                setCidades(cidades => [...cidades, response])              
            })
            setCidade(response.id)
         })
        .catch(error => console.log(error))
              

        getCategorias()
        .then( response => {
            response.forEach( (response) => {
                setCategorias(categorias => [...categorias, response])              
            })
            setCategoria(response[0].id)
         })
        .catch(error => console.log(error))
        .finally(() => {setLoading(false)})

    },[]);

    useEffect(() => {
        registered && setTimeout( () => { 
            setRegistered(false)           
        }, 2000)
        error && setTimeout( () => { 
            setError(false)           
        }, 2000)
    }, [registered, error])

    const registrar = async () => {             
        setLoading(true)        
        postLocalidades({nome, categoria, endereco, cidade})
        .then( response => {
            setRegistered(true);
            setNome('');
            setEndereco('')
        })
        .catch(error => {
            setErrorMessage(error.response.data.message)
            setError(true)
        })
        .finally(() => {
            setLoading(false)           
        })        
    };

    return(
        <Container>
            <NavBar/>
            <Content>
                <AlertArea>
                    {registered && 
                        <Alert variant="filled" severity="success">Localidade registrada com sucesso!</Alert>
                    }
                    {error && 
                        <Alert variant="filled" severity="error"> {errorMessage}</Alert>
                    }
                     {!liberado &&
                        <Alert variant="filled" severity="error">Você precisa ter pelo menos 1 cidade cadastrada</Alert>
                    }
                </AlertArea>            
                        {liberado ?
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
                                                opt={categorias}
                                                setValue={setCategoria}
                                                value={categoria}
                                                label="Categoria"
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
                        :
                            false   
                        }
            </Content>
        </Container>
    );
}