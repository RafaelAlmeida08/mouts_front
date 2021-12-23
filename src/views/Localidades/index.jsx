import { CardArea, CategoriesList, Container, FilterArea, LeftContent, List, LocalArea } from "./styles";
import { NavBar } from "../../components/NavBar";
import { Link } from "react-router-dom";
import { Localidade } from "../../components/Localidade";
import { SubMenu } from "../../components/SubMenu";

export const Localidades = () => {

    const itemsSubMenu = [
        { name: 'Nova Localidade', href: '/cadastro/localidades'},
        { name: 'Todas', href: '#'},
        { name: 'Comercial', href: '#'},   
        { name: 'Residencial', href: '#'},  
        { name: 'Outros', href: '#'}  
    ];

    return(
        <Container> 
            <NavBar />
            <SubMenu items={itemsSubMenu} />            
            <LocalArea>
                <CardArea>
                    <Link to="/localidade/10">   
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