import React from 'react'
import '../styles/paypal.css'

export const ExitoCompra = () => (
    <div className="content_paypal">
        <img src="images/loguito.png" alt="" />
        <h3>¡Muy bien! Tu descarga se realizó con éxito</h3>
        <p>Haz <Link to='/'>click aquí</Link> para ir al home</p>
    </div>
)

export default ExitoCompra