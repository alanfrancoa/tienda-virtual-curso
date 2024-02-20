import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, category, price, photo, description}) => {
    return (
        <div className='card m-1' key={id}>
            <div>
            <img src={photo} alt={photo}/>
            <h4>{description}</h4>
            <p>{category}</p>
            {/* <h4>{name}</h4>*/}
            <p>Precio: {price.toLocaleString('es-AR', {style: 'currency', currency:'ARS'})}</p>
            <div className='contador'>
                <Link className='btn btn-info m-1' to={`/detail/${id}`}>Ver mas detalles</Link>
            </div>
            {/*<p>Stock: unidades</p>*/}
            </div>
        </div>
    )
}

export default Item