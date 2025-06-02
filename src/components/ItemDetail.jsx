import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ detalle }) => {
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} del item ${detalle.name}`)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>{detalle.name}</h2>
            <img src={detalle.img} alt={detalle.name} style={{ width: '200px', height: '150px' }} />
            <p>{detalle.description}</p>
            <p>${detalle.price}</p>
            <p>Stock:{detalle.stock} unidades</p>
            <ItemCount stock={detalle.stock} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail