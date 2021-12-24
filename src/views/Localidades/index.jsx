import React from "react";
import { AlertArea, CardArea,  Container, LocalArea } from "./styles";
import { NavBar } from "../../components/NavBar";
import { Link } from "react-router-dom";
import { Localidade } from "../../components/Localidade";
import { SubMenu } from "../../components/SubMenu";
import { useContext, useEffect, useState } from "react";
import { baseURL, getLocalidades } from "../../utils/api";
import Loader from "react-loader-spinner";
import { ThemeContext } from "styled-components";
import Alert from '@mui/material/Alert';

export const Localidades = () => {

    const [ loading, setLoading ] = useState(true);
    const [ localidades, setLocalidades ] = useState([]);
    const { colors } = useContext(ThemeContext);

    const itemsSubMenu = [
        { name: 'Nova Localidade', href: '/cadastro/localidades'},
        { name: 'Todas', href: '#'},
        { name: 'Comercial', href: '#'},   
        { name: 'Residencial', href: '#'},  
        { name: 'Outros', href: '#'}  
    ];

    useEffect( async () => {
       getLocalidades()
        .then( response => {
            setLocalidades(response)
        })
        .catch( error => console.log(error)) 
        .finally(() => setLoading(false))
    },[])

    return(
        <Container> 
            <NavBar />
            <SubMenu items={itemsSubMenu} />             
                {!loading && localidades.length < 1 && 
                    <AlertArea>
                        <Alert variant="filled" severity="info">
                            Nenhuma localidade cadastrada
                        </Alert>
                    </AlertArea> 
                }                
            <LocalArea>
                {
                    !loading ?                
                        <CardArea>
                            {
                                localidades.map((localidade) => (
                                <Link key={localidade.id} to={{ pathname: `/localidade/${localidade.id}`}}>   
                                    <Localidade data={localidade} /> 
                                </Link> 
                                ))                    
                            }                   
                        </CardArea>
               
                    :
                        <Loader
                            type="Puff"
                            color={colors.spinner}
                            height={100}
                            width={100}
                            timeout={0} 
                        />   
                }
            </LocalArea>      
        </Container>
    );
}
