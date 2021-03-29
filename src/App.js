import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Hkid from './components/Hkid';

class App extends Component {    
  render() {
    return(
      <div>
        <h1>hkid</h1>
        <Hkid/>
      </div>
    );
  }
}

const prefix = {
  1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"F", 7:"G", 8:"H", 9:"I", 10:"J",
  11:"K", 12:"L", 13:"M", 14:"N", 15:"O", 16:"P", 17:"Q", 18:"R", 19:"S", 20:"T",
  21:"U", 22:"V", 23:"W", 24:"X", 25:"Y", 26:"Z"
};

function genHkid(){
  var randHkid = "";
  var hkidPrefix = prefix[randomNumber];
  randHkid += hkidPrefix;
  for (var i = 0; i < 6; i++) {
    randHkid += Math.floor(Math.random()*9);
  }
  this.setState({hkid: 3});
}

function randomNumber(){
  return Math.floor(Math.random()*26 + 1);
}

export default App;
