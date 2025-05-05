import React from 'react';
import CartWidget from './CartWidget';
import "../css/NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Origen Carpintería</div>
            <ul className="nav-links">
                <li><a href="#">Muebles</a></li>
                <li><a href="#">Puertas y ventanas</a></li>
                <li><a href="#">Decoración y acabados</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;