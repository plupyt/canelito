import React from 'react'

export const Header = () => (
    <nav className="fadeInDown">
        <a href="./Canelito.js"><img src="images/loguito.png" className="logo-image" alt="logo_canelito"></img></a>
        <ul>
            <li> <a href="./ConoceMas.js" >Conoce más</a></li>
            <li> <a href="adoptaUnLomito.html" >Adopta un lomito</a></li>
            <li> <a href="contactame.html" >Contáctame</a></li>
            <li> <a href="#">FAQ's</a></li>
            <li> <a href="producto.html">Producto y descripción</a></li>
        </ul>
    </nav>
);

export default Header;