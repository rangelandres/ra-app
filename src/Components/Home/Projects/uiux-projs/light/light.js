import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './light.css'


class Light extends Component {


    render(){

        return(
            <div className="freestyle-container">
                    <Reveal effect="fadeInUp">
                    <div className="freestyle">
                        <div className="freestyle-hero" >
                        <h1> lIGHThOUSE</h1>

                        </div>

                        
                        <div className="freestyle-description">
                            <div id="hundred-width">
                                <p id="fs-description">Freestyle is a mockapp where users can identify instruments within a song to 
                                create new compositions. Project focused on UI/UX design and principles.
                                </p>
                            </div>

                            <div id="design-challenge">
                                <h3 id="fs-heading"> Design Challenge </h3>
                                <div id="hundred-width">
                                    <p>Give the ability to deconstruct a composition down to its instuments in order to reimagine a new sound.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                    </Reveal>   

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionLight} className="exit-button">
                                <h2 className="button-text">X</h2>
                            </div>
                        </Reveal>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Light;