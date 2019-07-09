import React, { Component } from 'react';
// import './App.css';
import '../assets/css/Projects.css';
import Project from './Project';
import Burger from './Burger';
import Office from './Office';
import Park from './Park';
import Pattern from '../assets/img/pattern.jpg';
import ProjectNav from '../components/ProjectNav';


class Projects extends Component {
  render() {
   
      return (
        <div id="Projects" className="projects">
            <ProjectNav logoTitle="Projects"/>
           
            
            <Project    text="A memory game made with React and Bootstap. The object of the game is to click on each character once without repeting. The characters will shuffle position after every click." 
                        title="Twin Clicks"
                        
            />
            <Burger    text="Order burgers and devour them with MongoDB"
                        title="Hawaiian Burger"
                       
            />
            <Office    text="Test your knowledge of The Office in this trivia game. Tecnology used "
                        title="The Office Trivia"
                        
            />
            <Park     text="Guess the names of dinosaurs in this hangman style game. Tecnology used: momentJS, javascript"
                        title="Guessasaurus"
            />
        </div>
    );
  }
}

export default Projects;