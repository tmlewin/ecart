import { ADD_TO_CART,REMOVE_FROM_CART } from '../types/cartTypes'

export const cartReducers = (state=[], {type,payload}) => {
    switch (type) {
        case ADD_TO_CART:
            let cart = [...state,{
                name:payload.name,
                cartId:payload.cartId,
                productId:payload.productId,
                img:payload.img,
            } ]
            localStorage.setItem('cart', JSON.stringify(cart))
            return cart
            
            case REMOVE_FROM_CART:
                let modifiedCart = state.filter(item => item.cartId !== payload)
                localStorage.setItem('cart', JSON.stringify(modifiedCart))


                return modifiedCart
            
            
            default: 
            return state
    }

}