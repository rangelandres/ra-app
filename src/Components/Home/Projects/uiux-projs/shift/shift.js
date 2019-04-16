import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './shift.css'

import Key from './key-t.png'
import Shift1 from './s1.png'
import Shift2 from './s2.png'
import Shift3 from './s3.png'


class Shift extends Component {


    render(){


        return(
            <div className="container">


                <Reveal effect="fadeInUp">
                    <div className="shift">

                        <div className="shift-logo"> 
                        <div><img id="shift" src={Key} alt="Shift key"/></div>
                        </div>

                        <div className="proj-center" id="padding-bottom">
                            <h1 className="proj-heading">shift.</h1>

                            <p className="proj-text">
                            Redesign for a Shopify webstore. Shift is a small clothing company based in Minneapolis. 
                            </p>

                           
                            <a href="https://www.shiftyourmindclothing.com/" target="_blank" rel="noopener noreferrer">
                            <p className="proj-text" id="site-link">Link to site</p>
                            </a>

                        </div>

                        

                        <div className="proj-center" id="padding-bottom">
                            <h1 className="proj-heading">Final.</h1>
                        </div>
                        <div className="smartphone" id="smartphone-margin">
                            <div className="content">
                            <div><img id="shift-page" src={Shift1} alt="Error 404 Website"/></div>
                            </div>
                        </div>
                        <div className="proj-center" id="padding-bottom">
                            <h1 className="proj-heading">Projection.</h1>
                        </div>
                        <div className="smartphone" id="smartphone-margin">
                            <div className="content">
                            <div><img id="shift-page" src={Shift2} alt="Error 404 Website"/></div>
                            </div>
                        </div>
                        <div className="proj-center" id="padding-bottom">
                            <h1 className="proj-heading">Before.</h1>
                        </div>
                        <div className="smartphone" id="smartphone-margin">
                            <div className="content">
                            <div><img id="shift-page" src={Shift3} alt="Error 404 Website"/></div>
                            </div>
                        </div>
                    </div>
                </Reveal>   

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionShift} className="exit-button">
                                <h2 className="button-text">X</h2>
                            </div>
                        </Reveal>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Shift;