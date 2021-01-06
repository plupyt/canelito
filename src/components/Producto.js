import React from 'react'

export const Producto = () => (
    <div class="container fadeIn">
        <br />
        <h2>Producto y descripción</h2>
        <br />
        <div class="row">
            <div class="col-4">
                <img src="images/ben1.png" alt="" />
            </div>
            <div class="col-8">
                <h3>Producto Genial</h3>
                Miles de productos hay en el mercado, pero nada como una caja con gatitos.
            </div>
        </div>
        <div class="row">
            <div class="col-4 no-desk">
                <img src="images/ben2.png" alt="" />
            </div>
            <div class="col-8">
                <h3>Producto Impresionantes</h3>
                Miles de productos hay en el mercado, pero nada como una caja con gatitos.
            </div>
            <div class="col-4 no-mobile">
                <img src="images/ben2.png" alt="" />
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <img src="images/ben3.png" alt="" />
            </div>
            <div class="col-8">
                <h3>Producto Suavecito</h3>
                Miles de productos hay en el mercado, pero nada como una caja con gatitos.
            </div>
        </div>
    </div>
)

export default Producto