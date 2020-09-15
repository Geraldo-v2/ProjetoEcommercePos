import styled from 'styled-components';

export const GridContainer = styled.div`
display: grid;
grid-template-areas:
"header"
"main"
"footer";
grid-template-columns: 1fr;
grid-template-rows: 4rem 1fr 5rem;
height: 100%;

.brand a{
  color: ${props => props.theme.colors.background};
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Lobster';
}
.header-links a{
  color: ${props => props.theme.colors.background};
  font-size: 1.3rem;
  text-decoration: none;
  margin-left: 1rem;

}
.header-links a:hover{
  color: ${props => props.theme.colors.text};
}
.main{
  grid-area: main;
}
.footer{
  grid-area: footer;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}
.footer li{
  font-size: 1.3rem;
  margin-left: 2rem;
}
a:hover{
  color:${props => props.theme.colors.secundary};
}
.brand button{
  font-size: 2rem;
  padding: .5rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.background};
  cursor: pointer;
}
.brand button:hover{
  color: ${props => props.theme.colors.secundary};
}
.sidebar{
  position: fixed;
  transition: all .5s;
  transform: translateX(-30rem);
  width: 20rem;
  background-color: ${props => props.theme.colors.secundary};
  height: 100%;
}
.sidebar h3{
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-top: 0.7rem;
  color: ${props => props.theme.colors.background}
}
.sidebar.open{
  transform: translateX(0);
}
.sidebar.open{
  transform: translateX(0);
}
.sidebar-close-button{
  border-radius: 50%;
  border: .1rem ${props => props.theme.colors.secundary} solid;
  width: 2rem;
  height: 2rem;
  padding: .3rem;
  font-size: 1rem;
  padding-top: 0;
  cursor: pointer;
  position: absolute;
  right: .5rem;
  top: 1rem;
}
.categories a{
  color: ${props => props.theme.colors.background};
  font-size: 1.5rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-top: 0.7rem;
}

.categories a:hover{
  color: ${props => props.theme.colors.primary};
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
  background-color: ${props => props.theme.colors.primary};
  margin:0;
  margin-top:0.4rem;
}
.dropdown:hover .dropdown-content{
  display: block;
}
`;
