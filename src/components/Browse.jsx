import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './css/Browse.css'
import {addToCart} from '../redux/actions/cartActions'

export default function Browse() {
    const products= useSelector(state=>state.products)
    const dispatch = useDispatch()
    const addToCartHandler = (product)=>{
        dispatch(addToCart(product))
    }
    return (
        <div className="container">
            <h1>Top Products</h1>
            <div className="productContainer">
            {
                products&&
                products.map(product=>(
                    <div className="productCard" key={product.productId}>
                        <div className="imgContainer">
                            <img src={product.img} alt=""/>
                        </div>
                        <h3>{product.name}</h3>
                    <button onClick={()=>addToCartHandler(product)}>Add to cart</button>

                    </div>
                   
                    
                    ))
            }
            </div>
            
        </div>
    )
}
