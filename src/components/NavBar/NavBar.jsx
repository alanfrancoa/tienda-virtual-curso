import './NavBar.css'
import {Link} from 'react-router-dom'
import Cart from '../Cart/Cart'
import { CiDark } from "react-icons/ci";

const NavBar = ({toggleDarkMode}) => {
  return (
    <nav>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/productos/bazar'>Bazar</Link>
        <Link className='link' to='/productos/tecnologia'>Tecnologia</Link>
        <Link className='link' to='/productos/ropa'>Ropa</Link>
        <Link className='link' to='/productos/musica'>Musica</Link>
        <Link className='link' to='/cart'><Cart /></Link>
        <CiDark className='btnBt' onClick={toggleDarkMode}  />       
    </nav>
  )
}

export default NavBar