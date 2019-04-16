import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './light.css';

import Mood from './light-poster.png';
import Webpage from './light-webpage.png'
import Layout from './layout.png';
import Layout1 from './layout1.png';
import Layout2 from './layout2.png';


class Light extends Component {


    render(){

        return(
            <div className="container">
                    <Reveal effect="fadeInUp">
                    <div className="lighthouse">
                        <div className="proj-center">
                            <h1 className="proj-heading">Project: Lighthouse</h1>

                            <p className="proj-text">I created a Webflow website that calls for action to reduce everyone’s carbon footprint.
                            </p>

                            <div id="hundred-width">
                            <a id="link-web2" href="https://projectlighthouse.andresrangel.dev/" target="_blank" rel="noopener noreferrer">
                            <p className="proj-text"> Project Lighthouse</p>
                            </a>
                            </div>

                            <h1 className="proj-heading">Layout</h1>
                            <div id="mtop"><img id="light-img" src={Layout} alt="Project Layout"/></div>
                            <h1 className="proj-heading">Cause Board</h1>
                            <div id="mtop"><img id="light-img" src={Mood} alt="Cause Board"/></div>
                            <h1 className="proj-heading">Mid Fidelity</h1>
                            <div id="mtop"><img id="light-img" src={Layout1} alt="Project Lighthouse Layout 1"/></div>
                            <div id="mtop"><img id="light-img" src={Layout2} alt="Project Lighthouse Layout 2"/></div>
                            <h1 className="proj-heading">Final</h1>
                            <div id="mtop"><img id="light-img" src={Webpage} alt="Webpage for Project Lighthouse"/></div>
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