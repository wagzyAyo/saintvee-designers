import React, { useContext, useRef } from 'react'
import "./payment.css"
import { contextProp } from "../context/context";
import emailjs from '@emailjs/browser';


const success = (props) => {
    const { totalAmount } = useContext(contextProp);
    const subTotal = totalAmount();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3g5u5oa', 'template_o7m7wg8', form.current, 'nnlIGtgE377bqJCCY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='payment-container'>

            <h2>Payment instructions</h2>
            <p>Make a payment  of <span>{subTotal}</span> to the <span> Access Bank</span> account details below  </p>
            <div className='details'>
                <p>Account Number:
                    0039874808</p>

                <p className='p2'>Account Name:
                    Victor Chuka Ezekiel</p>

            </div>

            <div className='contact'>
                <p>Contact us</p>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className='input' type="text" name="from_name" />
                    <label>Email</label>
                    <input className='input' type="email" name="from_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input className='send' type="submit" value="Send message" />
                </form>
            </div>

        </div>
    )
}

export default success