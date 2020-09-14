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
  padding: 2rem;
  border: .1rem #c0c0c0 solid;
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