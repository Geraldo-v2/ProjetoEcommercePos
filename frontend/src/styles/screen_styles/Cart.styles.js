import styled from 'styled-components';

export const Cart = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  align-items: flex-start;

    .cart-list{
    flex: 3 1 60rem;
    }
    .cart-action{
    flex: 1 1 20rem;
    background-color: ${props => props.theme.colors.background};
    border: .1rem ${props => props.theme.colors.primary} solid;
    border-radius: .5rem;
    padding: 1rem;
    }
    .cart-list-container{
    padding: 0;
    list-style-type: none;
    padding: 1rem;
    }
    .cart-list-container li{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 1rem;
    border-bottom:.1rem #${props => props.theme.colors.primary} solid;
    }
    .cart-list-container li img{
    max-width: 10rem;
    max-height: 10rem;
    }
    .cart-list-container li:first-child{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    }
    .cart-image{
    flex: 1 1;
    }
    .cart-name{
    flex: 8 1;
    }
    .cart-price{
    flex: 1 1;
    font-size: 2.5rem;
    text-align: right;
    }

`;