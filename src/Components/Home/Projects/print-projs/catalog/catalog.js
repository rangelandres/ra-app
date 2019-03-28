import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import './catalog.css';

import Cat1 from './cat1.png';
import Cat2 from './cat2.png';
import Cat3 from './cat3.png';
import Cat4 from './cat4.png';
import Cat5 from './cat5.png';
import Cat6 from './cat6.png';




class Shift extends Component {


    render(){


        return(
            <div className="container">


                <Reveal effect="fadeInUp">
                    <div className="catalog">
                      
                    <h1 className="proj-heading">Catalog</h1>

                    <p className="proj-text">
                    Magazine design for the Graduate program at the University of Iowa.
                    </p>
                    <div><img id="cat" src={Cat1} alt="Catalog Spread 1"/></div>
                    <div><img id="cat" src={Cat2} alt="Catalog Spread 2"/></div>
                    <div><img id="cat" src={Cat3} alt="Catalog Spread 3"/></div>
                    <div><img id="cat" src={Cat4} alt="Catalog Spread 4"/></div>
                    <div><img id="cat" src={Cat5} alt="Catalog Spread 5"/></div>
                    <div><img id="cat" src={Cat6} alt="Catalog Spread 6"/></div>

     



                    </div>
                </Reveal>   

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionCatalog} className="exit-button" id="o-button">
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