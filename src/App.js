import logo from './logo.svg';
// import './App.css';
import './style.css';
import React, { Component } from 'react';
import Hkid from './components/Hkid';

class App extends Component {    
  render() {
    // document.body.style = 'background-image: linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);'
    return(
      <div className="header">
        <h1>HKID Generator</h1>
        <Hkid/>
      </div>
    );
  }
}

export default App;
