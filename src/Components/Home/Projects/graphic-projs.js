import React, { Component } from 'react';
import Slider from "react-slick";
import Zoom from 'react-reveal/Zoom';

import './slider.css';


class GraphicProjs extends Component {


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
                        <h1>PROJ1</h1>
                    </div>
                </div>
            </Zoom>
          </div>
          <div>
            <Zoom delay={200}>

                <div className="slider">
                    <div className="a-slide">
                        <h1>PROJ2</h1>
                    </div>
                </div>
                </Zoom>

            </div>
            
          <div>
          <Zoom delay={400}>

            <div className="slider">
                <div className="a-slide">
                    <h1>PROJ3</h1>
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
          <div onClick={this.props.action} className="exit-button" id="g-button">
              <h2 className="button-text" id="g-text">X</h2>
          </div>
        </div>

      </div>
          );
    }


}
export default GraphicProjs;
