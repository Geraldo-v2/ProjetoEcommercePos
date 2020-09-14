import styled from 'styled-components';

export const GridContainer = styled.div`
display: grid;
grid-template-areas:
"header"
"main"
"footer";
grid-template-columns: 1fr;
grid-template-rows: 2rem 1fr 5rem;
height: 100%;

header{
  grid-area: header;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}
.brand a{
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
}
.header-links a{
  color: #ffffff;
  text-decoration: none;
  margin-left: 1rem;

}
.header-links a:hover{
  color: #ff8000;
}
.main{
  grid-area: main;
}
.footer{
  grid-area: footer;
  background-color: #203040;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}
a{
  text-decoration: none;
}
a:hover{
  color:#ff8000;
}
.brand button{
  font-size: 3rem;
  padding: .5rem;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
}
.sidebar{
  position: fixed;
  transition: all .5s;
  transform: translateX(-30rem);
  width: 30rem;
  background-color: #f0f0f0;
  height: 100%;
}
.sidebar.open{
  transform: translateX(0);
}
.sidebar-close-button{
  border-radius: 50%;
  border: .1rem #000000 solid;
  width: 3rem;
  height: 3rem;
  padding: .5rem;
  font-size: 2rem;
  padding-top: 0;
  cursor: pointer;
  position: absolute;
  right: .5rem;
  top: 1.5rem;
}
`;
