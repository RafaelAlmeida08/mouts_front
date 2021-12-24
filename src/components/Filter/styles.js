import styled from "styled-components";

const breakPoints = {
    md: {
        value: 780
    },
    sm: {
        value: 620
    }
}

export const Container = styled.div`
    padding-left: 20px;
    @media(max-width: ${breakPoints.sm.value}px) {       
        padding-left: 0px;
    }  
`;

export const ButtonArea = styled.div`
    border: 1px solid ${props => props.theme.colors.filterBorder};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 50px;
    border-radius: 30px ;
    background-color: ${props => props.theme.colors.filterBackground};  
   
    &:hover{
        opacity: ${props => props.theme.colors.filterborderHover};  
    }

    span{
        outline: none ;
        color: ${props => props.theme.colors.filterTextColor};
    }       

    svg{
        color: ${props => props.theme.colors.filterTextColor};
    }
`;