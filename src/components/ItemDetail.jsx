//importar el hook useContext
import { useContext, useState } from 'react'
import ItemCount from './ItemCount'
//importar el contexto que se quiere usar
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ detalle }) => {
    //siguiendo la actividad de coder
    //const [quantity, setQuantity] = useState(0)
    //como lo recomienda 
    const [compra, setCompra] = useState(false)
    // const contexto = useContext(CartContext)
    // console.log(contexto)

    const { addItem } = useContext(CartContext)

    const onAdd = (cantidad) => {
        //setQuantity(cantidad)
        setCompra(true)
        console.log(`Compraste ${cantidad} del item ${detalle.name}`)
        //logica del carrito con contex
        addItem(detalle, cantidad)
    }
    //console.log(quantity)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>{detalle.name}</h2>
            <img src={detalle.img} alt={detalle.name} style={{ width: '200px', height: '150px' }} />
            <p>{detalle.description}</p>
            <p>${detalle.price}</p>
            <p>Stock:{detalle.stock} unidades</p>
            {/*quantity > 0 ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> : <ItemCount stock={detalle.stock} onAdd={onAdd} />*/}
            {compra
                ? <div style={{ width: '70%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link className='btn btn-dark' to='/'>Seguir comprando</Link>
                    <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
                </div>
                : <ItemCount stock={detalle.stock} onAdd={onAdd} />
            }
        </div>
    )
}

export default ItemDetail