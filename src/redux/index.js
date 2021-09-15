import{createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {cartReducers,productReducers} from './reducer'

import {db} from '../firebase'


let productsData = []
const productsRef = db.collection('products')

productsRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
       productsData.push(doc.data())
    });
})


const reducers = combineReducers({
cart: cartReducers,
products: productReducers

})

const middleware = [thunk]

const initialState = {
    cart:JSON.parse(localStorage.getItem('cart')) || [],
    products: productsData || [],
}

const store = createStore(reducers,initialState,compose(applyMiddleware(...middleware)))
export default store

