import React, { Component } from 'react';
import GraphicProjs from './graphic-projs';

import './graphic.css';

import CPU from './cpu.png';
import CPU2 from './cpu-gif.gif';


class Graphic extends Component {
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
            <div className="graphic-container">
                {this.state.on2 && 
                <div className="graphic">
                    <div className="graphic-title-container">
                        <h1 className="graphic-title">GRAPHIC</h1>
                        <h1 className="graphic-title" id="title2">DESIGN</h1>
                    </div>

                    <img id="cpu" src={CPU} alt="computer monitor"/>
                    <img id="cpu" src={CPU2} alt="computer monitor"/>
                </div>
                }

                {this.state.on && 
                <div className="container">
                    <GraphicProjs/>
                </div>    
                }

                {this.state.on3 &&
                <div className="button-container">
                    <button onClick={this.toggle} className="button" id="g-button">
                        <h2 className="button-text" id="g-text">VIEW</h2>
                    </button>
                </div>
                }

            </div>
        );
    }
}
export default Graphic;
