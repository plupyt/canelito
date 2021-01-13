import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
    <nav className="fadeInDown">
        <Link to="/"><img src="images/loguito.png" className="logo-image" alt="logo_canelito"></img></Link>
        <ul>
            <li> <Link to='/conoceMas' >Conoce más</Link></li>
            <li> <Link to='/adoptaUnLomito' >Adopta un lomito</Link></li>
            <li> <Link to='/contactame'  >Contáctame</Link></li>
            <li> <Link to='/' >FAQ's</Link></li>
            <li> <Link to='/producto'>Producto y descripción</Link></li>
        </ul>
    </nav>
);

export default Header;