import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import {Form} from '../styles/screen_styles/Form.styles'

function ShippingScreen (props){
    
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const dispatch = useDispatch();
  
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShipping({endereco, numero, bairro, cep, cidade, estado}));
        props.history.push('payment');
    }

    return <div>
        <CheckoutSteps step1 step2 ></CheckoutSteps>
            <Form>
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Endereço para envio</h2>
                    </li>
                    <li>
                        <label htmlFor="endereco">
                            Endereço
                        </label>
                        <input type="text" name="endereco" id="endereco" onChange={(e) => setEndereco(e.target.value)}>   
                        </input>
                    </li>
                    <li>
                        <label htmlFor="numero">
                            Numero da residência
                        </label>
                        <input type="text" name="numero" id="numero" onChange={(e) => setNumero(e.target.value)}>   
                        </input>
                    </li>
                    <li>
                        <label htmlFor="bairro">
                            Bairro
                        </label>
                        <input type="text" name="bairro" id="bairro" onChange={(e) => setBairro(e.target.value)}>   
                        </input>
                    </li>
                    <li>
                        <label htmlFor="cep">
                            CEP
                        </label>
                        <input type="text" name="cep" id="cep" onChange={(e) => setCep(e.target.value)}>   
                        </input>
                    </li>
                    <li>
                        <label htmlFor="cidade">
                            Cidade
                        </label>
                        <input type="text" name="cidade" id="cidade" onChange={(e) => setCidade(e.target.value)}>   
                        </input>
                    </li>
                    <li>
                        <label htmlFor="estado">
                            Estado
                        </label>
                        <input type="text" name="estado" id="estado" onChange={(e) => setEstado(e.target.value)}>   
                        </input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Continuar</button>
                    </li>

                </ul>
            </form>
        </Form>
    </div> 
}
export default ShippingScreen;