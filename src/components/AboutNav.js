import React, { Component } from 'react';
// import './App.css';
import '../assets/css/AboutNav.css';

class AboutNav extends Component {
  render() {
  
    return (
      <nav id='aboutNav'>
        <h2 className="logo">{this.props.logoTitle}</h2>
      </nav>
    );
  }
}

export default AboutNav;