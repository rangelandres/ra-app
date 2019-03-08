import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Navbars from './Components/Navbar/navbars';
import Container from './Components/Container/container';

import './App.css';



class App extends Component {

  render(){
    return (
      <div className="App">
        <Router>
          <div>
            <Container/>
            <Navbars/>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
