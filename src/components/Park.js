import React, { Component } from 'react';
import '../App.css';

import Word from '../assets/img/word_guess.png';
import Tim from '../assets/img/tim.jpg';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../assets/css/Project.css';

class Park extends Component {
    render() {
        return (

      <Flippy className="card"
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        /// these are optional style, it is not necessary
        style={{    width: '300px',
                    height: '225px', 
                    float: 'left',
                    marginLeft: '20px',
                    marginTop: '20px',
                     }}
      >
        <FrontSide className="learn"
          style={{
            backgroundImage: `url( ${Word} )`,
            backgroundSize: 'cover',
            display: 'flex',
            border: 'solid', borderWidth: '1px', borderColor: '#fff'
          }}
        >
          <a  style={{ fontSize: '32px', fontWeight: '700', margin: 'auto', textAlign: 'center'}} >Learn More</a>
        </FrontSide>
        <BackSide
          style={{ border: 'solid', borderWidth: '1px', borderColor: '#fff', backgroundImage: `url( ${Tim} )`,backgroundSize: 'cover', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h4 style={{width: '298px', margin: '0px', color: '#fff', backgroundColor: '#27221F', opacity: '.9', position: 'fixed', top: '15px', left: '0', paddingTop: '10px', paddingBottom: '10px'}}>{this.props.title}</h4>
          <p style={{fontSize: '14px', color: '#fff'}}>{this.props.text}</p>
          <a href="https://mitchevans.github.io/Word_Guess_Game/" target="_blank" style={{position: 'fixed', bottom: '15px', left: '55px', textDecoration: 'none', color: 'red', fontSize: '18px', fontWeight: '600', fontFamily:'Roboto'}}>Demo</a>
          <a href='https://github.com/mitchevans/Word_Guess_Game' target="_blank" style={{position: 'fixed', bottom: '15px', right: '55px', textDecoration: 'none', color: 'red', fontSize: '18px', fontWeight: '600', fontFamily:'Roboto'}}>Github</a>
          
        </BackSide>
      </Flippy>
        );
    }
}

export default Park;