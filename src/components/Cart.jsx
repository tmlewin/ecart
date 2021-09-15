import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './css/Browse.css'
import {removeFromCart} from '../redux/actions/cartActions'
import {Link} from 'react-router-dom'

export default function Cart() {
    const cart= useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const removeFromCartHandler = (product)=>{
        dispatch(removeFromCart(product))
    }
    return (
        <div className="container">
            <h1>Your Cart</h1>
            <div className="productContainer">
            {
                cart.length > 0?
                cart.map(product=>(
                    <div className="productCard" key={product.productId}>
                        <div className="imgContainer">
                            <img src={product.img} alt=""/>
                        </div>
                        <h3>{product.name}</h3>
                    <button onClick={()=>removeFromCartHandler(product.cartId)}>Remove from cart</button>

                    </div>
                   
                    
                    ))
                    :
                    <>
                    <h2 style={{marginBottom: 50}}>Looks like your cart is empty</h2>
                    <Link to="/browse" className="button">Back</Link>
                    </>
                   
            }
            </div>
            
        </div>
    )
}
