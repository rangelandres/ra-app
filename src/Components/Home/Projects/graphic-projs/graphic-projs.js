import React, { Component } from 'react';

import Slider from "react-slick";
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';

import SocialMedia from './socialmedia'

import '../slider.css';



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


class GDProjs extends Component {
  
constructor(props) {
  super(props)

  this.toggleGD = this.toggleGD.bind(this);

  this.state = {
      on: true,
      social: false
  };
}

toggleGD(){
  this.setState({
        on: !this.state.on,
        social: !this.state.social
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
                    <div className="slide-img" id="gd-proj1">
                      <div className="slide-overlay">
                        <div className="proj-logo-container">
                          <div>
                          <h1></h1>
                          </div>
                        </div>
                        <div className="pro-title-container">
                          <h1>Instagram Story</h1>
                        </div>
                        <div className="proj-description-container">
                          <p>Created an Instagram story for the Journalism Program at the University of Iowa</p>
                        </div>
                        <div className="proj-button-container">
                          <button className="proj-button"  onClick={this.toggleGD}>
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
                    <div className="slide-img" id="gd-proj2">
                      <div className="slide-overlay">
                        <div className="proj-logo-container">
                          <div>
                          </div>
                        </div>
                        <div className="pro-title-container">
                        <h1>Mutrition</h1>
                        </div>
                        <div className="proj-description-container">
                          <p>Satire Packaging design for water from the Iowa River in Iowa City.</p>
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
                    <div className="slide-img" id="gd-proj3">
                      <div className="slide-overlay">
                        <div className="proj-logo-container">
                          <div>
                          <h1>coming soon</h1>
                          </div>
                        </div>
                        <div className="pro-title-container">
                          <h1> Red Vespa</h1>
                        </div>
                        <div className="proj-description-container">
                          <p> Rebrand for local pizzeria.</p>
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
                      <div className="slide-img" id="gd-proj4">
                        <div className="slide-overlay">
                          <div className="proj-logo-container">
                            <div>
                            <h1>coming soon</h1>
                            </div>
                          </div>
                          <div className="pro-title-container">
                            <h1>Big Fish</h1>
                          </div>
                          <div className="proj-description-container">
                          <p> Rebrand for Big Fish Theory album.</p>
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
        </Slider>
        }

        {this.state.social &&
        <div className="project-freestyle">
          <SocialMedia actionGD={this.toggleGD}/>
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
export default GDProjs;
