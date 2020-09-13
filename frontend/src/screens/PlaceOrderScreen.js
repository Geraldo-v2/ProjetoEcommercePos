import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
function PlaceOrderScreen(props) {

  const cart = useSelector(state => state.cart);
  const orderCreate = useSelector(state => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const { cartItems, shipping, payment } = cart;
  
  if (!shipping.endereco) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice;
  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // create an order
    dispatch(createOrder({
      orderItems: cartItems, shipping, payment, itemsPrice, shippingPrice,totalPrice
    }));
  }
  useEffect(() => {
    if (success) {
      props.history.push("/order/" + order._id);
    }
  }, [success]);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }
  return <div>
    <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3>
            Endereço para Entrega
          </h3>
          <div>
          {cart.shipping.endereco}, {cart.shipping.numero}, 
          {cart.shipping.bairro}, {cart.shipping.cep}, 
          {cart.shipping.cidade}, {cart.shipping.estado},
          </div>
        </div>
        <div>
          <h3>Pagamento</h3>
          <div>
            Método de Pagamento: {cart.payment.paymentMethod}
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3>
                Carrinho de Compras
          </h3>
              <div>
                Preço
          </div>
            </li>
            {
              cartItems.length === 0 ?
                <div>
                  Carrinho está vazio
          </div>
                :
                cartItems.map(item =>
                  <li>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>
                          {item.name}
                        </Link>
                      </div>
                      <div>
                        Qtd: {item.qty}
                      </div>
                    </div>
                    <div className="cart-price">
                      R${item.price}
                    </div>
                  </li>
                )
            }
          </ul>
        </div>
      </div>
      <div className="placeorder-action">
        <ul>
          <li>
            <button className="button primary full-width" onClick={placeOrderHandler} >Pagamento</button>
          </li>
          <li>
            <h3>Resumo do Pedido</h3>
          </li>
          <li>
            <div>Itens</div>
            <div>R${itemsPrice}</div>
          </li>
          <li>
            <div>Envio</div>
            <div>R${shippingPrice}</div>
          </li>
          <li>
            <div>Taxa</div>
            <div>R${taxPrice}</div>
          </li>
          <li>
            <div>Total do Pedido</div>
            <div>R${totalPrice}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
}
export default PlaceOrderScreen;