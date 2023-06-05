import React from 'react'
import "./navbar.css"
import Logo from "../assets/Saintvee logo.png"
import Cart from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <React.Fragment >
            <header className='nav-container'>
                <nav>
                    <Link to="../"> <img src={Logo} /></Link>
                    <div className='cart' >  <Link to="/cart" style={{ listStyle: "none", color: "#000" }} ><Cart /></Link></div>
                </nav>

            </header>

        </React.Fragment>
    )
}

export default Navbar