import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/paypal.css'

export const FalloCompra = () => (
    <div className="mensajePago">
        <div className="content_paypal">
            <img src="images/box_brand.png" alt="" />
            <h3>!Ouch! Tu compra no se pudo realizar.</h3>
            <p>Haz <Link to='/'>click aquí</Link> para ir al home</p>
        </div>
    </div>
)

export default FalloCompra