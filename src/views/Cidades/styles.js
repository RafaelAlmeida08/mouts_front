import styled from 'styled-components';

const breakPoints = {
    md: {
        value: 780
    },
    sm: {
        value: 520
    }
}

export const Container = styled.div``;

export const Content = styled.div`
    display: flex;   
    justify-content: center;    
    margin-top: 50px;
    a{
        text-decoration: none;       
    }
`;

export const CidadeDados = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;   
    h4{
        padding-left: 5px;
        color: ${props => props.theme.colors.cardDetails}
    }
`;

export const CidadeDescricao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
   
`;

export const CidadeNome = styled.div`    
    h3{
        color: ${props => props.theme.colors.cardDetails}
    }
`;

export const CidadesArea = styled.div`
    display:flex;   
    flex-wrap: wrap; 
    justify-content: center;
    svg{
       margin-top: 110px;
    }
`;

export const Cidade = styled.div`
    display:flex;
    flex-direction: column;
    margin: 25px;
    &:hover{
        opacity: 0.5;
    }
    img{
        margin-bottom: 10px;
    }   
`;

export const Bar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: ${breakPoints.sm.value}px) {
        flex-direction: column;
    }    
`;
