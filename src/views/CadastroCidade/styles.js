import styled from "styled-components";

export const Container = styled.div``;
export const FormArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Title = styled.div`
    display: flex;
    justify-content: center;
    color: ${props => props.theme.colors.title};
`;
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;