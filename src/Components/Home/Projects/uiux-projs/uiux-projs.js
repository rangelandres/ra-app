import React, { Component } from 'react';

import Slider from "react-slick";
import Zoom from 'react-reveal/Zoom';

import Freestyle from './freestyle';

import '../slider.css';

import logo from './logo.png';
import errorLogo from './logo-error.png';
import plLogo from './logo-pl.png';
import shiftLogo from './logo-shift.png';

class UIUXProjs extends Component {
  
constructor(props) {
  super(props)

  this.toggleUIUX = this.toggleUIUX.bind(this);

  this.state = {
      on: true,
      fs: false
  };
}

toggleUIUX(){
  this.setState({
        on: !this.state.on,
        fs: !this.state.fs
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
                          <button className="proj-button"  onClick={this.toggleUIUX}>
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
        <div className="project-freestyle">
          <Freestyle/>
        </div>
        }

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
