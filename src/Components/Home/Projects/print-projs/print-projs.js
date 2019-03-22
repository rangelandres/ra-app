import React, { Component } from 'react';

import Slider from "react-slick";
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';

import EightMag from './eightmag/eightmag';

import '../slider.css';

import Spying from './spying.png';


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


class PrintProjs extends Component {
  
constructor(props) {
  super(props)

  this.togglePrint = this.togglePrint.bind(this);

  this.state = {
      on: true,
      fs: false
  };
}

togglePrint(){
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
                    <div className="slide-img" id="print-proj1">
                      <div className="slide-overlay">
                        <div className="proj-logo-container">
                          <div>
                          <h1>Scre</h1>
                          </div>
                        </div>
                        <div className="pro-title-container">
                          <h1>Artists Mag</h1>
                        </div>
                        <div className="proj-description-container">
                          <p>A series of magazines revolving around influential artists and their work.</p>
                        </div>
                        <div className="proj-button-container">
                          <button className="proj-button"  onClick={this.togglePrint}>
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
                    <div className="slide-img" id="print-proj2">
                      <div className="slide-overlay">
                        <div className="proj-logo-container">
                          <div>
                          </div>
                        </div>
                        <div className="pro-title-container">
                        <h1>Anti-Spying Poster</h1>
                        </div>
                        <div className="proj-description-container">
                          <p>Poster spreading awarness of potential malicious behavior with webcams.</p>
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
                    <div className="slide-img" id="print-proj3">
                      <div className="slide-overlay">
                        <div className="proj-logo-container">
                          <div>
                          <h1>coming soon</h1>
                          </div>
                        </div>
                        <div className="pro-title-container">
                          <h1>Artists Catalog</h1>
                        </div>
                        <div className="proj-description-container">
                          <p> University catolog of graduate art work in the Arts program.</p>
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
                      <div className="slide-img" id="print-proj4">
                        <div className="slide-overlay">
                          <div className="proj-logo-container">
                            <div>
                            <h1>coming soon</h1>
                            </div>
                          </div>
                          <div className="pro-title-container">
                            <h1>Flyer Events</h1>
                          </div>
                          <div className="proj-description-container">
                          <p> A series of event flyers hosted by the university.
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
                  <div className="slide-img" id="print-proj5">
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
          <EightMag actionPrint={this.togglePrint}/>
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
export default PrintProjs;
