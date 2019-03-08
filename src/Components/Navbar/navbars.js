import React  from 'react';
import './navbars.css';
import {Link} from 'react-router-dom';

const Navbars = () => (

    <div className ="nav-container">

        <ul className="top-nav">
            <li><Link to="/">
                <div className="logo">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
                        <g id='Layer_15' data-name='Layer 15'>
                            <circle cx='158.5' cy='75.5' r='15' />
                            <path d='M110,60.5v49.75c0,16.16,13.43,29.26,30,29.26V89.76C140,73.6,126.57,60.5,110,60.5Z'
                            />
                            <path d='M70,60.51h-.5C47.64,60.78,30,78.35,30,100s17.91,39.5,40,39.5H99.5V89.76C99.5,73.77,86.34,60.78,70,60.51Z'
                            />
                        </g>
                    </svg>
                </div>
            </Link></li>
        
        </ul>

        <ul className="side-nav">
            <li><h3><Link to="/resume">resume</Link></h3></li>
        </ul>

     
    </div>

);

export default Navbars;
