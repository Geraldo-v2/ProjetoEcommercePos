import React, { Component } from  'react';

import {GridContainer} from './styles/screen_styles/App.styles'

import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalSyle from './styles/global';
import SwitchTheme from './components/switchTheme';

import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from  './screens/ProductsScreen';
import { useSelector } from 'react-redux';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';

function App() {
    const [theme, setTheme] = usePersistedState('theme', light);

    const toggleTheme = () =>{
        setTheme(theme.title === 'light' ? dark : light);
    };

    const userSignin = useSelector(state=> state.userSignin);
    const {userInfo} = userSignin;
    
    
    const openMenu = () =>{
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () =>{
        document.querySelector(".sidebar").classList.remove("open");
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalSyle/>
            <BrowserRouter> 
                <GridContainer>
                <header>
                    <div className= "brand">
                        <button onClick={openMenu}>
                            &#9776;
                        </button>
                        <Link to="/">gohorse.br</Link>
                    </div>
                    <div className="header-links">
                        <Link to="/cart/:id?">Carrinho</Link>
                        {
                            userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                            <Link to="/signin">Entrar</Link>
                        }
                        {userInfo && userInfo.isAdmin && (
                            <div className="dropdown">
                                <a href="#" className="dropdown">Administrador</a>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="/orders">Pedidos</Link>
                                        <Link to="/products">Produtos</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <SwitchTheme toggleTheme={toggleTheme}/>
                </header>
                <aside className="sidebar">
                    <h3>Categorias</h3>
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                    <ul className="categories">
                        <li>
                            <Link to="/category/Selas">Selas e Arreios</Link>
                        </li>
                        <li>
                            <Link to="/category/Calcados">Calçados</Link>
                        </li>
                        <li>
                            <Link to="/category/Chapeus">Chapéus</Link>
                        </li>
                        <li>
                            <Link to="/category/Coletes">Coletes</Link>
                        </li>
                        <li>
                            <Link to="/category/Camisas">Camisas</Link>
                        </li>
                        <li>
                            <Link to="/category/Canivetes">Canivetes</Link>
                        </li>
                        <li>
                            <Link to="/category/Calcas">Calças</Link>
                        </li>
                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                    <Route path="/orders" component={OrdersScreen}/>
                    <Route path="/profile" component={ProfileScreen} />
                    <Route path="/order/:id" component={OrderScreen} />
                    <Route path="/products" component={ProductsScreen}/>
                    <Route path="/shipping" component={ShippingScreen}/>
                    <Route path="/payment" component={PaymentScreen}/>
                    <Route path="/placeorder" component={PlaceOrderScreen}/>
                    <Route path="/signin" component={SigninScreen}/>
                    <Route path="/register" component={RegisterScreen}/>
                    <Route path="/product/:id" component={ProductScreen}/>
                    <Route path="/cart/:id?" component={CartScreen}/>
                    <Route path="/category/:id" component={HomeScreen}/>
                    <Route path="/" exact={true} component={HomeScreen}/>
                    
                    </div>
                </main>
                <footer className="footer">
                <li>Todos os direitos reservados</li> 
                <li>IFSP Pós Desenvolvimento Web</li>
                </footer>
                </GridContainer>
            </BrowserRouter>
        </ThemeProvider>
    );
}
export default App;