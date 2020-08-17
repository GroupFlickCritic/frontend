import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import About from './components/About/About'

import Info from './components/Info/Info'
import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <About />

        <Info />
        <Home />

      </div>
    );
  }
}

export default App;