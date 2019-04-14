import React, { Component, lazy, Suspense} from 'react';

import './home.css';

import Hero from './hero';
//import UIUX from './Projects/uiux';
//import Print from './Projects/print';
//import Graphic from './Projects/graphic';
//import Footer from './Footer/footer'


const UIUX = lazy(() => import('./Projects/uiux'));
const Graphic = lazy(() => import('./Projects/graphic'));
const Print = lazy(() => import('./Projects/print'));
const Footer = lazy(() => import('./Footer/footer'));



class Home extends Component {

    render(){
        return(
            <div className="home">
                <Hero/>

                <Suspense fallback={<div>Loading.....</div>}>
                    <UIUX/>
                </Suspense>

                <Suspense fallback={<div>Loading.....</div>}>
                    <Graphic/>
                </Suspense>
                
                <Suspense fallback={<div>Loading.....</div>}>
                    <Print/>
                </Suspense>

                <Suspense fallback={<div>Loading.....</div>}>
                    <Footer/>
                </Suspense>

            </div>

        );
    }
}

export default Home;