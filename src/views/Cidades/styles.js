import styled from 'styled-components';

const breakPoints = {
    md: {
        value: 780
    }
}

export const Container = styled.div`
    margin-left: 20px;   
`;

export const Filtro = styled.ul``;

export const ItemFiltro = styled.li``;

export const FiltroArea = styled.div`
    ul{
        display:flex;   
        flex-wrap: wrap; 
        li{
            padding-right: 20px;
            list-style: none;       
        }
        a{
            text-decoration: none;
        }
        span{
            color: ${(props) => props.theme.colors.menuItem};
            font-size: 24px;
            cursor: pointer;
            transition: all 0.3s ease-in;
            &:hover{
                color: red;            
            }
        }
        @media(max-width: ${breakPoints.md.value}px) {
            justify-content: center;
        }    
    }
`;

export const CidadeDados = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;
    margin-top: -0.45rem;
    h4{
        padding-left: 5px;
        color: ${props => props.theme.colors.cardDetails}
    }
`;

export const CidadeDescricao = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
   
`;

export const CidadeNome = styled.div`
    margin-top: -7px;
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
