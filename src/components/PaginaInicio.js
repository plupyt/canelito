import React from 'react'
import { Link } from 'react-router-dom'
import HubspotForm from 'react-hubspot-form'

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
                    <Link to='/venta1'>
                        <button className="main_btn">
                            Lo quiero
                        </button>
                    </Link>
                </div>
            </div>
            <div className="product fadeInUp">
                <div className="content">
                    <div className="image-product">
                        <img src="images/libretaportada2.png" className="libreta-image" alt=""></img>
                    </div>
                    <h3>Poster 2</h3>
                    <p>Diviértete con mi fondo de pantalla para móvil</p>
                    <Link to='/venta2'>
                        <button className="main_btn">
                            Lo quiero
                        </button>
                    </Link>
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
        <hr></hr>
        <section id="my-hbspt-form">
            <h2>Regístrate</h2>
            <div className="form-container">
                <HubspotForm 
                    portalId = '8070410' 
                    formId = '0aa65d8b-d819-4337-9ded-fa9afedfbd1f'
                    onSubmit = {() => console.log('Submit!')}
                    onReady={(form) => console.log('Form ready!')}
                    loading={<div>Loading...</div>}
                />
            </div>
        </section>
        
    </div>   
)

export default PaginaInicio