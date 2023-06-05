import { useEffect } from 'react'
import { PRODUCTS } from "../components/Products"
import Product from '../components/Product'
import "./home.css"


const Home = (prop) => {
    return (
        <div className='product-container'  >
            {PRODUCTS.map((product, id) => (
                <div key={id}> <Product data={product} /> </div>
            ))}

        </div>
    )
}

export default Home