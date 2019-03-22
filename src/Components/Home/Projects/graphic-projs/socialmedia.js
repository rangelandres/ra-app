import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Slider from "react-slick";
import { TouchScrollable } from 'react-scrolllock';



class SocialMedia extends Component {


    render(){


        return(
            <div className="social-media-container">
                <TouchScrollable>
                <Reveal effect="fadeInUp">

                <div className="social-media">

                </div>


                </Reveal>
                </TouchScrollable>

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionGD} className="exit-button">
                                <h2 className="button-text">X</h2>
                            </div>
                        </Reveal>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SocialMedia;