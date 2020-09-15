import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  
  .details-image{
  flex: 2 1 60rem;
  }
  .details-image img{
    max-width: 60rem;
    widows: 100%;
  }
  .details-info{
    flex: 1 1 30rem;
  }
  .details-action{
    flex: 1 1 30rem;
  }

  .details-info ul, .details-action ul{
    list-style-type: none;
    padding: 0;
  }
  .details-info li, .details-action li{
    margin-bottom: 1rem;
  }
  .back-to-result{
    padding: 1rem;
  }
  .details-action{
    border: .1rem ${props => props.theme.colors.primary} solid;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.colors.background};
    padding: 1rem;
  }
  .details-action ul li:last-child{
    display: flex;
    flex-direction: column;
  }
`;