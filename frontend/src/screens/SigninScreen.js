import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { signin } from '../actions/userActions';
import {Form} from '../styles/screen_styles/Form.styles'

function SigninScreen (props){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state=>state.userSignin);
    const { loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';

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
        dispatch(signin(email,password));
    }

    return <Form>
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Entrar</h2>
                </li>
                <li>
                    {loading && <div>Carregando...</div>}
                    {error && <div>{error}</div>}
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
                    <button type="submit" className="button primary">Entrar</button>
                </li>
                <li>
                   Novo na GoHorse?
                </li>
                <li>
                    <Link to={redirect === "/" ? "register": "register?redirect=" + redirect} className="button secondary text-center">Entre para cavalaria, crie sua conta!</Link>
                </li>
            </ul>

        </form>
    </Form>
}
export default SigninScreen;