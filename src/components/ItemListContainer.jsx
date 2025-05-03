import React from 'react';

const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold">{mensaje}</h2>
            {/* Aquí se renderizarán los productos más adelante */}
        </div>
    );
};

export default ItemListContainer;