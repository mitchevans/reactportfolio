import React, { Component } from 'react';
// import './App.css';
import '../assets/css/NavBar.css';

class NavBar extends Component {
  render() {
    
    return (
      
      <nav className="headerNav">
        <h2 className="logo">{this.props.logoTitle}</h2>
      </nav>
      
    );
    }
}

export default NavBar;