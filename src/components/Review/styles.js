import styled from "styled-components";

const breakPoints = {
    md: {
        value: 780
    }
}; 

export const Container = styled.div`   
    padding: 20px;
`;
export const LeftArea = styled.div``;
export const RightArea = styled.div`
    font-size: 18px;
`;
export const Top = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;
export const Text = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    margin-top: 20px;
    span{        
        font-weight: 400;
        color: ${props => props.theme.colors.title}
    }
`;
export const ImageArea = styled.div`
    padding-right: 20px;
`;

export const Name = styled.div`
    span{
        color: ${props => props.theme.colors.title}
    }    
`;

export const Data = styled.div`
    span{
        color: ${props => props.theme.colors.title}
    }
`;