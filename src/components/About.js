import React, { Component } from 'react';
// import './App.css';
import '../assets/css/About.css';
import Pattern from '../assets/img/pattern.jpg';
import AboutNav from '../components/AboutNav';
import Mitch from '../assets/img/mitchATT.jpeg';
import Mugs from '../assets/img/4mugs.jpg';

class About extends Component {
  render() {

    return (
      <div id="About" className="about">
        <AboutNav logoTitle="About" />
        <div class="container">

        <div>
        </div>

        <img src={Mitch} id="profilePic"/>

          <p> My name is MItchell Evans and I am a full stack web developer from Walnut Creek, CA. I attended Sacramento State University and graduated in
              2014 with a bachelor's degree in philosphy. After college, I moved back to the bay area to obtain my
              paralegal certificate from Cal State East Bay. I have worked as a paralegal in Estate Planning, Probate and
              Trust Administration and Family Law. With the desire to enter a new field of work and tap into my creative side, I obtained
    a certificate for web development from UC Berkeley Extension.</p>

          <img src={Mugs} id="mugs"/>

            <p>My intrests include making pottery, watching baseball, and spending time outside. I am a member of the Red
    Ox Clay Studio in Concord, CA where I make and sell my pottery.</p>
    </div>
        </div>
          );
        }
      }
      
export default About;