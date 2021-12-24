import styled from "styled-components";
import banner from '../../assets/images/banner.png';

const breakPoints = {
    sm: {
        value: 500
    },
    md: {
        value: 860
    }
}

export const Container = styled.div``;

export const Center = styled.div`
    height: 86vh;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center top;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;   
    a {
        text-decoration: none;
    }
    @media(max-width: ${breakPoints.md.value}px) {
        font-size: 48px;
        height: 88vh;
    }   
`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;    
    padding: 5px;
    h1{       
        div {
            display: flex;
            flex-direction: column;           
            span {
                color: #FFFFFF;
                font-size: 58px;
                font-weight: 600;
                letter-spacing: -0.02em;
                line-height: 1.6;    
                &:nth-child(1) {
                    margin-bottom: 0px;                    
                }      
                @media(max-width: ${breakPoints.md.value}px) {
                    font-size: 48px;
                }   
                @media(max-width: ${breakPoints.sm.value}px) {
                    font-size: 38px;
                }  
            }
        }
    }

`;


export const ButtonArea = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    padding: 16px 40px 24px;
    border-radius: 60px;
    box-shadow: 0 8px 35px 0 rgba(0, 0, 0, 0.16);
    background-color: #f8f9fa;
    margin-top: 30px;
    cursor: pointer; 
    &:hover{
        opacity: 0.9
    }
    span{
        color: rgb(112, 174, 110);
        font-weight: 600;           
        font-size: 25px;      
        letter-spacing: normal;
        width: 185px;
        height: 45px;
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
