import React from 'react';
// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import posed, { PoseGroup } from 'react-pose';
import Popup from "reactjs-popup";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import scroll from "./scroll/scroll.js";

 
function App() {
  return (
    <div className="App">
      <img src={require('./images/pic1.png')}></img>
        <div className="popup">
          <Popup trigger={<button> Show detail</button>}>
            <div><img id="mama" src={require('./images/popup.png')}></img></div>
          </Popup>
          {/* <scroll /> */}
        </div>
    </div>
  );
}

export default App;