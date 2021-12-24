import { Container } from "./styles";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useEffect, useState } from "react";
import { ButtonArea } from "./styles";

export const Filter = ({data, setData, filter, label}) => {

    const [ direction, setDirection ] = useState('down');

    const changeDirection = () => {
        direction === 'up' 
        ? setDirection('down')
        : setDirection('up')
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