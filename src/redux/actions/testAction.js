import  {ADD_TO_CART,REMOVE_FROM_CART} from '../types/cartTypes';
import {uuidv4} from '../utils/uuidv4';


export const addToCart = (item)=>async(dispatch)=>{
    
    dispatch({
        type:ADD_TO_CART,
        payload:{
            name:item.name,
            img:item.img,
            productId:item.id,
            cartId:uuidv4() 
        }
    })
}


export const removeFromCart = (cartId)=>async(dispatch)=>{
    dispatch({
        type:REMOVE_FROM_CART,
        payload:cartId
    })
}


