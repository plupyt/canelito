import React from 'react'
import '../styles/paypal.css'

export const FalloCompra = () => (
    <div class="content_paypal">
        <img src="images/box_brand.png" alt="" />
        <h3>!Ouch! Tu compra no se pudo realizar.</h3>
        <p>Haz <Link to='/'>click aquí</Link> para ir al home</p>
    </div>
)

export default FalloCompra