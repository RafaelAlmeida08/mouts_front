import styled from 'styled-components';

const breakPoints = {
    md: {
        value: 780
    },
    sm: {
        value: 620
    }
}

export const FiltroArea = styled.div`
    ul{
        display:flex;   
        flex-wrap: wrap; 
        @media(max-width: ${breakPoints.sm.value}px) {           
            padding: 0;
        }
        li{
            padding-right: 20px;
            list-style: none;       
            @media(max-width: ${breakPoints.sm.value}px) {           
            padding: 0;
            }
        }
        a{
            text-decoration: none;
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
       
    }
`;