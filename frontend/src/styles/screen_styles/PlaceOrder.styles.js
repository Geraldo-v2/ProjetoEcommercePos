import styled from 'styled-components';

export const PlaceOrder = styled.div`

    display: flex;
    flex-grow: wrap;
    padding: 1rem;
    justify-content: space-between;

  .placeorder-info{
    flex: 3 1 60rem;
  }
  .placeorder-action{
    flex: 1 1 20rem;
    border: .1rem ${props => props.theme.colors.primary} solid;
    border-radius: .5rem;
    background-color:${props => props.theme.colors.background};
    padding: 1rem;
  }
  .placeorder-info > div {
    border: .1rem ${props => props.theme.colors.primary} solid;
    border-radius: .5rem;
    background-color: ${props => props.theme.colors.background};
    padding: 1rem;
    margin: 1rem;
  }
  .placeorder-info > div:first-child{
    margin-top: 0;
  }
  .placeorder-action > ul{
    padding: 0;
    list-style-type: none;
  }
  .placeorder-action > ul > li{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .placeorder-action > ul > li:last-child{
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme.colors.secondary};
  }
  .placeorder-action-payment > div {
    width: 100%;
  }
  `;