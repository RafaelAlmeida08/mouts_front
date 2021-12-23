import React, { useState } from "react";
import { Container, Hamburguer, LogoArea, Menu} from "./styles";
import { Link } from "react-router-dom";
import { MenuItem } from "../MenuItem";
import { ThemeToggle } from "../ThemeToggle";

export const NavBar = () => {
    const navigation = [
        { name: 'Localidades', href: '/localidades'},
        { name: 'Cidades', href: '/cidades'},
        { name: 'Contribua', href: '/editar/localidades'}   
    ];

    const [ isOpen, setIsOpen] = useState(false);

    return(
        <Container>            
            <LogoArea onClick={ () => setIsOpen(false)}>
                <Link to="/">
                    Rafael
                    <span>Dev</span>
                </Link>
            </LogoArea>
            <Hamburguer onClick={ () => setIsOpen(!isOpen) }>
                <span />
                <span />
                <span />
            </Hamburguer>
            <Menu isOpen={isOpen} >
                {navigation.map( (item) => (
                    <Link onClick={() => setIsOpen(false)}  key={item.name} to={item.href} >
                        <MenuItem text={item.name} select={true}/>                      
                    </Link>                    
                ))}          
                <ThemeToggle menu={isOpen} openMenu={setIsOpen} />                   
            </Menu>
            
        </Container>
    );
}