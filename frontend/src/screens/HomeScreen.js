import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Filter, Products} from '../styles/screen_styles/Home.styles'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen (props){
    const category = props.match.params.id ? props.match.params.id : '';
    const productList = useSelector(state => state.productList);
    const {products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(listProducts(category));
        
        return() =>{
            //
        };
    }, [category]);

    return <>
        {category &&
        <h2>{category}</h2>}
        {loading ? <div>Carregando...</div> :
        error ? <div>{error}</div>:
            <Products>
                {
                    products.map(product =>
                    <li key={product._id}>
                        <div className="product">
                        <Link to={'/product/' + product._id}>
                        <img className="product-image" src={product.image} alt="product"/>
                        </Link>
                            <div className="product-name">
                                <Link to={'/product/' + product._id}>{product.name}</Link>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">{product.price}</div>
                        </div>
                    </li>)
                }
            </Products>
        }
    </> 
   
}
export default HomeScreen;