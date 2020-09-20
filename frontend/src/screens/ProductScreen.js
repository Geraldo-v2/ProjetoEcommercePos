import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Details} from '../styles/screen_styles/Product.styles'
import { detailsProduct } from '../actions/productActions';

function ProductScreen (props){
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return ()=>{
            //
        };
    }, []);

    const handleAddToCart = () =>
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    
    return <div>
        <div className="back-to-result">
            <Link to= "/">Voltar</Link>
        </div>
        {loading? <div>Carregando...</div>:
        error? <div>{error}</div>:
        (
            <Details>
            <div className="details-image">
               <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                       <h4>{product.name}</h4> 
                    </li>
                    <li>
                        Preço: <b>${product.price}</b>
                    </li>
                    <li>
                        Descrição:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Preço: {product.price}
                    </li>
                    <li>
                        Estoque: {product.countInStock > 0? "Disponivel": "Em falta" }
                    </li>
                    <li>
                        Qtd: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                           {[...Array(product.countInStock).keys()].map(x=>
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                            )}
                        </select>
                    </li>
                    <li>
                        {product.countInStock>0 && <button onClick={handleAddToCart} className="button primary" >Adicionar no carrinho</button>
                        } 
                    </li>
                    
                </ul>

            </div>
        </Details>
        )
        }
    </div>
}
export default ProductScreen;