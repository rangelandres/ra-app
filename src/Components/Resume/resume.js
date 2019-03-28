import React  from 'react';
import './resume.css';


const Resume = () => (
    <div className="resume">
        <div className="resume-container">
            <h1 id="main">Andres Rangel</h1>
            <h2>Chicago, IL</h2>
            <h2><a href="mailto:ar@andresrangel.dev?Subject=Hello!" target="_top">ar@andresrangel.dev</a></h2>
            <div className="seperator"></div>
            <div className="summary">
                <p>Hello! Here is me in text.
                </p>
            </div>
            <div className="experience">
                <h1 id="submain">Freelance Web Designer</h1>
                <h3>May 2018 -  <i>present</i></h3>
                <div className="content">
                    <p><a href="https://www.shiftyourmindclothing.com/" target="_blank" rel="noopener noreferrer">shiftyourmindclothing.com</a></p>
                    <p id="mright">•Designed a Shopify store for a small buisness in Minneapolis.</p>
                    <p id="mright">•Landing page, theme, and CSS animations.</p>
                </div>

            </div>

            <div className="experience">
                <h1 id="submain">University of Iowa</h1>
                <h3>Aug 2014 - May 2018</h3>


            </div>

            <div className="skills">
                <h1 id="submain">Skills</h1>
                    
            </div>
        </div>
    </div>
);

export default Resume;