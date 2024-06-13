import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {



    return (
        <>
            <div className='gpt3__header section__padding' id='header'>
                <div className="gpt3__header__content">
                    <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                    <p>Yet bed any for travelling assistance indulgence unpleasing.
                        Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                        Party we years to order allow asked of.</p>
                    <div className="gpt3__header__content-input">
                        <input type='email' placeholder='Enter Your Mail Address' />
                        <button><a href='/signin'>Get Started</a></button>
                    </div>


                    <div className="gpt3__header__content-people">
                        <img src={people} alt='people' />
                        <p>1600 people requested access a visit in the last 24 hours</p>
                    </div>
                </div>
                <div className='gpt3__header__content-ai'>
                    <img src={ai} alt='ai' />
                </div>
            </div>

        </>

    )
}

export default Header
