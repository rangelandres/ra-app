import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import ScrollLock from 'react-scrolllock';

import './uiux.css';
import '../hero.css';


import UIUXProjs from './uiux-projs/uiux-projs';
import UI from './imgs-projs/gif-uiux.gif';
import Phone from './imgs-projs/phone.png';




class UIUX extends Component {

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
            <div className="uiux-container">

                {this.state.on &&
                <div className="uiux">
                    <div className="title-container">
                        <h1 className="title">UI</h1>

                    </div>
                    <div className="r-title-container">
                        <h1 className="r-title">UX</h1>
                    </div>

                    <Reveal effect="bounceIn">
                        <img id="phone" src={Phone} alt="phone frame" />
                        <img id="gif" src={UI} alt="UI" />
                    </Reveal>

                </div>
                }

                
                {this.state.on2 && 
                <div className="container">
                    <ScrollLock>
                        <UIUXProjs action={this.toggle}/>   
                    </ScrollLock>
                </div>
                }



                {this.state.on &&
                <div className="button-container">                  
                    <button onClick={this.toggle} className="button" id="uiux-button">
                        <h2 className="button-text">VIEW</h2>
                    </button>
                </div>
                }


            </div>

        );
    }
}
export default UIUX;


