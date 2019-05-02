import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom';

import Navbars from './Components/Navbar/navbars';
import Container from './Components/Container/container';

import './App.css';

import ScrollToTop from './scroll'



class App extends Component {

  render(){
    return (
      <div className="App">
        <Router>
          <ScrollToTop>
            <Container/>
            <Navbars/>
          </ScrollToTop>

        </Router>
      </div>
    );
  }
}
export default App;
