import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import movieData from '../../SampleMovieData';
import { getAllMovies, getSelectedMovie } from '../../apiCalls.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieDetails: {},
    };
  }

  componentDidMount() {
    getAllMovies().then(movieData => this.setState({movies: movieData.movies}))
  }

  displayMovieDetails = (id) => {
    getSelectedMovie(id).then(selectedMovie => this.setState({movieDetails: selectedMovie.movie}))
  }

  goBackToMain = () => {
    this.setState({movieDetails: {}})
  }

  render() {
    return (
      <main>
        <header tabIndex = {0}>
          <h1 className="tomato">&#x1F345;</h1>
          <h1 className="title">RANCID TOMATILLOS</h1>
          <h1 className="tomato">&#x1F345;</h1>
        </header>
        {Object.keys(this.state.movieDetails).length === 0 && <MovieContainer movies={this.state.movies} displayMovieDetails = {this.displayMovieDetails}/>}
        {Object.keys(this.state.movieDetails).length !== 0 && <MovieDetails movieDetails ={this.state.movieDetails} goBackToMain={this.goBackToMain}/>}
      </main>
    );
  }
}

export default App;
