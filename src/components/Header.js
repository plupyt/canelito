import React from 'react';
import '../styles/Header.css'

export const Header = () => (
    <header className='header'>
        <nav className='content-container'>
            <div className='header_content'>
                <a className='header_options' href="">
                    <p className='header_options-conoceMas'>Conoce más</p>
                </a>
                <a className='header_options' href="">
                    <p className='header_options-adoptaUnLomito'>Adopta un lomito</p>
                </a>
                <a className='header_options' href="">
                    <p className='header_options-contactame'>Contáctame</p>
                </a>
                <a className='header_options' href="">
                    <p className='header_options-faqs'>FAQ's</p>
                </a>
                <a className='header_options' href="">
                    <p className='header_options-productoYDescripcion'>Producto y descripción</p>
                </a>
            </div>
            <div className='header-logo'>
                <img className='logoHeader' src="/images/loguito.png"></img>
            </div>
        </nav>
    </header>
);

export default Header;