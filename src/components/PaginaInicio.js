import React from 'react'
import '../styles/normalize.css'
import '../styles/estilos.css'
import '../styles/mobile.css'
import '../styles/animations.css'

export const PaginaInicio = () => (
    <div>
        <h1 className="main_section fadeIn">
            ¡Hola! Soy Canelito, gracias por visitar mi página web.
        </h1>
        {/* Inicio productos */}
        <div className="products">
            <div className="product fadeInUp">
                <div className="content">
                    <div className="image-product">
                        <img src="images/libretaportada.png" class="libreta-image" alt=""></img>
                    </div>
                    <h3>Poster 1</h3>
                    <p>¿Te gusta esa imagen? Te invito a descargarla</p>
                    <a href="venta.html">
                        <button className="main_btn">
                            Lo quiero
                        </button>
                    </a>
                </div>
            </div>
            <div className="product fadeInUp">
                <div className="content">
                    <div className="image-product">
                        <img src="images/libretaportada2.png" className="libreta-image" alt=""></img>
                    </div>
                    <h3>Poster 2</h3>
                    <p>Diviértete con mi fondo de pantalla para móvil</p>
                    <a href="ventap2.html">
                        <button className="main_btn">
                            Lo quiero
                        </button>
                    </a>
                </div>
            </div>
        </div>
        {/* <!-- Fin productos -->
        <!-- Inicia beneficios --> */}
        <h2 class="mention_title">Conóceme</h2>
        <div class="beneficios">
            <div class="beneficio">
                <div class="content_beneficio">
                    <img src="images/patitacheto.png" alt=""></img>
                    <h3>Patitas olor a cheto</h3>
                    <p class="text_beneficio">
                        Doy pasos firmes. Sé de dónde vengo y para dónde voy.
                    </p>
                </div>
            </div>
            <div class="beneficio">
                <div class="content_beneficio">
                    <img src="images/naricita.png" alt=""></img>
                    <h3>Radar de felicidad</h3>
                    <p class="text_beneficio">
                        Con mi olfato canino detecto la felicidad convertida en comida.
                    </p>
                </div>
            </div>
            <div class="beneficio">
                <div class="content_beneficio">
                    <img src="images/orejita.png" alt=""></img>
                    <h3>Orejitas esponjocitas</h3>
                    <p class="text_beneficio">
                        Sirven para detectar si abres una bolsa de galletas.
                    </p>
                </div>
            </div>
        </div>
        {/* <!-- Fin beneficios --> */}
    </div>   
)