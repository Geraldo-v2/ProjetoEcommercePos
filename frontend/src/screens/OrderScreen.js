import React, { useEffect } from 'react'
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder, detailsOrder, payOrder } from '../actions/orderActions';
import PaypalButton from '../components/PaypalButton';
import { PlaceOrder } from '../styles/screen_styles/PlaceOrder.styles';
function OrderScreen(props){
    
    const orderPay = useSelector(state => state.orderPay);
    const {loading: loadingPay, success: successPay, error: errorPay} = orderPay;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(successPay){
            props.history.push("/profile");
        }else{
            dispatch(detailsOrder(props.match.params.id));
        }
        return()=>{
        };
    }, [successPay]);

    const handleSuccessPayment = (paymentResult) =>{
        dispatch(payOrder(order, paymentResult));
    }

    const orderDetails = useSelector (state => state.orderDetails);
    const { loading, order, error} = orderDetails;
    const payHendler = () => { };

    return loading?<div>Loading ...</div>:error? <div>{error}</div>: 
    <div>
        <PlaceOrder>
            <div className="placeorder-info">
                <div>
                    <h3>
                        Endereço
                    </h3>
                    <div>
                        {order.shipping.endereco}, {order.shipping.numero}, 
                        {order.shipping.bairro}, {order.shipping.cep}, 
                        {order.shipping.cidade}, {order.shipping.estado},
                    </div>
                    <div>
                        {order.isDelivered ? "Delivered at" + order.deliveredAt: "Not Delivered."}
                    </div>
                </div>
                <div>
                    <h3>
                        Pagamento
                    </h3>
                    <div>
                        Método de Pagamento: {order.payment.paymentMethod}
                    </div>
                    <div>
                        {order.isPaid ? "Paid at" + order.paidAt: "Not Paid."}
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
                            order.orderItems.length ===0 ?
                            <div>
                                Carrinho está vazio
                            </div>
                            :
                            order.orderItems.map( item =>
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
                    <li className="placeorder-action-payment">
                        {!order.isPaid && 
                            <PaypalButton 
                                amount={order.totalPrice} 
                                onSuccess= {handleSuccessPayment}/>
                        }
                    </li>
                    <li>
                        <h3>Resumo da Compra</h3>
                    </li>
                    <li>
                        <div>Itess</div>
                        <div>R${order.itemsPrice}</div>
                    </li>
                    <li>
                        <div>Envio</div>
                        <div>R${order.shippingPrice}</div>
                    </li>
                    <li>
                        <div>Total do Pedido</div>
                        <div>R${order.totalPrice}</div>
                    </li>
                </ul> 
            </div>
        </PlaceOrder>
    </div>
}

export default OrderScreen;