import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from '../containers';
import { Cta, Brand, Navbar } from '../components';
import '../App.css';

function AppBody() {
    return (
        <div className='App'>
            <div >
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 className='gradient__bg' />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    );
}

export default AppBody;