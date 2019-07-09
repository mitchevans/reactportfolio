import React, { Component } from 'react';
// import './App.css';
import '../assets/css/Contact.css';
import Pattern from '../assets/img/pattern.jpg';
import ContactNav from '../components/ContactNav';


class Contact extends Component {
  render() {
   
      return (
        <div id="Contact" className="contact">
            <ContactNav logoTitle="Contact"/>
            
        </div>
    );
  }
}

export default Contact;