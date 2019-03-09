import React, { Component } from 'react';
import './uiux.css';

import UI from './gif-c.gif';
import Phone from './phone.png';


class UIUX extends Component {

  render(){
    return (
        <div className="uiux-container">
        
            <div className="uiux">
                <div className="title-container">
                    <h1 className="title">UI</h1>

                </div>
                <div className="r-title-container">
                    <h1 className="r-title">UX</h1>
                </div>

                <img id="phone" src={Phone} alt="phone frame" />
                <img id="gif" src={UI} alt="UI" />
            </div>

            <div className="carousel">

            </div>

            <div className="button-container">
                <a className="button" id="uiux-button">
                    <h2 className="button-text">VIEW</h2>
                </a>
            </div>

        </div>
    );
  }
}
export default UIUX;
