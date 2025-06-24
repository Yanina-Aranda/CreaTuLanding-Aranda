import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink to='/'>
                <img src="../logo.png" alt='logo' style={{ width: '8rem' }} />
            </NavLink>
            <div>
                <NavLink style={{ fontWeight: "bold", textDecoration: 'none', color: '#432818', padding: 10 }} to="/category/muebles">Muebles</NavLink>
                <NavLink style={{ fontWeight: "bold", textDecoration: 'none', color: '#432818', padding: 10 }} to="/category/puertas y ventanas">Puertas y ventanas</NavLink>
                <NavLink style={{ fontWeight: "bold", textDecoration: 'none', color: '#432818', padding: 10 }} to="/category/terminacion y acabados">Terminacion y acabados</NavLink>
            </div>
            <NavLink to='/cart'><CartWidget /></NavLink>
        </nav>
    );
};

export default NavBar;