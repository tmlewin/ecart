import React from 'react'
import {useSelector} from 'react-redux'
import{useState} from 'react'
import './css/Search.css'
import {useDispatch} from 'react-redux'
import {addToCart} from '../redux/actions/cartActions'



export default function Search() {
    const[queried,setQueried] = useState(null)
    const products = useSelector(state =>state.products)
    const dispatch = useDispatch()

    const addToCartHandler = (product)=>{
        dispatch(addToCart(product))
    }

    const handleSearch = (e) => {
        let results = products.filter(product=>product.name.toLowerCase().includes(e.toLowerCase()))
        setQueried(results)
        if(e == ''){
            setQueried(null)
        }
    }
    return (
        <div className="container">
            <div className="inputBox">
                <input type="text" 
                placeholder="Search...." onChange= {(e)=>{handleSearch(e.target.value)}} >
                    

                </input>
            </div>
            <div className="productContainer" style={{marginTop:50}}>
            {
                queried?
                queried.map(product=>(
                    <div className="productCard" key={product.productId}>
                        <div className="imgContainer">
                            <img src={product.img} alt=""/>
                        </div>
                        <h3>{product.name}</h3>
                    <button onClick={()=>addToCartHandler(product)}>Add to cart</button>

                    </div>
                   
                    
                    ))
                    :
                    <h2>Search to view products</h2>
            }
            </div>
            
        </div>
    )
        }
