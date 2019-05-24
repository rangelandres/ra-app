import React  from 'react';
import Reveal from 'react-reveal/Reveal';


import './resume.css';


const Resume = () => (
    <div className="resume">
        <div className="resume-container">
            <h1 id="main">Andres Rangel</h1>
            <h2>Chicago, IL</h2>
            <h2><a href="mailto:ar@andresrangel.dev?Subject=Hello!" target="_top">ar@andresrangel.dev</a></h2>
            <div className="seperator"></div>
            <div className="summary">
                <a href="https://drive.google.com/file/d/1tFhpAQQm1S_E9MsDTMbQw7LxJuPuFYr6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <div className="resume-download">
                    <h4>Download Printable Resume</h4>
                    </div>
                </a>
            </div>
            <div className="experience">
                <h1 id="submain">Freelance Designer // Developer</h1>
                <h3>May 2018 -  <i>present</i></h3>

                <div className="content">
                    <h2 id="c-name">shift.</h2>
                    <p><a href="https://www.shiftyourmindclothing.com/" target="_blank" rel="noopener noreferrer">shiftyourmindclothing.com</a></p>
                    <h5 id="location"> MN, Minneapolis</h5>
                    <p>» Re-designed Shopify store to fit brand guide.</p>
                    <p>» Created landing page, CSS logo animation, and styles</p>
                    <p>» Standalone webstore in development.</p>
                </div>

                <div className="content">
                    <h2 id="c-name">The Whole Food Nut</h2>
                    <p><a href="https://thewholefoodnut.com/" target="_blank" rel="noopener noreferrer">thewholefoodnut.com</a></p>
                    <h5 id="location"> CA, Los Angeles</h5>
                    <p>» Assist in content deployment.</p>
                    <p>» Website and server maintenance.</p>
                    <p>» Update Google services.</p>
                </div>

                <div className="content">
                    <h2 id="c-name">Imarie Lopez Productions</h2>
                    <p><a href="https://imarielopez.com/" target="_blank" rel="noopener noreferrer">imarielopez.com</a></p>
                    <h5 id="location"> NY, New York</h5>
                    <p>» Designed and developed the website.</p>
                    <p>» Headless WordPress with ReactJS.</p>
                    <p>» Webmaster: SSL, webtraffic, maintenance, security, etc.</p>
                </div>

                <div className="content">
                    <h2 id="c-name">Chew On This Meal Prep/Catering</h2>
                    <h5 id="location"> IL, Chicago</h5>
                    <p>» Designed flyers and menus.</p>
                    <p>» Webpage in development.</p>
                </div>

            </div>

            <div className="experience">
                <h1 id="submain">University of Iowa //  Informatics B.A.</h1>
                <h3>Aug 2014 - May 2018</h3>


            </div>

            <div className="skills">
                <h1 id="submain">Skills</h1>
                 <div className="skill-container">
                    <Reveal effect="fadeInUp" delay={100}><div className="skillA"><h4>InDesign</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={200}><div className="skillA"><h4>After Effects</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={300}><div className="skillA"><h4>Photoshop</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={400}><div className="skillA"><h4>Invision</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={500}><div className="skillA"><h4>Webflow</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={600}><div className="skillA"><h4>Illustrator</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={700}><div className="skillA"><h4>WordPress</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={800}><div className="skillA"><h4>Balsamiq</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={900}><div className="skillA"><h4>Prototyping</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={1000}><div className="skillA"><h4>Wireframing</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={1100}><div className="skillA"><h4>Responsive Design</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={1200}><div className="skillA"><h4>Graphic Design</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={1300}><div className="skillA"><h4>Animating</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={1400}><div className="skillA"><h4>HTML</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={1500}><div className="skillA"><h4>CSS</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={1600}><div className="skillA"><h4>JS</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={1700}><div className="skillA"><h4>SQL</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={1800}><div className="skillA"><h4>PHP</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={1900}><div className="skillA"><h4>ReactJS</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={2000}><div className="skillA"><h4>Liquid</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={2100}><div className="skillA"><h4>SEO</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={2200}><div className="skillA"><h4>Time Management</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={2300}><div className="skillA"><h4>Communication</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={2400}><div className="skillA"><h4>Google Analytics</h4></div></Reveal>
                    <Reveal effect="fadeInUp" delay={2500}><div className="skillA"><h4>Social Media</h4></div></Reveal>
                </div>   
            </div>
        </div>
    </div>
);

export default Resume;