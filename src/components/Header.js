import React, {Component} from 'react';
import Background from '../assets/img/monterey.jpg';
import '../assets/css/Header.css';
import NavBar from './NavBar';
//import HomeFooter from './Footer';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '100vh',
    backgroundSize: 'cover',
}

class Header extends Component {  

    render () {
        return (
            <header id="Home" style={myStyles}>
            <NavBar logoTitle="Mitchell Evans"/>
                <div className="banner">
                        <h1> Full Stack Web Developer</h1>

                        <hr/>

                       
                        <p>HTML/CSS | Javascript | Bootstrap | React | NodeJS | Express | MySQL | MongoDB</p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/evans-mitchell/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/mitchevans" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                              {/* Instagram */}
                              <a href="https://www.instagram.com/mitchtevans/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram"  aria-hidden="true" />
                            </a>

                        </div>
                        </div>
            </header>

        );
    }
    
};

export default Header; 