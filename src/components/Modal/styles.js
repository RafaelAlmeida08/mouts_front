import styled from "styled-components";


const breakPoints = {    
    md: {
        value: 860
    },
    sm:{
        value: 465
    }
}


export const Container = styled.div`

    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const AreaBotoes = styled.div`
    display: flex;
    div{
        div{
            margin-top: 20px; 
            margin: 15px;
        }       
    }
    @media(max-width: ${breakPoints.sm.value}px) {
        flex-direction: column;
    }  
`;


export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400;
    boxShadow: 24;
    padding: 4;
`;