import { Link } from 'react-router-dom'

import './CartScreen.css'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import ItemCount from '../ItemCount/ItemCount';


/*✅Agregar el componente checkOut, como seccion dentro de componente CartScreen
✅Establecer un estado de visibilidad, del modal.
Crear una funcion para manejar la apertura y cierre del Modal
Pasar info necesaria del carrito al CheckOut
Agregar un boton en el form, CheckOut, para enviar los datos y abrir el modal
Crear un componente Modal, para mostrar la informacion de resumen de compra.  */
const CartScreen = () => {

    const { carrito, precioTotal, removeItem, vaciarCarrito, modifyItem } = useContext(CartContext)



    return (
        <div className="container mt-3">
            {
                !carrito || carrito.length === 0
                    ? <>
                        <h3>Carrito vacío</h3>
                        <hr />
                        <Link to='/' className='btn btn-success'>Volver a Comprar</Link>
                    </>
                    : <>
                        <table className='miClase table text-center table-dark table-striped'>
                            <thead>
                                <tr>
                                    <th colSpan={5}>
                                        <h3>Resumen Compra</h3>

                                    </th>
                                </tr>
                                <tr>
                                    <th>Descripcion</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carrito.map((prod) => (
                                        <tr key={prod.id}>
                                            <td>
                                                <p>{prod.description}</p>
                                            </td>
                                            <td>
                                                <p>{prod.counter}</p>
                                            </td>
                                            <td>
                                                <p>{prod.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
                                            </td>
                                            <td>
                                                <ItemCount max={prod.stock} cantidad={Number(prod.counter)} modify={(newCantidad) => modifyItem(prod.id, newCantidad)} />
                                            </td>
                                            <td>
                                                <FaRegTrashCan onClick={() => removeItem(prod.id)} />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            <tr className='text-center'>
                                <td>
                                    <p>Precio total: </p>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>{precioTotal().toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
                                </td>
                            </tr>
                        </table>
                        <button className='btn btn-danger' onClick={() => vaciarCarrito()}><FaRegTrashCan /> Vaciar carrito</button>
                        <Link to='/check' className='btn btn-success float-end'>Terminar Compra</Link>
                    </>
            }

        </div>
    )
}

export default CartScreen