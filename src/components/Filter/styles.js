import styled from "styled-components";

export const Container = styled.div`
    
    button{
        
    }
`;

export const ButtonArea = styled.div`
    border: 1px solid #dddddd;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 50px;
    border-radius: 30px ;
    background-color: #ffffff;

    &:hover{
        border: 1px solid black; 
    }

    span{
        outline: none !important;
        background-color: #ffffff;      
    }
`;