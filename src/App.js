import React, { Component } from 'react';
import About from './components/About/About'
import Nav from './components/Nav/Nav'
import Info from './components/Info/Info'
import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <div>
        <About />
        <Nav/>
        <Info/>
        <Home/>

      </div>
    );
  }
}

export default App;