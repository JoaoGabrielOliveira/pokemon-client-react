import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.js'
import 'popper.js/dist/popper.js'

import  './App.css';
import { Routes } from './config/Routes';


class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;