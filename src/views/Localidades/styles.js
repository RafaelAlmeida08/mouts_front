import styled from "styled-components";

const breakPoints = {
    md: {
        value: 780
    },
    sm: {
        value: 520
    }
}

export const FilterArea = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: ${breakPoints.md.value}px) {
        justify-content: center;
    }    
`;

export const List = styled.ul`
    display:flex;   
    flex-wrap: wrap; 
    li{
        padding-right: 20px;
        list-style: none;       
    }
    span{
        color: ${(props) => props.theme.colors.menuItem};
        font-size: 24px;
        cursor: pointer;
        transition: all 0.3s ease-in;
        &:hover{
            color: red;            
        }
    }
    @media(max-width: ${breakPoints.md.value}px) {
        justify-content: center;
    }    
`;

export const LocalArea = styled.div`   
    display: flex;   
    justify-content: center;    
    margin-top: 50px;
    a{
        text-decoration: none;       
    }
`;

export const Container = styled.div``;

export const CardArea = styled.div`
    display: flex;  
    flex-wrap: wrap;
    justify-content: center;
    @media(max-width: ${breakPoints.md.value}px) {
        justify-content: center;
        flex-direction: column;
    } 
`;

export const AlertArea = styled.div`
    display: flex;
    justify-content: center;    
    margin-top: 100px;
    
`;

export const Bar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: ${breakPoints.sm.value}px) {
        flex-direction: column;
    }    
`;

export const SubMenuArea = styled.div``;

export const Filters = styled.div``;

export const Pipe = styled.div`
    display: inline ;
    height: 20px ;
    width: 0px ;
    margin-right: 16px ;
    margin-left: 8px ;
    border-left: 1px solid ${(props) => props.theme.colors.pipe};
    transition: all 0.3s ease-in;  
    @media(max-width: ${breakPoints.sm.value}px) {
        display: none;
    }  
`;
