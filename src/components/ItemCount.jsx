import { useState } from 'react'
import "../css/ItemCount.css";
//imports arriba del componente
const ItemCount = ({ stock, onAdd }) => {
    //logica, funciones, hook
    //declaracion del hook
    const [count, setCount] = useState(1)

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const sumar = () => {
        if (count < stock) {

            setCount(count + 1)
        }
    }

    // const comprar = () => {
    //     onAdd(count)
    // }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <div>
                <button onClick={restar} >-</button>
                <span style={{ margin: 17 }}>{count}</span>
                <button onClick={sumar} >+</button>
            </div>
            {/* <button className='btn btn-primary' onClick={comprar} >Agregar al carrito</button> */}
            <button onClick={() => onAdd(count)} className="btn btn-primary" >Agregar al carrito</button>
        </div>
    )
}
//exportamos el componente
export default ItemCount