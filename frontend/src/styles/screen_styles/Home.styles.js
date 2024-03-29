import styled from 'styled-components';

export const Filter = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 1rem auto;
  max-width: 40rem;
  justify-content: space-between;
  align-items: center;
.filter input,
.filter button,
.filter select{
  padding: 1rem;
  border-radius: 0.5rem;
  border:.1rem #c0c0c0 solid;
  font-size: 1.6rem;
}
`;

export const Products = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .products li{
  list-style-type: none;
  padding: 0;
  flex: 0 1 34rem;
  margin: 1rem;
  height: 50rem;
  border-bottom: .1rem #c0c0c0 solid;
}
.product{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.product-name{
  font-size: 2rem;
  font-weight: bold;
}
.product-brand{
  font-size: 1.2rem;
  color:#808080;
}
.product-price{
  font-size: 2rem;
  font-weight: bold;
}
.product-image{
  max-width: 34rem;
  max-height: 34rem;
}
.product-rating{
  margin-bottom: 1rem;
}
`;
