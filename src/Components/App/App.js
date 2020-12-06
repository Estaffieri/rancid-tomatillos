import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import { getAllMovies, getSelectedMovie } from '../../apiCalls.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieDetails: {},
      error: ''
    };
  }

  componentDidMount() {
    getAllMovies().then(movieData => this.setState({movies: movieData.movies}))
    .catch(errorMessage => this.setState({error: errorMessage.toString()}))
  }

  displayMovieDetails = (id) => {
    getSelectedMovie(id).then(selectedMovie => this.setState({movieDetails: selectedMovie.movie}))
    .catch(errorMessage => {console.log(errorMessage)})
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
        {this.state.error !== '' && <h2>Oops! Something went wrong. Try again later.</h2>}
        {Object.keys(this.state.movieDetails).length === 0 && this.state.error === '' && <MovieContainer movies={this.state.movies} displayMovieDetails = {this.displayMovieDetails}/>}
        {Object.keys(this.state.movieDetails).length !== 0 && <MovieDetails movieDetails ={this.state.movieDetails} goBackToMain={this.goBackToMain}/>}
      </main>
    );
  }
}

export default App;
