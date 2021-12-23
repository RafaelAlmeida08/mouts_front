import styled from "styled-components";
import banner from '../../assets/images/banner.png';

const breakPoints = {    
    md: {
        value: 860
    }
}

export const Container = styled.div``;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const CardArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        color: ${props => props.theme.colors.title}
    }
`;

export const Reviews = styled.div``;

