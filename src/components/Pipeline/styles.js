import styled from "styled-components";

const breakPoints = {
    md: {
        value: 780
    },
    sm: {
        value: 620
    }
}

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