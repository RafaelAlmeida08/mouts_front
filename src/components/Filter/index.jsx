import { Container } from "./styles";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from "react";
import { ButtonArea } from "./styles";

export const Filter = ({label, data, setData,up, setUp}) => {

    const [ direction, setDirection ] = useState('down');

    const changeDirection = () => {
        direction === 'up' 
        ? setDirection('down')
        : setDirection('up')

        const list = [...data];
        
        if(up){
            list.sort((a,b) => (a.nome < b.nome) ? 1 : -1);
        }else{
            list.sort((a,b) => (a.nome > b.nome) ? 1 : -1);
        }
        setData(list);
        setUp(!up);
    }

    return(
        <Container>
            <ButtonArea onClick={ () => changeDirection()} >
             <span>{label}</span>
            { direction === 'up' ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/> }
            </ButtonArea>
        </Container>
    );
}