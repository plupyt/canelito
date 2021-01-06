import React from 'react'

export const Footer = () => (
    <footer>
        <div className="option">Terminos y condiciones</div>
        <div className="contact">
            <a className="contact__social" href="https://www.facebook.com/Canelucky.crazy" target="_blank"> <img className="contact__social--image_facebook" src="images/logoFacebook.png" alt=""></img></a>
            <a className="contact__social" href="https://www.instagram.com/yamiycanelits/" target="_blank"> <img className="contact__social--image_instagram" src="images/logoInstagram.png" alt=""></img></a>
            <a className="contact__social" href="mailto:canelucky.crazy@gmailcom"><img className="contact__social--image_gmail" src="images/logoGmail.png" alt=""></img></a>
        </div>
    </footer>
)

export default Footer