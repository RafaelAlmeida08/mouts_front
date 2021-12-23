import styled from "styled-components";
import banner from '../../assets/images/banner.png';

const breakPoints = {    
    md: {
        value: 860
    },
    sm:{
        value: 465
    }
}

export const Container = styled.div`
 
`;

export const Botoes = styled.div`
    margin-top: 20px; 
    display: flex;
    @media(max-width: ${breakPoints.sm.value}px) {
        flex-direction: column;
    }  
`;

export const AreaBotao = styled.div`
    margin-top: 20px; 
    margin: 15px;
    
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;
export const CardArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        color: ${props => props.theme.colors.title}
    }
`;

export const Reviews = styled.div``;

