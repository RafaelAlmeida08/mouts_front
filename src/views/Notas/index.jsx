import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { NavBar } from "../../components/NavBar";
import { AlertArea, AreaBotao, Botoes, CardArea, Container, Content, LoadArea, Reviews } from "./styles";
import { Review } from '../../components/Review';
import { useNavigate } from 'react-router-dom';
import localidade from '../../assets/images/house.jpg';
import { Botao } from "../../components/Botao";
import { deleteLocalidade, postNotas, showLocalidade } from "../../utils/api";
import { ModalC } from "../../components/Modal";
import Loader from "react-loader-spinner";
import { ThemeContext } from "styled-components";
import Alert from '@mui/material/Alert';
import utcToLocal from "../../utils/utcToLocal";

export const Notas = () => {
    
    const { id } = useParams(); 

    const [ loading, setLoading ] = useState(true);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ registered, setRegistered ] = useState(false);
    const [ done, setDone ] = useState(false);
    const { colors } = useContext(ThemeContext);
    const redirect = useNavigate();

    const [ error, setError ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('')

    const [ descricao, setDescricao ] = useState('');
    const [ reviews, setReviews ] = useState([]);
    const [ notas, setNotas ] = useState([])
   

    const apagarLocalidade = async () => {
        setLoading(true)
        deleteLocalidade(id)
        .then( response => {
            alert('Localidade removida com sucesso')
            redirect("/localidades")         
        })
        .catch(error => {console.log(error)})
        .finally( () => setLoading(false));
    }

    useEffect(() => {
        showLocalidade(id)
        .then(response => setNotas(response.notas))
        .catch(error => {})
        .finally(() => setLoading(false))
    }, [])

    useEffect( async () => {
        if(done) {                 
                setModalOpen(false)
                setLoading(true)
                postNotas({descricao, id})
                .then( response => setRegistered(true) )
                .catch(error => {
                    setErrorMessage(error.response.data.message)
                    setError(true)
                })
                .finally(() => {
                    setLoading(false)
                    setDone(false)
                    setDescricao('');
                })
            }
        
    }, [done])

    useEffect(() => {
        registered && setTimeout( () => { 
            setRegistered(false);
            window.location.reload()    
        }, 2000)
        error && setTimeout( () => { 
            setError(false)           
        }, 2000)
    }, [registered, error])
    
    return(
        <Container>
            <NavBar/>
            <AlertArea>
                {registered && 
                    <Alert variant="filled" severity="success">
                        Avaliação registrada com sucesso!
                    </Alert>
                }
                 {error && 
                    <Alert variant="filled" severity="error">
                        {errorMessage}
                    </Alert>
                }
            </AlertArea>        
            { !loading ?                
                    modalOpen ?  
                        <ModalC
                            modal={modalOpen}
                            setModal={setModalOpen}
                            value={descricao}
                            setValue={setDescricao}
                            done={done}
                            setDone={setDone}
                        />
                        
                    :
                        <Content>
                            <CardArea>
                                <Card img={localidade}/>
                                <Botoes>
                                    <AreaBotao onClick={() => apagarLocalidade()}>
                                        <Botao text="Apagar Localidade"/>
                                    </AreaBotao> 
                                    <AreaBotao onClick={() => setModalOpen(true)}>
                                        <Botao text="Avaliar"/>
                                    </AreaBotao> 
                                    <AreaBotao onClick={() => setModalOpen(true)}>
                                        <Link key={localidade.id} to={{ pathname: `/localidade/editar/${id}`}}> 
                                            <Botao text="Editar"/>
                                        </Link> 
                                    </AreaBotao> 
                                </Botoes>                                       
                                <h1>{notas.length > 0 ? 'Avaliações' : 'Ainda não há avaliações' }</h1>
                            </CardArea>                
                            <Reviews>
                                {
                                    !loading && notas.length > 0 &&
                                    notas.map( (nota) => (
                                        <Review
                                            key={nota.id}
                                            nome="João Gonçalves"
                                            data={utcToLocal(nota.created_at)}
                                            review={nota.descricao}
                                        />
                                    ))                                   
                                }
                            </Reviews>
                        </Content> 
                    :
                        <LoadArea>
                            <Loader
                                type="Puff"
                                color={colors.spinner}
                                height={100}
                                width={100}
                                timeout={0} 
                            />   
                        </LoadArea>                       
            }            
        </Container>
    );
}