
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-size: 16px; /* 16px * 62.5 = 10px = 1rem */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font: 1.6rem Helvetica;
  height: 100vh;
  margin: 0;
}
#root{
  height: 100%;
}
button{
  font-size: 1.6rem;
}
input{
  padding: 1rem;
  border: .1rem #c0c0c0 solid;
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
  background-color: #f0f0f0;
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
  border-top: .3rem #f08000 solid;
  color: #f08000;
}
.dropdown{
  display: inline-block;
  position: relative;
}
.dropdown-content{
  position: absolute;
  display: none;
  right: 0;
  padding: 1rem;
  list-style-type: none;
  z-index: 1;
  background-color: #203040;
  margin:0;
  margin-top:0.4rem;
}
.dropdown:hover .dropdown-content{
  display: block;
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

`;