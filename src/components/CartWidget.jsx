import React from 'react';
import { ShoppingCart } from 'lucide-react';
import '../css/CartWidget.css';

const CartWidget = () => {
    const cartCount = 3; //se puede conectar luego a un estado global

    return (
        <div className="cart-widget">
            <ShoppingCart className="cart-icon" style={{ color: '#432818' }} />
            <span className="cart-count" style={{ color: '#432818' }}>{cartCount}</span>
        </div>
    );
};

export default CartWidget;