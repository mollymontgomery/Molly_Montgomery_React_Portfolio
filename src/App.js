import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <Nav></Nav>
        <Projects></Projects>
        <Resume></Resume>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default App;
