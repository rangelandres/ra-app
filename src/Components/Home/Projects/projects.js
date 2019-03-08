import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import './projects.css'
import UI from './gif-c.gif';
import Phone from './phone.png';
import Mag from './mag.png';
import CPU from './cpu.png';
import CPU2 from './cpu-gif.gif';

class Projects extends Component {

  render() {
    return (
      <div>
        <div className="project-container" id="proj1">
          <div className="project" id="uiux">
            <div className="title-container">
              <h1 className="title1">UI</h1>
              <h1 className="title1" id="title1">UX</h1>
            </div>
            <img id="phone" src={Phone} alt="phone frame" />
            <img id="UI" src={UI} alt="UI" />
          </div>
        </div>

        <div className="project-container" id="proj2">
          <div className="project" id="print">
            <div className="title-container2">
              <h1 className="title2">PRINT</h1>
              <h1 className="title2" id="title2">PRINT</h1>
            </div>
            <img id="mag" src={Mag} alt="magazine"/>
          </div>
        </div>

        <div className="project-container" id="proj3">
          <div className="project" id="print">
            <div className="title-container3">
              <h1 className="title3">GRAPHIC</h1>
              <h1 className="title3" id="title3">DESIGN</h1>
            </div>
            <img id="cpu" src={CPU} alt="computer monitor"/>
            <img id="cpu" src={CPU2} alt="computer monitor"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
 