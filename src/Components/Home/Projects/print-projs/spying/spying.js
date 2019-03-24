import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './spying.css'


class Shift extends Component {


    render(){


        return(
            <div className="freestyle-container">


                <Reveal effect="fadeInUp">
                    <div className="freestyle">
                        <div className="freestyle-hero" >

                        </div>

                        
                        <div className="freestyle-description">
                            <div id="hundred-width">
                                <p id="fs-description">THIS IS SHIFT  is a mockapp where users can identify instruments within a song to 
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

                            <div className="target-audience">
                                <div id="user">
                                    <div>
                                        <h3 id="fs-heading">Target Audience</h3>
                                    </div>
                                    <div>
                                    </div>
                                </div>

                                <div id="graphics">
                                    <div id="list">
                                        <p id="underline">Demographics</p>
                                        <p>Ages:15-25</p>
                                        <p>Gender: N/A</p>
                                        <p>Location: N/A</p>
                                        <p>Occupation: Producer, Artist</p>
                                        <p>Education: >= Highschool</p>
                                    </div>
                                </div>
                                
                                <div id="graphics">
                                    <div id="list">
                                        <p id="underline">Psychographics</p>
                                        <p>Musically creative</p>
                                        <p>Energetic</p>
                                        <p>Rhythmic</p>
                                        <p>Growth</p>
                                        <p>Experimental</p>
                                    </div>
                                </div>


                            </div>

                            <div className="fs-brand">
                                <div>
                                    <h3 id="fs-heading">Brand Strategy</h3>
                                    <div id="hundred-width">
                                    <p>Freestyle carries a simplistic modern
                                        lifestyle. The colors consist of Blue, Violet,
                                        Red, and Orange. These color coordinate
                                        with the theory of Synesthesia where
                                        studies have linked warmer colors with
                                        lighter sounds and cooler colors with
                                        heavier sounds. I used this theory to model
                                        my color choices throughout the app.
                                    </p>
                                    </div>

                                    <div className="fs-colors">
                                        <div className="half-container">
                                            <div>
                                                <div id="color-container">
                                                    <div id="color1"></div>
                                                </div>
                                                <p>#5291cc</p>
                                            </div>
                                            <div>
                                                <div id="color-container">
                                                    <div id="color2"></div>
                                                </div>
                                                <p>#8561a8</p>
                                            </div>
                                        </div>
                                        <div className="half-container">
                                            <div>
                                                <div id="color-container">
                                                    <div id="color3"></div>
                                                </div>
                                                <p>#cc6663</p>
                                            </div>
                                            <div>
                                                <div id="color-container">
                                                    <div id="color4"></div>
                                                </div>
                                                <p>#fab240</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="hundred-width">
                                    <p>
                                    The interface is influenced by traditional
                                    mobile platforms with sleek line work. I used
                                    line work in conjunction with sound waves. These
                                    waves have a lot of curves and movement which
                                    I wanted to capture when designing my interface. I
                                    wanted to highlight these soundwaves.
                                    </p>
                                    </div>
                                </div>

                            </div>

                            <div className="fs-sitemap">
                                <div><h3  id="fs-heading">Sitemap</h3></div>
                            </div>

     

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

export default Shift;