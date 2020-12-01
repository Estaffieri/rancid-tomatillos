import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <main>
        <h1>Rancid Tomatillos</h1>
        <MovieContainer />
      </main>
    )
  }
}

export default App;
