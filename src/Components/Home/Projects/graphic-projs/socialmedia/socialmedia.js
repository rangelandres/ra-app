import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import ReactPlayer from 'react-player'

import './socialmedia.css'

import Story from './story-board.png'



class SocialMedia extends Component {


    render(){


        return(
            <div className="container">


                <Reveal effect="fadeInUp">


                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=T7_3XV272x4'
                    width='100%'
                    height='100%'
                    />
                </div>

                <div className="sm-wrapper">
              

                    <h1 className="proj-heading">Social Media</h1>

                    <p className="proj-text">
                    In my social media marketing class we were to create an Instagram story that incorporated the university’s journalism program. I curated a storyboard that featured an alum from the program. This alum would then be featured as the “Alumn of the Week.” I thought if I incorporated alumni for the series it would give current and future students a role model to aspire to. 
                    </p>


                    <div><img id="story" src={Story} alt="Instagram Story Board"/></div>


                </div>

                </Reveal>   

                <div className="exit-container-container">
                    <div className="exit-container-project">
                        <Reveal effect="fadeInUp">
                            <div onClick={this.props.actionSM} className="exit-button" id="g-button">
                                <h2 className="button-text" id="g-text">X</h2>
                            </div>
                        </Reveal>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SocialMedia;