import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './eightmag.css';

import PZ2 from './pz2.png';
import PZ3 from './pz3.png';
import PZ1 from './pz1.png';
import PZ4 from './pz4.png';

import L1 from './l1.png';
import L2 from './l2.png';
import L3 from './l3.png';
import L4 from './l4.png';




class Shift extends Component {


    render(){


        return(
            <div className="container">


                <Reveal effect="fadeInUp">
                    <div className="eightmag">

                    <div className="eightmag-container">
                    <h1 className="proj-heading">1920s Series</h1>

                    <p className="proj-text">
                    A series of magazines revolving around a few artists during the 1920s.
                    </p>

                    <h1 className="proj-heading">Piet Zwart</h1>
                    <div><img id="a-mag" src={PZ1} alt="Piet Zwart Print 1"/></div>
                    <div><img id="a-mag" src={PZ2} alt="Piet Zwart Print 2"/></div>
                    <div><img id="a-mag" src={PZ3} alt="Piet Zwart Print 3"/></div>
                    <div><img id="a-mag" src={PZ4} alt="Piet Zwart Print 4"/></div>

                    <h1 className="proj-heading">El Lissitzky</h1>
                    <div><img id="a-mag" src={L1} alt="El Lissitzky Print 1"/></div>
                    <div><img id="a-mag" src={L2} alt="El Lissitzky Print 2"/></div>
                    <div><img id="a-mag" src={L3} alt="El Lissitzky Print 3"/></div>
                    <div><img id="a-mag" src={L4} alt="El Lissitzky Print 4"/></div>
                    </div>

                    </div>
                </Reveal>   

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionEightMag} className="exit-button" id="o-button">
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