import styled from 'styled-components';

const breakPoints = {
    md: {
        value: 780
    }
}; 


export const Container = styled.div``;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Local = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    
`;
export const Top = styled.div`
    display: flex;
    @media(max-width: ${breakPoints.md.value}px) {
        flex-direction: column;
    }
`;
export const Left = styled.div``;
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(min-width: ${breakPoints.md.value}px) {
        margin-left: 30px;  
    }
`;
export const Bottom = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: center;
`;

export const AlertArea = styled.div`
    display: flex;
    justify-content: center;
`;

export const TopContent = styled.div`
    display: flex;
    justify-content: center;
`;



