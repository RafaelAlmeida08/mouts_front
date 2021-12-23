import { CardArea, CategoriesList, Container, FilterArea, LeftContent, List, LocalArea } from "./styles";
import { NavBar } from "../../components/NavBar";
import { Link } from "react-router-dom";
import { Localidade } from "../../components/Localidade";

export const Localidades = () => {
    return(
        <Container>
            <NavBar />
            <FilterArea>
                <LeftContent>
                    <CategoriesList>
                        <List>
                            <li><span>Nova Localidade</span></li>
                            <li><span>Todas</span></li>
                            <li><span>Comercial</span></li>
                            <li><span>Residencial</span></li>
                            <li><span>Outros</span></li>
                        </List>
                    </CategoriesList>
                </LeftContent>
            </FilterArea>     
            <LocalArea>
                <CardArea>
                    <Link to="#">   
                        <Localidade/> 
                    </Link> 
                    <Link to="#">   
                        <Localidade/> 
                    </Link>
                    <Link to="#">   
                        <Localidade/> 
                    </Link>
                    <Link to="#">   
                        <Localidade/> 
                    </Link>
                </CardArea>
            </LocalArea>      
        </Container>
    );
}