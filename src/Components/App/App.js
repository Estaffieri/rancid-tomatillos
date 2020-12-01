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
    return(
      <main>
        <h1>Rancid Tomatillos</h1>
        <MovieContainer movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;
