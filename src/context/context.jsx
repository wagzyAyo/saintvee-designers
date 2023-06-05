import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../components/Products';

export const contextProp = createContext();

const defaultProduct = () => {
    var cart = {};
    for (let a = 1; a < PRODUCTS.length + 1; a++) {
        cart[a] = 0;
    }
    return cart;
}



const contextProvider = (props) => {
    const [productItems, setProductItems] = useState(defaultProduct());

    const addToCart = (productId) => {
        setProductItems((previousValue) => ({ ...previousValue, [productId]: previousValue[productId] + 1 }));
    };
    const deleteFromCart = (productId) => {
        setProductItems((previousValue) => ({ ...previousValue, [productId]: previousValue[productId] - 1 }));
    };

    const newProductCount = (newValue, productId) => {
        setProductItems((previousValue) => ({ ...previousValue, [productId]: newValue }))
    }

    const totalAmount = () => {
        let subtotal = 0;
        for (const item in productItems) {
            if (productItems[item] > 0) {
                let productInfo = PRODUCTS.find((product) => product.id === Number(item));
                subtotal += productItems[item] * productInfo.price
            }
        }
        return subtotal;
    };

    const contextValue = { productItems, addToCart, deleteFromCart, newProductCount, totalAmount }

    return (
        <contextProp.Provider value={contextValue}>{props.children}</contextProp.Provider>
    );
}

export default contextProvider