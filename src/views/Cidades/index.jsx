import { NavBar } from "../../components/NavBar";
import { Cidade, CidadeDados, CidadeDescricao, CidadeNome, CidadesArea, Container, Content, Bar } from "./styles";
import { Card } from "../../components/Card";
import { getCidades } from "../../service/api";
import cidade1 from "../../assets/images/city1.jpg";
import Loader from "react-loader-spinner";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import { SubMenu } from "../../components/SubMenu";
import { Pipeline } from "../../components/Pipeline";
import { Filter } from "../../components/Filter";
import { FilterSelect } from "../../components/FilterSelect";

export const Cidades = () => {

    const [ cidades, setCidades ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { colors } = useContext(ThemeContext);
    const [ up, setUp ] = useState(false);

    const itemsSubMenu = [        
        { name: 'Nova cidade', href: '/cadastro/cidades'},          
    ]

    useEffect( async () => {
        getCidades()
        .then( response => {
            setCidades(response)
        })
        .catch( error => console.log(error)) 
        .finally(() => setLoading(false))     
    },[])

    return(
        <Container>
            <NavBar/>
            <Bar>
                <SubMenu items={itemsSubMenu} />
                <Pipeline/>                
                <Filter                                        
                    label="Nome"
                    data={cidades}
                    setData={setCidades}
                    orderBy="nome"
                    up={up}
                    setUp={setUp}
                />                  
            </Bar>            
            <Content>
            {
                !loading ?
                <CidadesArea>
                    {
                        cidades.map((cidade) => (
                            <Cidade key={cidade.id}>
                                <Card img={cidade1} />
                                <CidadeDescricao>
                                    <CidadeNome>
                                        <h3>{cidade.nome}, </h3>
                                    </CidadeNome>
                                    <CidadeDados>
                                        <h4>RJ</h4>
                                    </CidadeDados>
                                </CidadeDescricao>
                            </Cidade>
                        ))
                    }                    
                </CidadesArea>
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