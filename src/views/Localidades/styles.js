import styled from "styled-components";

const breakPoints = {
    md: {
        value: 780
    }
}

export const FilterArea = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: ${breakPoints.md.value}px) {
        justify-content: center;
    }    
`;

export const LeftContent = styled.div``;

export const RightContent = styled.div``;

export const CategoriesList = styled.div``;

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
        /* padding-right: 40px; */
    }
`;

export const Container = styled.div`
    /* margin-left: 20px;   */
`;

export const CardArea = styled.div`
    /* padding-right: 40px;
    padding-left: 40px; */
    display: flex;  
    flex-wrap: wrap;
    @media(max-width: ${breakPoints.md.value}px) {
        justify-content: center;
        flex-direction: column;

    }    
    
`;
