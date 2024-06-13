import React from 'react'
import './brand.css';
import google from '../../assets/google.png';
import dropbox from '../../assets/dropbox.png';
import atlassisan from '../../assets/atlassian.png';
import slack from '../../assets/slack.png';
import shopify from '../../assets/shopify.png';
const Brand = () => {
    return (
        <>
            <div className='gpt3__header__footer'>
                <a href='https://www.google.com/'><img src={google} alt='google' /></a>
                <a href="https://slack.com/"><img src={slack} alt='slack' /></a>
                <a href="https://www.atlassian.com/"><img src={atlassisan} alt='atlassian' /></a>
                <a href="https://www.dropbox.com/"><img src={dropbox} alt='dropbox' /></a>

                <a href="https://www.shopify.com/"><img src={shopify} alt='shopify' /></a>
            </div>
        </>
    )
}

export default Brand
