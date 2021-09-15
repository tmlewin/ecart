import { ADD_PRODUCT,REMOVE_PRODUCT } from '../types/productTypes'


export const productReducers = (state=[], {type,payload}) => {
    switch (type) {
        case ADD_PRODUCT:
          
            return [...state,{
                name:payload.name,
                productId:payload.productId,
                img:payload.img,
            } ]
            case REMOVE_PRODUCT:
                

                return state.filter(item => item.productId !== payload)
            
            
            default: 
            return state
    }

}