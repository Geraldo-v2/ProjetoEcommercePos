import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  .form-container{
  display: flex;
  flex-direction: column;
  width:32rem;
  margin-top:1rem;
  padding: 2rem;
  border: .2rem ${props => props.theme.colors.primary} solid;
  border-radius: .5rem;
  list-style-type: none;
}
.form-container li{
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
 `;