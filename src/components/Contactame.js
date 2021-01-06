import React from 'react'

export const Contactame = () => (
    <div>
        <div className="container">
            <h2 className="socialNetwork__title">Estas son las formas de contactarme</h2>
            <div className="socialNetwork__container">
                <div className="socialNetwork__container--icons">
                    <a className="col-2" href="mailto:canelucky.crazy@gmailcom" target="_blank"><img src="images/contactame__redSocial--gmail.png" alt=""></img></a>
                    <a className="col-2" href="https://www.facebook.com/Canelucky.crazy" target="_blank"><img  src="images/contactame__redSocial--facebook.png" alt=""></img></a>
                    <a className="col-2" href="https://www.instagram.com/yamiycanelits/" target="_blank"><img src="images/contactame__redSocial--instagram.png" alt=""></img></a>
                </div>
            </div>
        </div>
    </div>
)

export default Contactame