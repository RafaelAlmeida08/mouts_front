import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    select{
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
`;