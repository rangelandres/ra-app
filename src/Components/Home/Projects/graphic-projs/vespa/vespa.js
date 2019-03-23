import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './vespa.css'




class Vespa extends Component {


    render(){


        return(
            <div className="container">


                <Reveal effect="fadeInUp">
                    <div className="freestyle">
                        <div className="freestyle-hero" >

                        </div>

                        
                        <div className="freestyle-description">
                            <div id="hundred-width">
                                <p id="fs-description">THIS IS VESAP  is a mockapp where users can identify instruments within a song to 
                                create new compositions. Project focused on UI/UX design and principles.
                                </p>
                            </div>



                            <div id="design-challenge">
                                <h3 id="fs-heading"> Design Challenge </h3>
                                <div id="hundred-width">
                                    <p>Give the ability to deconstruct a composition down to its instuments in order to reimagine a new sound.</p>
                                </div>
                            </div>


                            <div id="fs">

                            </div>

                            <div id="design-challenge">
                                <h3 id="fs-heading">Competition Analysis</h3>
                                <div id="hundred-width">
                                <p>No current applications exist at time of creation. I drew inspiration from; FL Studio,
                                    Garage Band, Spotify, Poweramp. These applications deal with music on the user
                                    end as well as the production side. I meshed
                                    qualities from these apps along with my ideas to create Freestyle.</p>
                                </div>
                            </div>

                            <div className="bars">
                                <div className="bar"><div id="bar1"></div></div>
                                <div className="bar"><div id="bar2"></div></div>
                                <div className="bar"><div id="bar3"></div></div>
                                <div className="bar"><div id="bar4"></div></div>
                            </div>



     

                        </div>


                    </div>
                </Reveal>   

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionVespa} className="exit-button">
                                <h2 className="button-text">X</h2>
                            </div>
                        </Reveal>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Vespa;