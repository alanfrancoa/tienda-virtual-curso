import { useState, createContext, useEffect } from "react"
import Swal from 'sweetalert2'

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(init)

    useEffect(()=> {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const addToCart = (item) => {
        setCarrito([... carrito, item])
    }
    console.log(carrito)

    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.counter, 0)
    }
    const precioTotal = () => {
        return carrito.reduce((acc, prod) => {
            if(prod.price !== undefined && prod.counter !== undefined && typeof prod.price === 'number' && typeof prod.counter === 'number'){
                return acc + prod.price * prod.counter;
            }
        }, 0) 
    }

    const removeItem = (itemId) => {
        const newItem = carrito.filter((prod)=> prod.id !== itemId)
        setCarrito(newItem)
        Swal.fire({
            icon: "warning",
            title: "Item eliminado",
            text: "Producto eliminado satisfactoriamente.",
          });
    }
    const vaciarCarrito = () => {
        setCarrito([])
        Swal.fire({
            icon: "warning",
            title: "Carrito limpio",
            text: "Se han eliminado los productos de su carrito.",
          });
    }
    const modifyItem = (itemId, newCantidad) => {
        console.log(`ItemID: ${itemId}, newCantidad: ${newCantidad}`)
        const updateCarrito = carrito.map((prod)=>{
            if (prod.id === itemId)
            {return {...prod, counter: newCantidad}}
            return prod
        })
        setCarrito(updateCarrito)
    }
    return (
        <CartContext.Provider value={{
            precioTotal,
            removeItem,
            modifyItem,
            vaciarCarrito,
            carrito,
            addToCart,
            calcularCantidad

        }}>
            {children}
        </CartContext.Provider>
    )
}