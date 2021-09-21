import React from 'react'
import './css/Header.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Header() {
const cart = useSelector(state =>state.cart)

    return (
        <div className="header">
            <Link to="/">
                <img width={25} src="./images/logo.svg" alt="" />
                </Link>
                <div className="nav">
                    <Link to="/browse">Browse</Link>
                    <Link to="/admin">Add Product</Link>
                    <Link to="/search">

                        <img width={20} style={{ marginBottom: -50}} src="./images/search.svg" alt="" />
                    </Link>
                    
                    <Link to="/cart" >
                    <span className="cartCount">{cart.length }</span>
                    <img width={20} src="./images/cart.svg" alt="" />
                    </Link>
                </div>

            
        </div>
    )
}
