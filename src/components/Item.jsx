import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({ prod }) => {
    return (
        <div style={{ width: '18rem', alignSelf: 'center', marginTop: 5 }}>
            <img src={prod.img} alt={prod.name} />
            <div>
                <h5>{prod.name}</h5>
                <p>${prod.price},00</p>
                {/* <Link to={'/item/'+prod.id} className="btn btn-primary">Ver más</Link> */}
                <Link to={`/item/${prod.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default Item