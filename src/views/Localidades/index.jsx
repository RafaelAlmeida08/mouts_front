import React from "react";
import { AlertArea, Bar, CardArea,  Container, LocalArea} from "./styles";
import { NavBar } from "../../components/NavBar";
import { Link } from "react-router-dom";
import { Localidade } from "../../components/Localidade";
import { SubMenu } from "../../components/SubMenu";
import { useContext, useEffect, useState } from "react";
import { getLocalidades } from "../../utils/api";
import Loader from "react-loader-spinner";
import { ThemeContext } from "styled-components";
import Alert from '@mui/material/Alert';
import { Filter } from "../../components/Filter";
import { Pipeline } from "../../components/Pipeline";
import { FilterSelect } from "../../components/FilterSelect";

export const Localidades = () => {

    const [ loading, setLoading ] = useState(true);
    const [ localidades, setLocalidades ] = useState([]);
    const { colors } = useContext(ThemeContext);
    const [ up, setUp ] = useState(false);
    const [ original, setOriginal ] = useState([]);

    const itemsSubMenu = [
        { name: 'Nova localidade', href: '/cadastro/localidades'}        
    ];

    useEffect( async () => {
       getLocalidades()
        .then( response => {
            setLocalidades(response)
            setOriginal(response)
        })
        .catch( error => console.log(error)) 
        .finally(() => setLoading(false))
    },[])

    return(
        <Container> 
            <NavBar />
            {!loading &&
                <Bar>
                    <SubMenu items={itemsSubMenu} />   
                    <Pipeline/>                         
                    <Filter                                        
                        label="Nome"  
                        data={localidades}
                        setData={setLocalidades}      
                        up={up}
                        setUp={setUp}                     
                    />    
                    <FilterSelect        
                        data={localidades}   
                        label="Cidades"
                        setData={setLocalidades}   
                        original={original}
                    />              
                </Bar>     
                }       
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
