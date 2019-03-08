import React, { Component } from 'react';
import Lottie from 'lottie-react-web';
import animationData from './data.json'
import './animation.css';



class Animation extends Component {

  render() {

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMinYMid slice' 
      }
    };

    return(
      <div className="lottie-container">
        <Lottie options={defaultOptions}
              
                speed={.5}/>
      </div>
    )
  }
}

export default Animation;