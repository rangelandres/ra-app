import React, { Component } from 'react';
import './print.css';

import Mag from './mag.png';



class Print extends Component {

    state = {
        on: false,
        on2: true,
        on3: true,
    }

    toggle = () =>{
        this.setState({
            on: !this.state.on,
            on2: !this.state.on3,
            on3: !this.state.on3

        })
    }


    render(){
        return (
            <div className="print-container">

                {this.state.on2 && 

            
                <div className="print">
                    <div className="print-title-container">
                        <h1 className="print-title">PRINT</h1>
                        <h1 className="print-title">PRINT</h1>
                    </div>

                    <img id="mag" src={Mag} alt="magazine"/>
                </div>
                }

                {this.state.on && 
                    <div className="test">
                    <h1>Hello</h1>
                    </div>
                }

                {this.state.on3 &&
                <div className="button-container">
                    <button onClick={this.toggle} className="button" id="b-color">
                        <h2 className="button-text" id="bt-color">VIEW</h2>
                    </button>
                </div>
                }
            </div>
        );
    }


}
export default Print;
