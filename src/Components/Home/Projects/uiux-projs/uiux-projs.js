import React, { Component } from 'react';

import Slider from "react-slick";
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';


import Freestyle from './freestyle/freestyle';
import Error404 from './error404/error404';
import Shift from './shift/shift';
import Light from './light/light';

import '../slider.css';

import logo from './logo.png';
import errorLogo from './logo-error.png';
import plLogo from './logo-pl.png';
import shiftLogo from './logo-shift.png';


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginRight: "5vh", zIndex: "3"  }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginLeft: "5vh", zIndex: "3" }}
      onClick={onClick}
    />
  );
}

class UIUXProjs extends Component {
  
  constructor(props) {
    super(props)

    this.toggleFS = this.toggleFS.bind(this);
    this.toggleError404 = this.toggleError404.bind(this);
    this.toggleShift = this.toggleShift.bind(this);
    this.toggleLight = this.toggleLight.bind(this);

    this.state = {
        on: true,
        fs: false,
        error404: false,
        shift: false,
        light: false,

    };
  }

    toggleFS(){
      this.setState({
            on: !this.state.on,
            fs: !this.state.fs
          });
      }
    toggleError404(){
      this.setState({
            on: !this.state.on,
            error404: !this.state.error404
          });
      }
    toggleShift(){
      this.setState({
            on: !this.state.on,
            shift: !this.state.shift
        });
      }
      toggleLight(){
        this.setState({
              on: !this.state.on,
              light: !this.state.light
          });
        }


    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
          
      <div className="slider-container">

        {this.state.on &&
        <Slider {...settings}>
          <div>
            <Zoom>
            <div className="slider">
                  <div className="a-slide">
                    <div className="slide-img" id="uiux-proj1">
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
                          <button className="proj-button" onClick={this.toggleFS}>
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
                          <button className="proj-button" onClick={this.toggleError404}>
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
                          <img id="logo" src={shiftLogo} alt="UI" />
                          </div>
                        </div>
                        <div className="pro-title-container">
                          <h1>shift.</h1>
                        </div>
                        <div className="proj-description-container">
                          <p>Re-designed for an ecommerce site built on Shopify.
                        </p>
                        </div>
                        <div className="proj-button-container">
                        <button className="proj-button" onClick={this.toggleShift}>
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
                      <div className="slide-img" id="uiux-proj4">
                        <div className="slide-overlay">
                          <div className="proj-logo-container">
                            <div>
                            <img id="logo" src={plLogo} alt="UI" />
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
                          <button className="proj-button" onClick={this.toggleLight}>
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
                  <div className="slide-img" id="uiux-proj5">
                    <div className="slide-overlay">
                      <div className="proj-logo-container">
                        <div>
                        </div>
                      </div>
                      <div className="pro-title-container">
                        <h1>coming soon</h1>
                      </div>
                      <div className="proj-description-container">
                        <p>
                      </p>
                      </div>
                      <div className="proj-button-container">

                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </Zoom>
          </div>

        </Slider>
        }

        {this.state.fs &&
        <div className="project">
          <Freestyle actionFS={this.toggleFS}/>
        </div>
        }

        {this.state.error404 &&
        <div className="project">
          <Error404 actionError404={this.toggleError404}/>
        </div>
        }

        {this.state.shift &&
        <div className="project">
          <Shift actionShift={this.toggleShift}/>
        </div>
        }

        {this.state.light &&
        <div className="project">
          <Light actionLight={this.toggleLight}/>
        </div>
        }

        <div className="exit-container">
          <Reveal effect="fadeInUp">
            <div onClick={this.props.action} className="exit-button">
                <h2 className="button-text">X</h2>
            </div>
          </Reveal>
        </div>

      </div>
          );
    }


}
export default UIUXProjs;
