import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const {calcularCantidad} = useContext(CartContext)
  return (
    <>
        <GiShoppingCart />
        <span>{calcularCantidad()}</span>
    </>
  )
}

export default Cart