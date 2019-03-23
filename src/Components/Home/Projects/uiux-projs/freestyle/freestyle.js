import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Slider from "react-slick";

import './freestyle.css'

import FS from '../cover-freestyle.png'
import fsWatch from './fs-watch.png'
import fsName from './fs-name.png'
import fsLogo from './fs-logo.png'
import user from './user.png'
import siteMap from './sitemap.png'
import low1 from './low1.png'
import low2 from './low2.png'
import low3 from './low3.png'
import low4 from './low4.png'
import mid1 from './mid1.png'
import mid2 from './mid2.png'
import mid3 from './mid3.png'
import mid4 from './mid4.png'
import mid5 from './mid5.png'
import mid6 from './mid6.png'
import final1 from './final1.png'
import final2 from './final2.png'
import final3 from './final3.png'
import final4 from './final4.png'
import final5 from './final5.png'
import final6 from './final6.png'


class Freestyle extends Component {


    render(){
        const settings2 = {
            className: "fs-slider",
            lazyLoad: true,
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear"
          };

        return(
            <div className="freestyle-container">

                <Reveal effect="fadeInUp">
                    <div className="freestyle">
                        <div className="freestyle-hero" >
                            <div><img id="fs-logo" src={fsLogo} alt="Freestyle Logo"/></div>

                            <div><img id="fs-name" src={fsName} alt="Freestyle"/></div>
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


                            <div id="fs">
                                <div><img id="fs" src={FS} alt="Freestyle iPhone"/></div>
                                <div><img id="fs" src={fsWatch} alt="Freestyle iWatch"/></div>

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
                                        <img id="fs-logo" src={user} alt="Freestyle Logo"/>
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
                                <div><img id="sitemap" src={siteMap} alt="Sitemao"/></div>
                            </div>

                            <div className="fs-low-slider">
                                <div id="fs-slider-title">
                                    <h3 id="fs-heading"> Low Fidelity</h3>
                                </div>
                                <Slider {...settings2}>
                                    <div className="low-container">
                                        <div><img id="low" src={low1} alt="Low Fidelity Freestyle"/></div>
                                    </div>
                                    <div className="low-container">
                                        <div><img id="low" src={low2} alt="Low Fidelity Freestyle"/></div>
                                    </div>
                                    <div className="low-container">
                                        <div><img id="low" src={low3} alt="Low Fidelity Freestyle"/></div>
                                    </div>
                                    <div className="low-container">
                                        <div><img id="low" src={low4} alt="Low Fidelity Freestyle"/></div>
                                    </div>

                                </Slider>

                            </div>

                            <div className="fs-low-slider">
                                <div id="fs-slider-title">
                                    <h3 id="fs-heading"> Mid Fidelity</h3>
                                </div>
                                <Slider {...settings2}>
                                    <div className="mid-container">
                                        <div><img id="mid" src={mid1} alt="Mid Fidelity"/></div>
                                    </div>
                                    <div className="low-container">
                                        <div><img id="mid" src={mid2} alt="Mid Fidelity"/></div>
                                    </div>
                                    <div className="low-container">
                                        <div><img id="mid" src={mid3} alt="Mid Fidelity"/></div>
                                    </div>
                                    <div className="low-container">
                                        <div><img id="mid" src={mid4} alt="Mid Fidelity"/></div>
                                    </div>
                                    <div className="low-container">
                                        <div><img id="mid" src={mid5} alt="Mid Fidelity"/></div>
                                    </div>
                                    <div className="low-container">
                                        <div><img id="mid" src={mid6} alt="Mid Fidelity"/></div>
                                    </div>
                                </Slider>
                            </div>

                            <div className="fs-low-slider">
                                <div id="fs-slider-title">
                                    <h3 id="fs-heading"> Final</h3>
                                </div>
                                <Slider {...settings2}>
                                    <div className="final-container">
                                        <div><img id="mid" src={final1} alt="Mid Fidelity"/></div>
                                    </div>
                                    <div className="final-container">
                                        <div><img id="mid" src={final2} alt="Mid Fidelity"/></div>
                                    </div>
                                    <div className="final-container">
                                        <div><img id="mid" src={final3} alt="Mid Fidelity"/></div>
                                    </div>
                                    <div className="final-container">
                                        <div><img id="mid" src={final4} alt="Mid Fidelity"/></div>
                                    </div>
                                    <div className="final-container">
                                        <div><img id="mid" src={final5} alt="Mid Fidelity"/></div>
                                    </div>
                                    <div className="final-container">
                                        <div><img id="mid" src={final6} alt="Mid Fidelity"/></div>
                                    </div>
                                </Slider>
                            </div>

                        </div>


                    </div>
                </Reveal>   

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionFS} className="exit-button">
                                <h2 className="button-text">X</h2>
                            </div>
                        </Reveal>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Freestyle;