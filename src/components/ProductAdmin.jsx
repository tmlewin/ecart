import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addProduct} from '../redux/actions/productActions'
import {removeProduct} from '../redux/actions/productActions'
import{useState} from 'react'
import {db} from '../firebase'
import { uuidv4 } from '../lib/uuidv4'




export default function ProductAdmin() {
    const[productName,setProductName]=useState('')
    const [productImage,setProductImage]=useState('')
    const dispatch = useDispatch()
    const products = useSelector(state=>state.products)
    

    const handleSubmit = ()=>{
       const productId = uuidv4()
        db.collection('products').doc(productId).add({
            productId:productId,
            productName:productName,
            productImage:productImage
        })
        if(productName !== '' && productImage !== ''){
            dispatch(addProduct({name:productName,img:productImage}))
            setProductName('')
            setProductImage('')
            
        }
        
    }
    const handleRemove = (productId)=>{
        db.collection('products').doc(productId).delete()
        dispatch(removeProduct(productId))
      




    }


    
    return (
        <div>
            <h1>Admin</h1>
            <div className="form">
                <div className="inputBox" style={{marginBottom: 20}}>
                    <input type="text" placeholder="Product Name" value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                </div>
                <div className="inputBox" style={{marginBottom: 20}}>
                    <input type="text" placeholder="Product Image Url" value={productImage} onChange={(e)=>setProductImage(e.target.value)}/>
                </div>
                
                <button onClick={handleSubmit}>Add Product</button>
            </div>


            <div>


                
                {
                products&&
                products.map(product=>(
                    <div key={product.productId}>
                        <h3>{product.productName}</h3>
                        <img src={product.productImage} alt=""/>
                        <button onClick={()=>handleRemove(product.productId)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}







   
    

  
 
  