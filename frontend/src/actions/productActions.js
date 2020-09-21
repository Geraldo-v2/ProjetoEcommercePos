import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL,
    PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_REQUEST } from "../constants/productConstants"
    import axios from "axios";
    import Axios from "axios";
    const listProducts = (category='') => async (dispatch) => {
        try{
            dispatch({ type: PRODUCT_LIST_REQUEST });
            const {data} =  await axios.get(`http://localhost:8080/backend/api/products?category=${category}`);
           
            dispatch ({ type: PRODUCT_LIST_SUCCESS,  payload: [data] });
        }
        catch(error){
            dispatch({ type: PRODUCT_LIST_FAIL,  payload: error.message });
        }
    }
    const saveProduct = (product) => async (dispatch, getState) =>{
        try {
            dispatch({type: PRODUCT_SAVE_REQUEST, payload: product});
            const {userSignin:{userInfo}} = getState();
            if(!product._id){
                const {data} = await Axios.post(`http://localhost:8080/backend/api/products`, product, {
                    headers:{
                        'Authorization': 'Bearer' + userInfo.token
                    }
                });
                dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data});
            }else{
                const {data} = await Axios.put(`http://localhost:8080/backend/api/products?ProductId=${product.ProductId}`, product, {
                    headers:{
                        'Authorization': 'Bearer' + userInfo.token
                    }
                });
                dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data});
            }
            
        } catch (error) {
            dispatch({type: PRODUCT_SAVE_FAIL, payload: error.message});    
        }
    }
    const detailsProduct = (ProductId) => async (dispatch) =>{
        try {
            dispatch({type: PRODUCT_DETAILS_REQUEST, payload: ProductId}); 
            const {data} = await axios.get(`http://localhost:8080/backend/api/products?ProductId=${ProductId}` );
            dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
        }
        catch (error){
            dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
        }
    }
    
    const deleteProduct = (ProductId) => async (dispatch, getState) =>{
        try {
            const {userSignin: {userInfo}} = getState();
            dispatch({type: PRODUCT_DELETE_REQUEST, payload: ProductId}); 
            
            const {data} = await axios.delete(`http://localhost:8080/backend/api/products?ProductId=${ProductId}` , {
                headers:{
                    'Authorization': 'Bearer '+ userInfo.token
                }
            });
            dispatch({type: PRODUCT_DELETE_SUCCESS, payload: data, succes: true});
        }
        catch (error){
            dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
        }
    }
    export{ listProducts, saveProduct, detailsProduct, deleteProduct }