import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { register } from '../actions/userActions';
import {Form} from '../styles/screen_styles/Form.styles'

function RegisterScreen (props){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state=>state.userRegister);
    const { loading, userInfo, error} = userRegister;
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
        return ()=>{
            //
        };
    }, [userInfo]);   

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(register(name, email,password));
    }

    return <Form>
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Criar Conta</h2>
                </li>
                <li>
                    {loading && <div>Carregando...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="name">
                        Nome
                    </label>
                    <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>   
                    </input>
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>   
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="rePassword">Repita a Senha</label>
                    <input type="Password" id="rePassword" name="rePassword" onChange={(e)=> setRePassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Registrar</button>                    
                </li>
                <li>
                    Você já tem uma conta? 
                    <Link to={redirect === "/" ? "signin": "signin?redirect=" + redirect} className="button secondary text-center">Entrar</Link>
                
                </li>
            </ul>

        </form>
    </Form>
}
export default RegisterScreen;