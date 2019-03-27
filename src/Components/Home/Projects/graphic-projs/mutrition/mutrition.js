import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './mutrition.css';


import muTitle from './mu-title.png';
import muBlue from './label-blue.png';
import muGreen from './label-green.png';
import muYellow from './label-yellow.png';
import muSketch from './mu-sketch.png';
import muPack1 from './mu1.png';
import muPack2 from './mu2.png';

class Mutrition extends Component {


    render(){


        return(
            <div className="container">


                <Reveal effect="fadeInUp">
                    <div className="mutrition">

                    <div className="mu-title">
                        <div><img id="mu-title" src={muTitle} alt="Mutrition Title"/></div>
                        <h1 className="proj-heading">Mutrition</h1>

                        <p className="proj-text">
                        The project was to create a brand for a water company that uses Iowa River water. We were allowed to create something satirical to portray the hazardous substances that has been found in the Iowa River located in Iowa City. I created a drink that turns you into a mutant when consumed, due to the “radioactive” ingredients found in the Iowa River.
                        </p>

                        <div>
                        <div><img id="mu-sketch" src={muSketch} alt="Mutrition Sketch"/></div>
                        </div>
                    </div>


                    <div className="mu-title" id="mu-bg">
                        <div><img id="muPrint" src={muBlue} alt="Mutrition Title"/></div>
                    </div>
                    <div className="mu-title" id="mu-bg">
                        <div><img id="muPrint" src={muGreen} alt="Mutrition Title"/></div>
                    </div>
                    <div className="mu-title" id="mu-bg">
                        <div><img id="muPrint" src={muYellow} alt="Mutrition Title"/></div>
                    </div>

            
                    <div className="mu-cover">
                    </div>

                    <div className="mu-cover2">
                    </div>

                    <div className="mu-packs">
                        <div className="muPack">
                            <div>
                            <img id="muPack" src={muPack1} alt="Mutrition Packaging 1"/>
                            </div>
                        </div>
                        
                        <div className="muPack">
                            <div>
                            <img id="muPack" src={muPack2} alt="Mutrition Packaging 2"/>
                            </div>
                        </div>
                    </div>

                    </div>
                </Reveal>   

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionMU} className="exit-button" id="g-button">
                                <h2 className="button-text" id="g-text">X</h2>
                            </div>
                        </Reveal>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Mutrition;