import styled from 'styled-components';

export const Container = styled.div`
height: 30;
background: ${props => props.theme.colors.primary};
color: #FFF;
display: flex;
align-items: center;
justify-content: space-around;
padding: 0 30px;
`;