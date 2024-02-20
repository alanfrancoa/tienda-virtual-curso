import {Link} from 'react-router-dom'
import {useContext, useState} from 'react'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'

const CheckOut = ({}) => {

  const [ordenId, setOrdenId] = useState('')

  const {vaciarCarrito} = useContext(CartContext)
  const [modalVisible, setModalVisible] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    apellido: '',
    telefono: '',
  })
  
  const generarOrden = () => {
    //Generamos un num random para simular el id de orden.
    const randomID = Math.floor(Math.random()*1000000)
    setOrdenId(randomID)
    setModalVisible(true)
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //ejecuta la funcion de generar un ID de Orden
    generarOrden()
    //Ejecuta la funcion de limpiar carrito, traida del contexto.
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Orden de compra generada con exito.",
      text: "Sugerimos que copie el numero de orden emitido.",
      showConfirmButton: 'false',
      timer: 1500
    });
  }
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData,
    [name]: value})
  }

  const closeModal = () => {
    setModalVisible(false)

    setOrdenId('')

    setFormData({
      email: '',
      nombre: '',
      apellido: '',
      telefono: '',
    })
    vaciarCarrito()
  }

  return (
    <div className="container" >
      <h3>Terminar compra</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="email">E-mail:</label>
          <input className='form-control' type='email' id='email' name='email' required value={formData.email} onChange={handleChange}/>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="nombre">Nombre:</label>
          <input className='form-control' type='text' id='nombre' name='nombre' required value={formData.nombre } onChange={handleChange}/>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="apellido">Apellido:</label>
          <input className='form-control' type='text' id='apellido' name='apellido' required value={formData.apellido} onChange={handleChange}/>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="telefono">Telefono:</label>
          <input className='form-control' type='' id='telefono' name='telefono' required value={formData.telefono} onChange={handleChange}/>
        </div>
         <div className="form-group mt-3">
          <Link to='/cart' className='btn btn-info'>Volver al carrito</Link>
          <button type='submit' className='btn btn-success float-end'>Finalizar Compra</button>
        </div>
      </form>
      {
        ordenId && (
          <div className={`mt-4 ${modalVisible ? 'modal-visible' : 'modal-hidden'}`}>
            <h5>Orden generada con exito!</h5>
            <p>Numero de orden: {ordenId}</p>
            <p>Email: {formData.email}</p>
            <button className='btn btn-danger' onClick={closeModal}>Cerrar</button>
          </div>
        )
      }
    </div>

  )
}

export default CheckOut