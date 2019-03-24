import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import ScrollLock from 'react-scrolllock';

import './print.css';
import '../hero.css';

import PrintProjs from './print-projs/print-projs';
import Mag from './imgs-projs/mag.png';


class Print extends Component {

    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this);

        this.state = {
            on: true,
            on2: false,
        };
    }

    toggle(){
        this.setState({
            on: !this.state.on,
            on2: !this.state.on2,
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

                    <Reveal effect="rubberBand">
                        <img id="mag" src={Mag} alt="magazine"/>
                    </Reveal>
                </div>
                }
                
                {this.state.on2 && 
                <div className="container">
                    <ScrollLock>
                        <PrintProjs action={this.toggle}/>
                    </ScrollLock>
                </div>
                }

                {this.state.on &&
                <div className="button-container">
                    <button onClick={this.toggle} className="button" id="o-button">
                        <h2 className="button-text" id="o-text">VIEW</h2>
                    </button>
                </div>
                }
                

            </div>

        );
    }


}
export default Print;
