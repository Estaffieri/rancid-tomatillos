import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';
import movieData from '../../SampleMovieData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main>
        <header>
          <h1 className="tomato">&#x1F345;</h1>
          <h1 className="title">RANCID TOMATILLOS</h1>
          <h1 className="tomato">&#x1F345;</h1>
        </header>
        <MovieContainer movies={this.state.movies} />
      </main>
    );
  }
}

export default App;
