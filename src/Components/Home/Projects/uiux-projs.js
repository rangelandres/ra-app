import React, { Component } from 'react';

import Slider from "react-slick";
import Zoom from 'react-reveal/Zoom';

import './slider.css';

import logo from './uiux-projs/logo.png';
import errorLogo from './uiux-projs/error-logo.png';

class UIUXProjs extends Component {


    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
          };
        return (
      <div>
        <Slider {...settings}>
          <div>
            <Zoom>
            <div className="slider">
                  <div className="a-slide">
                    <div className="slide-img">
                      <div className="slide-overlay">
                        <div className="proj-logo-container">
                          <div>
                            <img id="logo" src={logo} alt="UI" />
                          </div>
                        </div>
                        <div className="pro-title-container">
                          <h1>freestyle</h1>
                        </div>
                        <div className="proj-description-container">
                          <p>UI/UX design for a mock app that allows users to select specific instruments
                          from songs to create new compositions.</p>
                        </div>
                        <div className="proj-button-container">
                          <button className="proj-button">
                            <h2 className="button-text">VIEW</h2>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </Zoom>
          </div>
          <div>
            <Zoom delay={200}>
                <div className="slider">
                  <div className="a-slide">
                    <div className="slide-img" id="uiux-proj2">
                      <div className="slide-overlay">
                        <div className="proj-logo-container">
                          <div>
                          <img id="logo" src={errorLogo} alt="UI" />
                          </div>
                        </div>
                        <div className="pro-title-container">
                          <h1>error:404</h1>
                        </div>
                        <div className="proj-description-container">
                          <p>A responsive infographic designed for the web conveying net neutrality facts.
                        </p>
                        </div>
                        <div className="proj-button-container">
                          <button className="proj-button">
                            <h2 className="button-text">VIEW</h2>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Zoom>

            </div>
            
          <div>
          <Zoom delay={400}>

            <div className="slider">
                <div className="a-slide">
                    <div className="slide-img" id="uiux-proj3">
                      <div className="slide-overlay">
                        <div className="proj-logo-container">
                          <div>
                          <img id="logo" src={errorLogo} alt="UI" />
                          </div>
                        </div>
                        <div className="pro-title-container">
                          <h1>lighthouse</h1>
                        </div>
                        <div className="proj-description-container">
                          <p>A responsive infographic designed for the web conveying net neutrality facts.
                        </p>
                        </div>
                        <div className="proj-button-container">
                          <button className="proj-button">
                            <h2 className="button-text">VIEW</h2>
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            </Zoom>

          </div>
          <div>
            <Zoom delay={400}>

                <div className="slider">
                    <div className="a-slide">
                        <h1>PROJ4</h1>
                    </div>
                </div>
            </Zoom>

          </div>
          <div>
              <Zoom delay={200}>
            <div className="slider">
                <div className="a-slide">
                    <h1>PROJ5</h1>
                </div>
            </div>
            </Zoom>
          </div>

        </Slider>

        <div className="exit-container">
          <div onClick={this.props.action} className="exit-button">
              <h2 className="button-text">X</h2>
          </div>
        </div>
  
      </div>
          );
    }


}
export default UIUXProjs;
