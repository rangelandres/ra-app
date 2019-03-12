import React, { Component } from 'react';
import './uiux.css';
import UIUXProjs from './uiux-projs';

import UI from './gif-c.gif';
import Phone from './phone.png';


class UIUX extends Component {
    
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
            <div className="uiux-container">
            
                {this.state.on2 && 
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
                }
        
                {this.state.on && 
                <div className="container">
                    <UIUXProjs/>
                </div>    
                }
                
                {this.state.on3 &&
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


