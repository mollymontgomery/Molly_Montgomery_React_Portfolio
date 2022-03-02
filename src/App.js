import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Projects/>
        <Footer/>
      </div>
    )
  }
}

export default App;