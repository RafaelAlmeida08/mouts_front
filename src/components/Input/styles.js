import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        border: none;
        margin-bottom: 20px;
        background: ${props => props.theme.colors.background};       
        height: 50px;
        font-size: 18px;
        text-align: center;
        color: ${props => props.theme.colors.inputText};
        transition: .3s width ease-in-out;
        &:focus{
            outline: none;           
        }
    }

    button {
        font-size: 16px ;
        font-weight: light;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        /* background: linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%);  */
        background: linear-gradient(to right, #1EE6B7 0%, #1CE3A0 50%, #04D775 100%);
        cursor: pointer;
        border: none;
        border-radius: 8px;
        height: 70px;   
        width: 60%; 
        transition: all 0.3s ease-in;  
        span{
            color: ${props => props.theme.colors.buttonText};          
        }
        &:hover{
            opacity: 0.5;
        }
    }

`;