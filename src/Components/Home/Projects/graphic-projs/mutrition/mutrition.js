import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './mutrition.css'


import muTitle from './mu-title.png'
import muBlue from './label-blue.png'
import muGreen from './label-green.png'
import muYellow from './label-yellow.png'
import muPack from './mu-pack.png'

class Mutrition extends Component {


    render(){


        return(
            <div className="container">


                <Reveal effect="fadeInUp">
                    <div className="mutrition">

                    <div className="mu-title">
                        <div><img id="mu-title" src={muTitle} alt="Mutrition Title"/></div>
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