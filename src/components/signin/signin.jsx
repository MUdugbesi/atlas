import React from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className='signin'>
            <p>Signin</p>
            <button><Link to='/'>Back</Link></button>
        </div>
    )
}

export default Signin;