import styled from "styled-components";

const breakPoints = {
    sm: {
        value: '369'
    },
    md: {
        value: '860'
    },
    lg: {
        value: ''
    }
}; 

export const Container = styled.div`      
    display: flex;
    justify-content: center;
    button {
        font-size: 16px ;
        font-weight: light;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        background: linear-gradient(to right, #1EE6B7 0%, #1CE3A0 50%, #04D775 100%);
        cursor: pointer;
        border: none;
        border-radius: 8px;
        height: 70px;   
        width: 200px; 
        transition: all 0.3s ease-in;  
        span{           
            color: ${props => props.theme.colors.buttonText};          
        }
        &:hover{
            opacity: 0.5;
        }
    }
    @media(max-width: ${breakPoints.md.value}px) {
        justify-content: center;
    }   
`;