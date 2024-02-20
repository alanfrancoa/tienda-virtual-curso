import { useState } from 'react'
import './ItemDetail.css'
import { Link, useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'
import { useContext } from 'react'

const ItemDetail = ({ id, name, description, price, photo, category, stock }) => {

    const [counter, setCounter] = useState(0)
    const navigate = useNavigate()

    const volverAtras = () => {
        navigate('/')
    }

    const { addToCart } = useContext(CartContext)
    const sumarAlCarrito = () => {
        const newItem = {
            id,
            name,
            description,
            photo,
            price,
            category,
            counter, stock,
        }
        addToCart(newItem)
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className='contenedor'>
            <div>
                <img src={photo} alt={photo} className='card-img-top' />
                {/*<p className='card-text'>{name}</p> */}
                <h4>{description}</h4>
                <div className='card-body text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint praesentium facilis repellendus sit aliquid, molestiae dolor quasi excepturi, accusamus exercitationem doloremque dignissimos temporibus rem deserunt vel voluptatum officia unde.</div>
                <h5>{category}</h5>
                <div className='contador'>
                    <ItemCount max={stock} cantidad={counter} modify={setCounter} />
                </div>
                <div className='botones'>
                    <button className='btn btn-primary m-5' onClick={volverAtras}>
                        Volver atrás
                    </button> 
                    {counter > 0 &&
                        <button className='btn btn-success m-5' onClick={sumarAlCarrito}>
                            Agregar al carrito
                        </button>
                    }
                    <Link className='btn btn-info m-5' to={'/cart'}>
                        Ver carrito
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail