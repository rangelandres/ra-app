import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './spying.css';

import SpyPoster from '../spying.png';
import SpyPoster2 from './spy-poster2.png';


class Spying extends Component {


    render(){


        return(
            <div className="container">


                <Reveal effect="fadeInUp">
                    <div className="spying">
                    <div className="spying-container">
                    <h1 className="proj-heading">Stand Against Spying</h1>

                    <p className="proj-text">
                    Awareness poster advocating simple measures to combat possible spying.
                    </p>

                    <h1 className="proj-heading">Final</h1>
                    <div><img id="spy-poster" src={SpyPoster} alt="Stand Against Spying Poster"/></div>

                    <h1 className="proj-heading">Version 1</h1>
                    <div><img id="spy-poster" src={SpyPoster2} alt="Stand Against Spying Poster 2"/></div>

                    </div>
                    </div>
                      
                </Reveal>   

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionSpying} className="exit-button" id="o-button">
                                <h2 className="button-text" id="o-text">X</h2>
                            </div>
                        </Reveal>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Spying;