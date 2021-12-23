import styled from "styled-components";

const breakPoints = {
    md: {
        value: 730
    },
    lg: {
        value: ''
    }
}; 

export const Container = styled.div`
    span{
        padding: 1rem 2rem; 
        cursor: pointer; 
        text-align: center; 
        text-decoration: none; 
        color: ${(props) => props.theme.colors.menuItem}; 
        font-size: 20px; 
        font-weight: light; 
        font-stretch: normal; 
        font-style: normal; 
        line-height: normal; 
        letter-spacing: normal; 
        transition: all 0.3s ease-in; 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        &:hover{ 
            color: ${(props) => props.theme.colors.menuItemHover}; 
        } 
        @media(max-width: ${breakPoints.md.value}px) { 
            margin-top: 10px;
        } 
    }
`;