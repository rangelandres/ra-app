import React, { Component } from 'react';

import Animation from './Animation/animation'
import Zoom from 'react-reveal/Zoom';

import './hero.css'

class Hero extends Component {



render(){
    return (
        <div>
        <div className="frame"></div>
        <div className="hero-container">
            <Animation/>
            <Zoom fraction={.4}>

            <div className="hero-text-container">
            
                <div className="hero-text">
                    <h1>hello,</h1>
                    <h1>my name is Andres!</h1>
                </div>
                <div className="hero-subtext">
                    <h2>I'm a designer // developer.</h2>
                </div>
            </div>
            </Zoom>

            <div className="social-media-container">
                <div className="social-media">
                    <div className="social-icon">
                        <a href="https://github.com/rangelandres" target="_blank" rel="noopener noreferrer">
                        <svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.49 34.49'>
                            <defs />
                            <path className='cls-1' d='M17.24,1.36A16.29,16.29,0,0,0,12.1,33.11c.81.14,1.11-.36,1.11-.79s0-1.41,0-2.77c-4.53,1-5.49-2.18-5.49-2.18A4.3,4.3,0,0,0,5.89,25C4.41,24,6,24,6,24a3.44,3.44,0,0,1,2.5,1.68A3.48,3.48,0,0,0,13.24,27a3.48,3.48,0,0,1,1-2.18c-3.61-.41-7.42-1.81-7.42-8a6.29,6.29,0,0,1,1.68-4.37,5.85,5.85,0,0,1,.16-4.32s1.37-.43,4.48,1.67a15.68,15.68,0,0,1,8.16,0c3.1-2.1,4.47-1.67,4.47-1.67A5.85,5.85,0,0,1,26,12.43a6.24,6.24,0,0,1,1.68,4.37c0,6.25-3.81,7.63-7.44,8a3.93,3.93,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,17.24,1.36Z'
                            />
                        </svg>
                        </a>
                    </div>
                    <div className="social-icon" id="icon">
                        <a href="https://www.instagram.com/andresrangel.dev/" target="_blank" rel="noopener noreferrer">
                            <svg className='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                <path d='M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z'
                                />
                                <path d='M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z'
                                />
                                <circle cx='393.6' cy='118.4' r='17.056' />
                            </svg>
                        </a>
                    </div>
                    <div className="social-icon" id="icon">
                        <a href="https://www.linkedin.com/in/rangel-andres/" target="_blank" rel="noopener noreferrer">
                            <svg className='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 310 310'>
                                <g id='XMLID_801_'>
                                    <path id='XMLID_802_' d='M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z'
                                    />
                                    <path id='XMLID_803_' d='M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z'
                                    />
                                    <path id='XMLID_804_' d='M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z'
                                    />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <div className="frame2"></div>


        </div>

    );
}
}
export default Hero;


