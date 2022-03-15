import React from 'react'
import {useSelector} from 'react-redux'
import{useState} from 'react'
import './css/Search.css'
import {useDispatch} from 'react-redux'
import {addToCart} from '../redux/actions/cartActions'



export default function Searcher() {

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const handleProducts = (product) => {
        dispatch(addToCart(product))
       
    }

    const handleSearch = (e) => {
        let searchProducts = products.filter(product => 
             product.name.toLowerCase().includes(e.toLowerCase()))
             setSearch(searchProducts)
        if(e === ''){
            setSearch(null)
        }
       

            
     

        
    }


    return (
        <div className="container">
            <div className="inputbox">
             {/* search bar */} 
              <input type="text" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} 
                 />


              </div>


               <div className="productdetails">
            {/* map the products to a card */}
            {search ? search.map(product => (
                <div className="card" key={product.productId}>
                    <div className="card-image">
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className="card-content">
                        <h3>{product.name}</h3>
                        <button className="btn" onClick={() => handleProducts(product)}>Add to Cart</button>
                    </div>
                </div>
            )) : 

            
                <h3>No Product Found</h3>
           


            
            
            }
            </div>








              
            
           
            
        </div>
    )
}

