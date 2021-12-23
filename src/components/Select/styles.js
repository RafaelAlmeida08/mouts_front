import styled from "styled-components";

const breakPoints = {
    sm: {
        value: 380
    }
}


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    @media(max-width: ${breakPoints.sm.value}px) {
        flex-direction: column;
    }  
    label {
        color: ${props => props.theme.colors.labelSelect};
    }
    select{
        border: none;
       
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