import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { signin } from '../actions/userActions';
import { saveOrder, listOrders, deleteOrder } from '../actions/orderActions';

function OrdersScreen (props){
    const orderList = useSelector(state=>state.orderList);
    const {loading, orders, error} = orderList;
    
    const orderDelete = useSelector(state=>state.orderDelete);
    const { loading: loadingDelete, success: successDelete, error:errorDelete} = orderDelete;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listOrders());
        return ()=>{
            //
        };
    }, [successDelete]);
    
    const deleteHandler = (order) => {
        dispatch(deleteOrder(order._id));
    }

    return loading ? <div>Loading...</div> :
    <div className="content content-margined">

        <div className="order-header">
            <h3>Pedidos</h3>
        </div>
        <div className="order-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data</th>
                        <th>Total</th>
                        <th>Usuário</th>
                        <th>Foi Pago?</th>
                        <th>Pago Quando?</th>
                        <th>Foi Enviado?</th>
                        <th>Enviado Quando?</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order=>(<tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.createdAt}</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.user.name}</td>
                        <td>{order.isPaid.toString()}</td>
                        <td>{order.paidAt}</td>
                        <td>{order.isDelivered.toString()}</td>
                        <td>{order.deliveredAt}</td>
                        <td>
                            <Link to={"/order/" + order._id} className="button secondary">Detalhes</Link>
                            {' '}
                            <button type="button" onClick={()=>deleteHandler(order)} className="button secondary">Deletar</button>
                        </td>
                    </tr>))}    
                </tbody>
            </table>
        </div>
    </div>
}
export default OrdersScreen;