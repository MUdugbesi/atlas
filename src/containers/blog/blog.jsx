import React from 'react'
import './blog.css';

import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';


const Blog = () => {
    return (
        <>
            <div className='gpt3__blog__container' id='blog'>
                <div>
                    <h1 className='gradient__text gpt3__blog__section-one'>A lot is happening,<br></br>
                        We are blogging about it.</h1>
                </div>

                <div className='gpt3__blog__section-two'>
                    <div className='gpt3__blog__0'>
                        <img src={blog01} alt='blog01' />
                        <div className='gpt3__blog__01'>
                            <p>Sep 26, 2021</p>
                            <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>

                            <p>Read Full Article</p></div>

                    </div>

                    <div>
                        <div className='gpt3__blog__00'>
                            <img src={blog02} alt='blog02' />
                            <div className='gpt3__blog'>
                                <p>Sep 26, 2023</p>
                                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>

                                <p>Read Full Article</p></div>

                        </div>
                        <div className='gpt3__blog__00'>
                            <img src={blog03} alt='blog03' />
                            <div className='gpt3__blog'>
                                <p>Sep 26, 2021</p>
                                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>

                                <p>Read Full Article</p></div>

                        </div>
                    </div>

                    <div>
                        <div className='gpt3__blog__00'>
                            <img src={blog04} alt='blog04' />
                            <div className='gpt3__blog'>
                                <p>Sep 26, 2021</p>
                                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>

                                <p>Read Full Article</p></div>
                        </div>
                        <div className='gpt3__blog__00'>
                            <img src={blog05} alt='blog05' />
                            <div className='gpt3__blog'>
                                <p>Sep 26, 2021</p>
                                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>

                                <p>Read Full Article</p></div>

                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Blog
