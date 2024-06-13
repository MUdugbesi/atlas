import React from 'react'
import './possibility.css';
import possibility from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className='gpt3__posibilities__container' id='possibility'>

            <div className='gpt3__posibilities__section-one'>
                <img src={possibility} alt='possibilities' />
            </div>

            <div className='gpt3__posibilities__section-two'>
                <p className='gpt3__posibilities__text-one'>Request Early Access to Get Started</p>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p className='gpt3__possibilities___text-two'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                    Indulgence way everything joy alteration boisterous the attachment.
                    Party we years to order allow asked of.</p>

                <p className='gpt3__possibilities__text-three'>Request Early Access to Get Started</p>
            </div>

        </div>
    )
}

export default Possibility
