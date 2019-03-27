import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './vince.css'

import FishPrint1 from './fish-print2.png';
import FishPrint2 from './fish-print1.png';
import Model1 from './model1.png';
import Model2 from './model2.png';
import Fish1 from './fish1.png';
import Fish2 from './fish2.png';

class Vespa extends Component {


    render(){


        return(
            <div className="container">


                <Reveal effect="fadeInUp">
                    <div className="bigfish">

                    <div className="bigfish-container">
                        <h1 className="proj-heading">Album Rebrand</h1>

                        <p className="proj-text">
                        I rebranded Vince Staples’ “Big Fish Theory” album in the form of a cassette tape. This cassette tape came with special packaging and extra materials.
                        </p>

                        <div><img id="fishprint" src={FishPrint1} alt="Fish Print 1"/></div>
                        <div><img id="fishprint" src={FishPrint2} alt="Fish Print 2"/></div>
                        <div><img id="fishprint" src={Model1} alt="Fish Print 2"/></div>
                        <div><img id="fishprint" src={Model2} alt="Fish Print 2"/></div>
                        <div><img id="fishprint" src={Fish1} alt="Fish Print 2"/></div>
                        <div><img id="fishprint" src={Fish2} alt="Fish Print 2"/></div>

                    </div>
                    



                    </div>
                </Reveal>   

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionVince} className="exit-button" id="g-button">
                                <h2 className="button-text" id="g-text">X</h2>
                            </div>
                        </Reveal>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Vespa;