import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addProduct} from '../redux/actions/productActions'
import {removeProduct} from '../redux/actions/productActions'
import{useState} from 'react'
import {db} from '../firebase'
import { uuidv4 } from '../lib/uuidv4'

export default function Admin() {

    const [productName,setProductName] = useState("")
    const [productImg,setProductImg] = useState("")

    const products = useSelector(state =>state.products)
    const dispatch = useDispatch()

    const handleCreateProduct = () => {
        let productId = uuidv4()
        db.collection('products').doc(productId).set({name:productName,
            productId:productId,
            img:productImg})
        

    if(productName !== '' && productImg !== '') {
        dispatch(addProduct({name: productName,img: productImg}))
        setProductName('')
        setProductImg('')
    }
}


    const handleDeleteProduct = (productId) => {
        db.collection('products').doc(productId).delete()
        dispatch(removeProduct(productId))
    }

    return (
        <div className="container">
            <div className="form">
                <div className="inputBox" style={{marginBottom: 20}}>
                    <input type="text" placeholder="product name" onChange={(e)=>{setProductName(e.target.value)}} value={productName} />
                </div>

                <div className="inputBox" style={{marginBottom: 20}}>
                    <input type="text" placeholder="product img url"  onChange={(e)=>{setProductImg(e.target.value)}} value={productImg} />
                </div>

                <button onClick={handleCreateProduct}>Add Product</button>
            </div>
            <div className="productList">
                {
                products&&
                products.map(product=>(
                    <div className="productListing">

                    <img src={product.img } alt=""/>
                    <h3>{product.name}</h3>
                    <button onClick={()=>handleDeleteProduct(product.productId)} style={{marginTop: 0, background:'#E33A8B'}}>delete</button>


                    </div>
                ))


}

            </div>

            
        </div>
    )
}
