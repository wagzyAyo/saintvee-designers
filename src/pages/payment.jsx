import React, { useContext } from 'react'
import "./payment.css"
import { contextProp } from "../context/context";


const success = (props) => {
    const { totalAmount } = useContext(contextProp);
    const subTotal = totalAmount();

    return (
        <div className='payment-container'>

            <h2>Payment instructions</h2>
            <p>Make a payment  of <span>{subTotal}</span> to the account details below  </p>
            <div className='details'>
                <p>Account Number:
                    0039874808</p>

                <p className='p2'>Account Name:
                    Victor Chuka Ezekiel</p>

            </div>

        </div>
    )
}

export default success