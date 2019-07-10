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
        </div>
        <div id="contactList">
          
        </div>
      </div>
    );
  }
}

export default Contact;