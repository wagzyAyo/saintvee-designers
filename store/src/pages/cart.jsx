import React, { useContext } from 'react'
import { PRODUCTS } from "../components/Products"
import ProductLayout from '../components/ProductLayout';
import { contextProp } from "../context/context";
import { useNavigate } from 'react-router-dom';

const cart = (props) => {
    const { productItems, totalAmount } = useContext(contextProp);
    const subTotal = totalAmount();

    const navigate = useNavigate();




    return (
        <div className='cart-items'>
            {PRODUCTS.map((product, id) => {
                if (productItems[product.id] !== 0) {
                    return (<div key={id}><ProductLayout data={product} /></div>)
                }
            })}
            {subTotal > 0 ? (
                <div className='check-out'>
                    <p><b>subtotal: N{subTotal}</b></p>

                    <div className='check-out-flex'>
                        <button className='check-sec' onClick={() => navigate("/")}>continue shopping</button>
                        <button className='check-primary'>proceed to payment</button>
                    </div>
                </div>
            ) : (
                <h2>Your cart is empty</h2>
            )}

        </div>
    )
}

export default cart