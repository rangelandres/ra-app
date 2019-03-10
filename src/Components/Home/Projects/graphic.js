import React, { Component } from 'react';
import './graphic.css';

import CPU from './cpu.png';
import CPU2 from './cpu-gif.gif';


class Graphic extends Component {

  render(){
    return (
        <div className="graphic-container">
        
            <div className="graphic">
                <div className="graphic-title-container">
                    <h1 className="graphic-title">GRAPHIC</h1>
                    <h1 className="graphic-title" id="title2">DESIGN</h1>
                </div>

                <img id="cpu" src={CPU} alt="computer monitor"/>
                <img id="cpu" src={CPU2} alt="computer monitor"/>
            </div>

            <div className="carouse2">

            </div>

            <div className="button-container">
                <button className="button" id="g-button">
                    <h2 className="button-text" id="g-text">VIEW</h2>
                </button>
            </div>

        </div>
    );
  }
}
export default Graphic;
