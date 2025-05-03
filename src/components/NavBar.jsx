import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
            <div className="text-xl font-bold">MiTienda</div>
            <ul className="flex gap-6">
                <li><a href="#" className="hover:underline">Inicio</a></li>
                <li><a href="#" className="hover:underline">Productos</a></li>
                <li><a href="#" className="hover:underline">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;