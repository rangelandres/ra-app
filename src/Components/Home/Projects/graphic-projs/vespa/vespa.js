import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './vespa.css';
import Logo from './vespalogo.png';
import OldLogo from './old-logo.png';
import Menu1 from './menu1.png';
import Menu2 from './menu2.png';
import Menu3 from './old1.png';
import Menu4 from './old2.png';



class Vespa extends Component {


    render(){


        return(
            <div className="container">


                <Reveal effect="fadeInUp">
                    <div className="vespa">

                        <div className="vespa-container">
                            <h1 className="proj-heading"> Red Vespa Rebrand</h1>

                            <p className="proj-text">
                            Logo redesign and brand identity for a pizza restaurant called “Red Vespa” located in Solon, IA.
                            </p>

                            <div><img id="vespa" src={Logo} alt="Vespa Logo"/></div>
                            <div><img id="vespaM" src={Menu1} alt="Vespa Menu"/></div>
                            <div><img id="vespaM" src={Menu2} alt="Vespa Menu2"/></div>
                            <div><img id="vespa" src={OldLogo} alt="Vespa Original Logo"/></div>
                            <div><img id="vespa" src={Menu3} alt="Vespa Original Menu"/></div>
                            <div><img id="vespa" src={Menu4} alt="Vespa Original Menu 2"/></div>
          
                        </div>
     

                        </div>


                </Reveal>   

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionVespa} className="exit-button" id="g-button">
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