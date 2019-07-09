import React, { Component } from 'react';
// import './App.css';
import '../assets/css/ContactNav.css';

class ContactNav extends Component {
  render() {
  
    return (
      <nav id='contactNav'>
        <h2 className="logo">{this.props.logoTitle}</h2>
      </nav>
    );
  }
}

export default ContactNav;