import React, { Component } from 'react';
// import './App.css';
import '../assets/css/Contact.css';
import Pattern from '../assets/img/pattern.jpg';
import ContactNav from '../components/ContactNav';
import MitchHat from '../assets/img/mitchHat.jpg'
import '../assets/css/Contact.css';

class Contact extends Component {
  render() {

    return (
      <div id="Contact" className="contact">
        <ContactNav logoTitle="Contact" />
        <div className="container">
          <img src={MitchHat} id="contactPic" />
          <h2>Mitchell Evans</h2>
          <hr/>
          <ul>
          <li><i className="fa fa-phone-square" aria-hidden="true"/> (925) 708-7160</li>
          <li><i className="fa fa-envelope" aria-hidden="true" /> mrmtevans@gmail.com</li>
          <li><i className="fa fa-linkedin-square" aria-hidden="true" /> https://www.linkedin.com/in/evans-mitchell/</li>
          <li><i className="fa fa-github-square" aria-hidden="true" /> https://github.com/mitchevans</li>
          <li><i className="fa fa-instagram" aria-hidden="true" /> https://www.instagram.com/mitchtevans/</li>
          </ul>
        </div>
       
      </div>
    );
  }
}

export default Contact;