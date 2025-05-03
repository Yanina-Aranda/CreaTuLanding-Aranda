import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CartWidget = () => {
    const cartCount = 3; //se puede conectar luego a un estado global

    return (
        <div className="flex items-center gap-1">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-sm font-semibold">{cartCount}</span>
        </div>
    );
};

export default CartWidget;