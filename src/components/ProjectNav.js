import React, { Component } from 'react';
// import './App.css';
import '../assets/css/ProjectNav.css';

class ProjectNav extends Component {
  render() {
  
    return (
      <nav id='projectNav'>
        <h2 className="logo">{this.props.logoTitle}</h2>
      </nav>
    );
  }
}

export default ProjectNav;