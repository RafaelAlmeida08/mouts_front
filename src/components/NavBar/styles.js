import styled from "styled-components";

const breakPoints = {
    md: {
        value: 780
    }
}; 

export const Container = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;  
    margin-bottom: 50px;
`;

export const Hamburguer = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span{
        height: 2px;
        width: 25px;       
        margin-bottom: 4px;
        border-radius: 5px;
        background: ${(props) => props.theme.colors.hamburguer};
    }
    @media(max-width: ${breakPoints.md.value}px) {
        display: flex;
    }
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: 0.2s ease-in;   
    a{
        text-decoration: none; 
    }
    @media(max-width: ${breakPoints.md.value}px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${ ({isOpen}) => (isOpen ? "300px" : "0") }            
    }
`;

export const LogoArea = styled.div`
    a{
        padding: 1rem 0;
        text-decoration: none;
        color: ${(props) => props.theme.colors.logo};
        font-weight: 800;
        font-size: 1.7rem;   
        span{
            font-weight: 300;
            font-size: 1.3rem;
        }
    }
`;