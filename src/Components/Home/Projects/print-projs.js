import React, { Component } from 'react';
import Slider from "react-slick";
import './print-projs.css';


class PrintProjs extends Component {



    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
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
                <div className="slider">
                    <div className="a-slide">
                        <h1>HI</h1>
                    </div>
                </div>
          </div>
          <div className="slider-container">
            <h3>2</h3>
          </div>
          <div className="slider-container">
            <h3>3</h3>
          </div>
          <div className="slider-container">
            <h3>4</h3>
          </div>
          <div className="slider-container">
            <h3>5</h3>
          </div>

        </Slider>
      </div>
          );
    }


}
export default PrintProjs;
