import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='gpt3__footer__container'>
            <div>
                <h1 className='gpt3__footer__text gradient__text'>Do you want to step in to the future before others</h1>
            </div>
            <div className='gpt3__footer__button'>
                <p>Request Early Access</p>
            </div>
            <div className='gpt3__footer__links'>
                <div className='gpt3__link__header'>
                    <img src='' />
                    <p>Crechterwoord K12 182 DK<br></br> Alknjkcb, All Rights Reserved</p>
                </div>

                <div className='gpt3__link'>
                    <h3>Links</h3>
                    <ul>
                        <li> <a href="#h">Overons</a> </li>
                        <li> <a href="#h">Social Media</a> </li>
                        <li> <a href="#h">Counter</a> </li>
                        <li> <a href="#h">Contact</a> </li>
                    </ul>
                </div>

                <div className='gpt3__link'>
                    <h3>Company</h3>

                    <ul>
                        <li> <a href="#h">Terms and Conditions</a> </li>
                        <li> <a href="#h">Privacy Policy</a> </li>
                        <li> <a href="#h">About Us</a> </li>
                        
                    </ul>

                </div>

                <div className='gpt3__link'>
                    <h3>Get in touch</h3>

                    <ul>
                        <li> <a href="#h">Marvy__design</a> </li>
                        <li> <a href="#h">07920-695-808</a> </li>
                        <li> <a href="#h">info@payme.net</a> </li>
                        
                    </ul>

                </div>
            </div>

            <div className='gpt3__footer'>
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
