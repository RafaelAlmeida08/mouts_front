import styled from "styled-components";

const breakPoints = {
    md: {
        value: 780
    }
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    margin-bottom: 50px;
    &:hover{
        opacity: 0.7;
        cursor: pointer;
    }
    @media(min-width: ${breakPoints.md.value}px) {
        margin: 35px;
    }
    
`;

export const LocalArea = styled.div`   
    display: flex;
    flex-wrap: wrap;  
    @media(max-width: ${breakPoints.md.value}px) {
        justify-content: center;
    }
`;

export const LocalContent = styled.div`
    display:flex;
    justify-content: space-between;   
`;

export const LocalDataLeft = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 14px;    
    padding-left: 5px;
    width: 50%;
`;

export const Localname = styled.span`
    color: ${(props) => props.theme.colors.title};
    font-size: 20px;
`;

export const LocalDistance = styled.div`
    span{
        color: ${(props) => props.theme.colors.title};
        font-size: 14px;        
    }  
`;

export const LocalDays = styled.div`
    span{        
        color: ${(props) => props.theme.colors.title};
        font-size: 14px;
    }  
`;

export const LocalDataRight = styled.div`
    display:flex;
    align-items: start;
    justify-content: flex-end;
    padding-right: 15px;
    width: 30%;
`;

export const Localreviews = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;    
    color: ${(props) => props.theme.colors.title};    
    padding-top: 17px;
    span{
        padding-right: 5px;
       
    }
    h3{
        font-weight: normal
        
    }
`;
