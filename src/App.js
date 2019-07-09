import React from 'react';

//import './App.css';

import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import RightNav from './components/RightNav';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <RightNav/>
      <Header title="Mitchell Evans" />
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
