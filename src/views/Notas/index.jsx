import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { NavBar } from "../../components/NavBar";
import { AlertArea, AreaBotao, Botoes, CardArea, Container, Content, LoadArea, Reviews } from "./styles";
import { Review } from '../../components/Review';
import { useNavigate } from 'react-router-dom';
import localidade from '../../assets/images/house.jpg';
import { Botao } from "../../components/Botao";
import axios from "axios";
import { baseURL } from "../../utils/api";
import { ModalC } from "../../components/Modal";
import Loader from "react-loader-spinner";
import { ThemeContext } from "styled-components";
import Alert from '@mui/material/Alert';

export const Notas = () => {
    const { id } = useParams(); 

    const [ loading, setLoading ] = useState(false);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ registered, setRegistered ] = useState(false);
    const [ review, setReview ] = useState('');
    const [ reviews, setReviews ] = useState([]);
    const [ done, setDone ] = useState(false);
    const { colors } = useContext(ThemeContext);
    const redirect = useNavigate();

    const apagarLocalidade = async () => {
        setLoading(true)
        await axios({
            method: 'DELETE',
            url: `${baseURL}/localidades/${id}`
        }) 
        .then( response => {
            alert('Localidade removida com sucesso')
            redirect("/localidades")         
        })
        .catch(error => {console.log(error)})
        .finally( () => setLoading(false));
    }

    useEffect(() => {},[])

    useEffect( async () => {
        if(done) {
            if(review === ''){
                alert('Favor preencher o campo de avaliação')
                setDone(false)
            }else{                
                setModalOpen(false)
                setLoading(true)
                await axios({
                    method: 'POST',
                    url: `${baseURL}/notas`,
                    data: {
                        descricao: review,
                        localidade: id
                    }
                })
                .then( response => setRegistered(true) )
                .catch(error => console.log(error))
                .finally(() => {
                    setLoading(false)
                    setDone(false)
                    setReview('');
                })
            }
        }
    }, [done])

    useEffect(() => {
        registered && setTimeout( () => { 
            setRegistered(false)
        }, 3000)
    }, [registered])
    
    return(
        <Container>
            <NavBar/>
            <AlertArea>
                {registered && 
                    <Alert variant="filled" severity="success">
                        Avaliação registrada com sucesso!
                    </Alert>
                }
            </AlertArea>        
            { !loading ?                
                    modalOpen ?  
                        <ModalC
                            modal={modalOpen}
                            setModal={setModalOpen}
                            value={review}
                            setValue={setReview}
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
                                </Botoes>                                       
                                <h1>Avaliações</h1>
                            </CardArea>                
                            <Reviews>
                                <Review/>
                                <Review/>
                                <Review/>
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