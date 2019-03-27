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
                <p>Hello!
                </p>
            </div>
            <div className="experience">
                <h1 id="submain">Freelance Web Designer</h1>
                <h3>May 2018 -  <i>present</i></h3>
                <div className="exp1">
                   <p><a href="https://www.shiftyourmindclothing.com/">shiftyourmindclothing.com</a></p>
                    <p>Designed for a Shopify ecommerce web store, including their: landing page, themes, and animations.</p>
                </div>

            </div>

            <div className="experience">
                <h1 id="submain">University of Iowa</h1>
                <h3>Aug 2014 - May 2018</h3>
                <div className="exp1">
                   <p><a href="https://www.shiftyourmindclothing.com/">shiftyourmindclothing.com</a></p>
                    <p>Designed for a Shopify ecommerce web store, including their: landing page, themes, and animations.</p>
                </div>

            </div>

            <div className="skills">
                <h1 id="submain">Skills</h1>
                <h3>May 2018 -  <i>present </i></h3>
                <div className="exp1">
                   <p><a href="https://www.shiftyourmindclothing.com/">shiftyourmindclothing.com</a></p>
                    <p>Designed for a Shopify ecommerce web store, including their: landing page, themes, and animations.</p>
                </div>
                <div className="exp2">
                    
                </div>
            </div>
        </div>
    </div>
);

export default Resume;