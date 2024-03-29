import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {logout, update} from '../actions/userActions';
import {listMyOrders} from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';
import { orderDetailsReducer } from '../reducers/orderReducers';
import {Form} from '../styles/screen_styles/Form.styles'

function ProfileScreen(props){
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState ('');
    const dispatch = useDispatch();

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const handleLogout = () =>{
        dispatch(logout());
        props.history.push("/signin");
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(update({userId: userInfo._id, email, name, password}))
    }
    const userUpdate = useSelector(state => state.userUpdate);
    const {loading, success, error} = userUpdate;

    const myOrderList = useSelector(state => state.myOrderList);
    const { loading:loadingOrders, orders, error: errorOrders} = myOrderList;

    useEffect(()=>{
        if(userInfo){
            setId(userInfo._id);
            setName(userInfo.name);
            setEmail(userInfo.email);
            setPassword(userInfo.password);
        }
        dispatch(listMyOrders());
        return () => {
        };
    }, [])

    return <div className="profile">
        <div className="profile-info">
            <Form>
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Perfil do Usuário</h2>
                        </li>
                        <li>
                            {loading && <div>Carregando...</div>}
                            {error && <div>{error}</div>}
                            {success && <div>Perfil Salvo com Successo.</div>}
                        </li>
                        <li className="idProfile">
                            <label htmlFor="id">
                                ID
                            </label>
                            <input value={id} type="id" name="id" id="id" readonly="readonly" onChange={(e) => setId(e.target.value)}>   
                            </input>
                        </li>
                        <li>
                            <label htmlFor="name">
                                Nome
                            </label>
                            <input value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>   
                            </input>
                        </li>
                        <li>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>   
                            </input>
                        </li>
                        <li>
                            <label htmlFor="password">Senha</label>
                            <input value={password} type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <button type="submit" className="button primary">Atualizar</button>
                        </li>
                        <li>
                            <button type="button" onClick={handleLogout} className="button secondary full-width">Sair</button>
                        </li>
                    </ul>
                </form>
            </Form>
        </div>
        <div className="profile-orders content-margin">
            <h2>Compras:</h2>
            {
                loadingOrders? <div>Carregando...</div>:
                errorOrders? <div>{errorOrders}</div>:
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Total</th>
                            <th>Pagamento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.createdAt}</td>
                            <td>{order.totalPrice}</td>
                            <td>{order.lisPaid}</td>
                            <td>
                                <Link to={"/order/" + order._id}>DETALHES</Link>
                            </td>
                        </tr>)}
                    </tbody>
                </table>            
            }
        </div>
    </div>
}

export default ProfileScreen;