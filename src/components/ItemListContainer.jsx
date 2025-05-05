import React from 'react';
import "../css/ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="item-container">
            <h2>{mensaje}</h2>
            {/* Aquí se renderizarán los productos más adelante */}
        </div>
    );
};

export default ItemListContainer;