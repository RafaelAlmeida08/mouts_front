import { useContext, useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { baseURL } from "../../utils/api";
import axios from "axios";
import { Localidade } from "../../components/Localidade";
import { Botao } from "../../components/Botao";
import { AlertArea, Bottom, Content, Left, Local, Right, Top, TopContent } from "./styles";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { useParams } from "react-router-dom";
import localidade1 from '../../assets/images/house.jpg';
import Alert from '@mui/material/Alert';
import Loader from "react-loader-spinner";
import { ThemeContext } from "styled-components";

export const EditarLocalidades = () => {

    const { id } = useParams(); 
    
    const [ loading, setLoading ] = useState(true);
    const [ updated, setUpdated ] = useState(false);
    const { colors } = useContext(ThemeContext);

    const [ cidades, setCidades ] = useState([]);
    const [ tipos, setTipos ] = useState([]);

    const [ nome, setNome ] = useState('');   
    const [ endereco, setEndereco ] = useState('');    
    const [ tipo, setTipo ] = useState();
    const [ cidade, setCidade ] = useState();    

    useEffect( async () => {     
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

        await axios({
            method: 'GET',
            url: `${baseURL}/localidades/show/${id}`
        })
        .then( response => {
            setNome(response.data.nome);
            setTipo(response.data.tipo.id);
            setEndereco(response.data.endereco)
            setCidade(response.data.cidade.id)    
        })
        .catch(error => console.log(error))
        .finally(() => {setLoading(false)})
    },[])

    useEffect(() => {
        updated && setTimeout( () => { 
            setUpdated(false)
        }, 3000)
    }, [updated])

    const atualizar = async () => { 
        setLoading(true)
        await axios({
            method: 'PUT',
            url: `${baseURL}/localidades/${id}`,
            data: {
                nome: nome,
                tipo: tipo,
                endereco: endereco,
                cidade: cidade
            }
        })
        .then(response => setUpdated(true))
        .catch(error => console.log(error))
        .finally(() => {setLoading(false)})
    }

    return(
        <div>
            <NavBar/>
            <Content>   
                <TopContent>
                    <AlertArea>
                        {updated && 
                            <Alert variant="filled" severity="success">
                                Localidade atualizada com sucesso!
                            </Alert>
                        }
                    </AlertArea>       
                </TopContent>
               
                {
                    !loading ?
                    <Local>
                        <Top>
                            <Left>
                                <Card img={localidade1} />
                            </Left>
                            <Right>
                                <Input
                                    placeholder="Nome"
                                    value={nome}
                                    setValue={setNome}
                                />
                                <Select
                                    opt={tipos}
                                    setValue={setTipo}
                                    value={tipo}
                                    label="Tipo"
                                />
                                <Input
                                    placeholder="Endereço"
                                    value={endereco}
                                    setValue={setEndereco}
                                />
                                <Select
                                    opt={cidades}
                                    setValue={setCidade}
                                    value={cidade}
                                    label="Cidades"
                                // fixo={true}
                                />
                            </Right>
                        </Top>
                        <Bottom onClick={() => atualizar()} >
                            <Botao text="Atualizar" />
                        </Bottom>
                    </Local>
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
        </div>
    );
}