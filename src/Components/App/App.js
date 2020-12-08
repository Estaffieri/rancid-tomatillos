import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import { getAllMovies, getSelectedMovie } from '../../apiCalls.js'
import { Route, NavLink, Switch} from "react-router-dom";

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
    .catch(errorMessage => this.setState({error: errorMessage.toString()}))
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
        <Route exact path="/" render={ () =>{ return(<MovieContainer movies={this.state.movies} displayMovieDetails = {this.displayMovieDetails}/>)}}/>
      </main>
    );
  }
}

export default App;
