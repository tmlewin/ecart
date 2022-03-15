import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { cartReducers, productReducers } from '../redux/testindex';
import { db } from '../firebase';



const productRef = [];

db.collection('products')
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            productRef.push(doc.data());
        });
    });


const reducer = combineReducers({
    cart: cartReducers,
    product: productReducers
});

const middleware = [thunk];

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    product: productRef || []
}


const store = createStore(reducer, initialState, compose(
    applyMiddleware(...middleware)
   
));


export default store;

