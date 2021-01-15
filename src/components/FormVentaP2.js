import React from 'react'

export const FormVentaP2 = () => (
    <div> 
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="modulo_pago">
                        <div class="modulo_pago_images">
                            <img src="/images/libretaportada2.png" alt="" />
                        </div>
                        <h3>Poster 2</h3>
                        <p>Descarga este wallpaper para que te acompañe en tu móvil.</p>
                    </div>
                </div>
                <div class="col-8">
                    <div class="modulo_pago">
                        <form action="exito.html" method="get">
                            <label for="name">Nombre</label>
                            <br />
                            <input type="text" placeholder="" name="name" class="data" />
                            <br />
                            <label for="email">E-mail</label>
                            <br />
                            <input type="text" placeholder="" name="email" class="data" />
                            <br />
                            <label for="phone">Teléfono</label>
                            <br />
                            <input type="text" placeholder="" name="phone" class="data" />
                            <br />
                            <input type="submit" class="main_btn" name="submit" value="Confirmar pago" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
)

export default FormVentaP2