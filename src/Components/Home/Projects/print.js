import React, { Component } from 'react';
import './print.css';

import Mag from './mag.png';



class Print extends Component {

  render(){
    return (
        <div className="print-container">
        
            <div className="print">
                <div className="print-title-container">
                    <h1 className="print-title">PRINT</h1>
                    <h1 className="print-title">PRINT</h1>
                </div>

                <img id="mag" src={Mag} alt="magazine"/>
            </div>

            <div className="carouse2">

            </div>

            <div className="button-container">
                <a className="button" id="b-color">
                    <h2 class="button-text" id="bt-color">VIEW</h2>
                </a>
            </div>

        </div>
    );
  }
}
export default Print;
