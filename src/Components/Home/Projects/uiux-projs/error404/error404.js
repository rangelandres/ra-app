import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './error404.css'

import Error1 from './error1.png';
import Error2 from './error2.png';
import Error3 from './error3.png';
import ErrorPage from './error404.png'


class Error404 extends Component {


    render(){


        return(
            <div className="container">
                    <Reveal effect="fadeInUp">
                    <div className="error">

                        <div className="error-cover">
                        </div>
                        <div className="proj-center">
                            <h1 className="proj-heading">Error: 404</h1>

                            <p className="proj-text">I designed a responsive infographic. I chose to show some facts on net neutrality and the internet. I used Adobe Muse to put my design together.</p>
                        </div>

                        <div id="hundred-width">
                        <a href="https://error404.andresrangel.dev/" target="_blank" rel="noopener noreferrer">
                        <p className="proj-text" id="site-link">Link to Error404</p>
                        </a>
                        </div>

                        <div className="proj-imgs">
                        <div><img id="error-sketch" src={Error1} alt="Error 404 Sketch 1"/></div>
                        <div><img id="error-sketch" src={Error2} alt="Error 404 Sketch 1"/></div>
                        <div><img id="error-sketch" src={Error3} alt="Error 404 Sketch 1"/></div>

                        </div>

                        <div className="smartphone">
                            <div className="content">
                            <div><img id="error-page" src={ErrorPage} alt="Error 404 Website"/></div>
                            </div>
                        </div>
                       

                    </div>
                    </Reveal>   

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionError404} className="exit-button">
                                <h2 className="button-text">X</h2>
                            </div>
                        </Reveal>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Error404;