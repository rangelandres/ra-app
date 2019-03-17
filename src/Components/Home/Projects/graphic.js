import React, { Component } from 'react';
import ScrollLock from 'react-scrolllock';
import Reveal from 'react-reveal/Reveal';

import GraphicProjs from './graphic-projs/graphic-projs';

import './graphic.css';
import '../hero.css';


import CPU from './imgs-projs/cpu.png';
import CPU2 from './imgs-projs/gif-cpu.gif';


class Graphic extends Component {

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
            <div className="graphic-container">

                {this.state.on && 
                <div className="graphic">
                    <div className="graphic-title-container">
                        <h1 className="graphic-title">GRAPHIC</h1>
                        <h1 className="graphic-title" id="title2">DESIGN</h1>
                    </div>

                    <Reveal effect="bounce">
                        <img id="cpu" src={CPU} alt="computer monitor"/>
                        <img id="cpu" src={CPU2} alt="computer monitor"/>
                    </Reveal>
                </div>
                }

                {this.state.on2 && 
                <div className="container">
                    <GraphicProjs action={this.toggle}/>
                </div>    
                }

                {this.state.on &&
                <div className="button-container">
                    <button onClick={this.toggle} className="button" id="g-button">
                        <h2 className="button-text" id="g-text">VIEW</h2>
                    </button>
                </div>
                }

                <ScrollLock isActive={this.state.lockScroll} />


            </div>
        );
    }
}
export default Graphic;
