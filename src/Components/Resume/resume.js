import React  from 'react';
import Fade from 'react-reveal/Fade';


import './resume.css';


const Resume = () => (
    <div className="resume">
        <div className="resume-container">
            <h1 id="main">Andres Rangel</h1>
            <h2>Chicago, IL</h2>
            <h2><a href="mailto:ar@andresrangel.dev?Subject=Hello!" target="_top">ar@andresrangel.dev</a></h2>
            <div className="summary">
                <a href="https://drive.google.com/file/d/1tFhpAQQm1S_E9MsDTMbQw7LxJuPuFYr6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <div className="resume-download">
                    <h4><u>Download Printable Resume</u></h4>
                    </div>
                </a>
            </div>
            <div className="experience">
                <h1 id="submain">Freelance Designer // Developer</h1>
                <h3><u></u>May 2018 -  <i>present</i></h3>
                <div className="seperator"></div>

                <div className="rcontent">
                    <h2 id="c-name">rMark Bio.</h2>
                    <p><a href="https://www.rmarkbio.com/" target="_blank" rel="noopener noreferrer">rmarkbio.com</a></p>
                    <h3><u></u>October 2019 - <i>present</i></h3>

                    <p>» Updated website pages and posts</p>
                    <p>» Assisted in design projects</p>
                </div>

                <div className="rcontent">
                    <h2 id="c-name">Chew On This Meal Prep/Catering</h2>
                    <p><a href="https://www.chewonthismealprep.com/" target="_blank" rel="noopener noreferrer">chewonthismealprep.com</a></p>
                    <h3><u></u>July 2019 - Sept 2019</h3>
                    
                    <p>» Designed flyers and menus</p>
                    <p>» Designed and developed ecommerce store</p>
                    <p>» SSL, SEO, hosting, etc.</p>
                </div>

                <div className="rcontent">
                    <h2 id="c-name">Imarie Lopez Productions</h2>
                    <p><a href="https://imarielopez.com/" target="_blank" rel="noopener noreferrer">imarielopez.com</a></p>
                    <h3><u></u>March 2019 - May 2019</h3>

                    <p>» Designed and developed the website</p>
                    <p>» Developed using ReactJS and WordPress </p>
                    <p>» SSL, web traffic, maintenance, hosting, etc.</p>
                </div>

                <div className="rcontent">
                    <h2 id="c-name">The Whole Food Nut</h2>
                    <p><a href="https://thewholefoodnut.com/" target="_blank" rel="noopener noreferrer">thewholefoodnut.com</a></p>
                    <h3><u></u>March 2019 - <i>present</i></h3>

                    <p>» Assist in content deployment</p>
                    <p>» Front-end and back-end maintenance with WordPress</p>
                    <p>» Developed and designed webpages using UI/UX methodologies</p>
                    <p>» » Designed animated GIFs, wireframes, and concepts</p>
                </div>

                <div className="rcontent">
                    <h2 id="c-name">shift.</h2>
                    <p><a href="https://www.shiftyourmindclothing.com/" target="_blank" rel="noopener noreferrer">shiftyourmindclothing.com</a></p>
                    <h3><u></u>Jan 2019 -  March 2019</h3>

                    <p>» Redesigned Shopify store to fit brand using .liquid syntax.</p>
                    <p>» Created landing page, CSS logo animation, and styles</p>
                    <p>» Standalone webstore in development.</p>
                </div>

                <div className="rcontent">
                    <h2 id="c-name">Rainn Villalpando</h2>
                    <p><a href="https://www.ravillalpando.com/" target="_blank" rel="noopener noreferrer">ravillalpando.com</a></p>
                </div>

                <div className="rcontent">
                    <h2 id="c-name">Molina's Used Appliances</h2>
                    <p><a href="https://www.molinasusedappliancesbuyandsell.com/" target="_blank" rel="noopener noreferrer">molinasusedappliancesbuyandsell.com</a></p>
                </div>

            </div>

            <div className="experience">
            <h1 id="submain">Education</h1>
                <div className="seperator"></div>
                <h2> <strong>University of Iowa //  Informatics B.A.</strong></h2>
                <h3>Aug 2014 - May 2018</h3>


            </div>

            <div className="skills">
                <h1 id="submain">Skills</h1>
                 <div className="skill-container">
                    <Fade effect="fadeInUp" delay={100}><div className="skillA"><h4>InDesign</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={200}><div className="skillA"><h4>After Effects</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={300}><div className="skillA"><h4>Photoshop</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={400}><div className="skillA"><h4>Invision</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={500}><div className="skillA"><h4>Webflow</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={600}><div className="skillA"><h4>Illustrator</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={700}><div className="skillA"><h4>WordPress</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={800}><div className="skillA"><h4>Balsamiq</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={900}><div className="skillA"><h4>Prototyping</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={1000}><div className="skillA"><h4>Wireframing</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={1100}><div className="skillA"><h4>Responsive Design</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={1200}><div className="skillA"><h4>Graphic Design</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={1300}><div className="skillA"><h4>Animating</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={1400}><div className="skillA"><h4>HTML</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={1500}><div className="skillA"><h4>CSS</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={1600}><div className="skillA"><h4>JS</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={1700}><div className="skillA"><h4>SQL</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={1800}><div className="skillA"><h4>PHP</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={1900}><div className="skillA"><h4>ReactJS</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={2000}><div className="skillA"><h4>Liquid</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={2100}><div className="skillA"><h4>SEO</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={2200}><div className="skillA"><h4>Time Management</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={2300}><div className="skillA"><h4>Communication</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={2400}><div className="skillA"><h4>Google Analytics</h4></div></Fade>
                    <Fade effect="fadeInUp" delay={2500}><div className="skillA"><h4>Social Media</h4></div></Fade>
                </div>   
            </div>
        </div>
    </div>
);

export default Resume;