import React, { Component } from 'react';
// import './App.css';
import '../assets/css/RightNav.css';

class RightNav extends Component {
  render() {
    const sections = ['Home', 'About', 'Projects', 'Contact'];
    const navLinks = sections.map(section => {
      return (
        <a className='pageLinks' href={'#' + section}>{section}</a>
      )
    });
    return (
      
      <nav className="rightNav">
        
          {navLinks}
        
      </nav>
      
    );
  }
}

export default RightNav;