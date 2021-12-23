import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { NavBar } from "../../components/NavBar";
import { AreaBotao, Botoes, CardArea, Container, Content, Reviews } from "./styles";
import { Review } from '../../components/Review';
import { useNavigate } from 'react-router-dom';
import localidade from '../../assets/images/house.jpg';
import { Botao } from "../../components/Botao";
import axios from "axios";
import { baseURL } from "../../utils/api";

export const Notas = () => {
    const { id } = useParams();

    const [ loading, setLoading ] = useState(true);
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
    
    return(
        <Container>
            <NavBar/>
            <Content>
                <CardArea>
                    <Card img={localidade}/>
                    <Botoes>
                        <AreaBotao onClick={() => apagarLocalidade()}>
                            <Botao text="Apagar Localidade"/>
                        </AreaBotao> 
                        <AreaBotao onClick={() => {}}>
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
        </Container>
    );
}