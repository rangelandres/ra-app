import React, { Component } from 'react';


import Footer from './Footer/footer'

import './home.css';
import Hero from './hero';
import UIUX from './Projects/uiux';
import Print from './Projects/print';
import Graphic from './Projects/graphic';





class Home extends Component {

    render(){
        return(
            <div className="home">
                <Hero/>
                <UIUX />
                <Print />
                <Graphic/>
                <Footer />
            </div>

        );
    }
}

export default Home;