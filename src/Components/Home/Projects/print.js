import React, { Component } from 'react';
import ScrollLock from 'react-scrolllock';

import './print.css';
import PrintProjs from './print-projs';
import Mag from './mag.png';


class Print extends Component {

    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this);

        this.state = {
            on: true,
            on2: false,
            lockScroll: false 
        };
    }

    toggle(){
        this.setState({
            on: !this.state.on,
            on2: !this.state.on2,
            lockScroll: !this.state.lockScroll 
        });
    }

    render(){
        return (
            <div className="print-container">
            
                {this.state.on && 
                <div className="print">
                    <div className="print-title-container">
                        <h1 className="print-title">PRINT</h1>
                        <h1 className="print-title">PRINT</h1>
                    </div>

                    <img id="mag" src={Mag} alt="magazine"/>
                </div>
                }
                
                {this.state.on2 && 
                <div className="container">
                    <PrintProjs action={this.toggle}/>   
                </div>
                }

                {this.state.on &&
                <div className="button-container">
                    <button onClick={this.toggle} className="button" id="b-color">
                        <h2 className="button-text" id="bt-color">VIEW</h2>
                    </button>
                </div>
                }
                
                <ScrollLock isActive={this.state.lockScroll} />

            </div>

        );
    }


}
export default Print;
