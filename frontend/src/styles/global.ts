
import { createGlobalStyle } from 'styled-components';

import Lobster from "../styles/fonts/lobster.woff2";
import Quicksand from "../styles/fonts/quicksandBold.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'Lobster';
    src: local(Lobster), url(${Lobster}) format('woff2');
  }
  @font-face {
    font-family: 'Quicksand';
    src: local('Quicksand'), url(${Quicksand}) format('woff2');
    font-style: italic;
  }

* {  
  font-size: 16px; /* 16px * 62.5 = 10px = 1rem */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-family: 'Quicksand';
  font: 1.6rem;
  height: 100vh;
  margin: 0;
}

header{
  grid-area: header;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}

#root{
  height: 100%;
}
button{
  font-family: 'Quicksand';
  font-size: 1.8rem;
}
a{
  text-decoration: none;
}
input{
  padding: 1rem;
  border: .1rem ${props => props.theme.colors.text} solid;
  border-radius: .5rem;
}
.full-width{
  width: 100%;

}
.table{
  width: 100%;
}
th{
  text-align: left;
}
tbody>tr:nth-child(odd){
  background-color: ${props => props.theme.colors.primary};
}

.content-margined{
  margin: 1rem;
}
.checkout-steps{
  display: flex;
  justify-content: space-between;
  width: 40rem;
  margin: 1rem auto;
}
.checkout-steps >div{
  border-top: .3rem #c0c0c0 solid;
  color: #c0c0c0;
  flex: 1 1;
  padding-top: 1rem;
}
.checkout-steps >div.active{
  border-top: .3rem ${props => props.theme.colors.primary} solid;
  color: ${props => props.theme.colors.primary};
}
.profile{
  display: flex;
  flex-wrap: wrap;
}
.profile-info{
  flex: 1 1 30rem;
}
.profile-orders{
  flex: 3 1 60rem;
}
.button {
  font-size: 1.5rem;
  padding: 0.2rem;
  border: 0.1rem #808080 solid;
  border-radius: 0.8rem;
  cursor: pointer;
}
.button:hover {
  border: 0.1rem ${props => props.theme.colors.text} solid;
}
.button.primary {
  background-color: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.background};
}
.button.secondary{
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
}
.text-center{
  text-align: center;
}


`;