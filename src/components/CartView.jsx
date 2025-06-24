import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {
    const { cart, cartTotal, clear, removeItem } = useContext(CartContext)
    return (
        <div>
            <h2>Tu carrito 🛒</h2>
            <div>
                {/* //recorrer el carrito y mostrar lo que tiene */}
                {/* si se crea un componente CartItem */}
                {/* {cart.map((compra) => <CartItem key={compra.id} compra={compra} />)} */}
                {
                    cart.map((compra) => (
                        <div key={compra.id} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <img src={compra.img} alt={compra.name} style={{ width: '10rem' }} />
                            <span>{compra.name}</span>
                            <span>${compra.price},00</span>
                            <span>{compra.quantity}</span>
                            <span>Precio final: ${compra.price * compra.quantity},00</span>
                            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>X</button>
                        </div>
                    ))
                }
            </div>
            {/*mostrar el total a paga y borrar todo el carrito y termina la compra */}
            <span>Total a pagar ${cartTotal()},00 </span>
            <div style={{ width: '70%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button className='btn btn-danger' onClick={clear}>Borrar</button>
                <Link className='btn btn-dark' to='/checkout'>Terminar compra</Link>
            </div>
        </div>
    )
}

export default CartView