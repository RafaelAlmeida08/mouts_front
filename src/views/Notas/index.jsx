import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { NavBar } from "../../components/NavBar";
import { CardArea, Container, Content, Reviews } from "./styles";
import { Review } from '../../components/Review';

import localidade from '../../assets/images/house.jpg';

export const Notas = () => {
    const { id } = useParams();
    
    return(
        <Container>
            <NavBar/>
            <Content>
                <CardArea>
                    <Card img={localidade}/>
                    <h1>Avaliações</h1>
                </CardArea>
                <Reviews>
                    <Review/>
                </Reviews>
            </Content>           
        </Container>
    );
}