import React, { useContext } from 'react'
import "./playout.css";
import { contextProp } from "../context/context";


const ProductLayout = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, productItems, deleteFromCart, newProductCount, totalAmount } = useContext(contextProp);
    const subTotal = totalAmount();


    return (
        <>
            <div className='product-layout'>
                <div className='display'>
                    <img src={productImage} className='imgs' style={{ width: "207px", height: "276px" }} />
                    <div className='description'>
                        <p><b>{productName}</b></p>
                        <p>N{price}</p>
                        <div className='extra'>
                            <p>size <input type="text" style={{ width: "45px", height: "20px", textAlign: "center" }} /></p>
                            <div className='conjoin'>
                                <button onClick={() => addToCart(id)}>+</button><input value={productItems[id]} onChange={(e) => newProductCount(Number(e.target.value), id)} type='text' style={{ width: "45px", height: "20px", textAlign: "center" }}></input><button onClick={() => { deleteFromCart(id) }}>-</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default ProductLayout