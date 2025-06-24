import React from 'react';
import { ShoppingCart } from 'lucide-react';
import '../css/CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext)

    return (
        <div className="cart-widget">
            <ShoppingCart className="cart-icon" style={{ color: '#432818' }} />
            {cartQuantity() > 0 && <span className="cart-count" style={{ color: '#432818' }}>{cartQuantity()}</span>}

        </div>
    );
};

export default CartWidget;