import React, { Component } from 'react';
import logo from './logo.png';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        title: 'HOME BLOG PORTFOLIO ABOUT CONTACT',
        main: 'Together Team Solution',
        description: 'the workgroup.'
    };
    
}
  render() {
    return (
      <div>
        <Header title={this.state.title} ><logo></logo></Header>
        <div className="main">
        <div className="main-topic">{this.state.main}</div>
        <div className="main-desc">{this.state.description}</div>
        </div>
      </div>
    );
  }
}

export default App;
