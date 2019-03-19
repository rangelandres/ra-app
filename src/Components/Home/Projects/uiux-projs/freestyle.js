import React, { Component } from 'react';

import './freestyle.css'
import fshero from './fs-hero.png'



class Freestyle extends Component {


    render(){
        return(
            <div className="freestyle-container" >
                <div className="freestyle" >
                    <img id="fshero" src={fshero} alt="computer monitor"/>
                </div>

                
                <div className="freestyle"></div>
                
                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <div onClick={this.props.actionUIUX} className="exit-button">
                            <h2 className="button-text">X</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Freestyle;