import React, { Component } from 'react';

import Animation from './Animation/animation'

import Zoom from 'react-reveal/Zoom';


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
                        <a href="https://twitter.com/andresrangeI" target="_blank" rel="noopener noreferrer">
                            <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 612 612'>
                                <path d='M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z'
                                fill='#010002' />
                            </svg>
                        </a>
                    </div>
                    <div className="social-icon" id="icon">
                        <a href="https://www.instagram.com/andresrangel.exe/" target="_blank" rel="noopener noreferrer">
                            <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
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
                            <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 310 310'>
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
        </div>

    );
}
}
export default Hero;


