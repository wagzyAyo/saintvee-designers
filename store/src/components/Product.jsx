import React, { useEffect, useContext } from 'react'
import { contextProp } from '../context/context';



const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, productItems } = useContext(contextProp);
    const productItemAmount = productItems[id];



    return (
        <div className='products' key={id}>
            <img src={productImage} style={{ width: "200px", height: "205px" }} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>price:N{price}</p>
            </div>
            <button className='add-to-cart-btn' onClick={() => addToCart(id)}>Add to cart {productItemAmount > 0 && <>({productItemAmount})</>}</button>
        </div>
    )


}

export default Product