import styled from "styled-components";
import banner from '../../assets/images/banner.png';

const breakPoints = {    
    md: {
        value: 720
    },
    sm:{
        value: 465
    }
}

export const Container = styled.div`
 
`;

export const AlertArea = styled.div`
    display: flex;
    justify-content: center;
`;

export const LoadArea = styled.div`
    display: flex;
    justify-content: center;
`;

export const Botoes = styled.div`
    margin-top: 20px; 
    display: flex;
    @media(max-width: ${breakPoints.md.value}px) {
        flex-direction: column;
    }  
`;

export const AreaBotao = styled.div`
    margin-top: 20px; 
    margin: 15px;

    a{
        text-decoration: none;
    }
    
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

