import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import { getAllMovies } from '../../apiCalls.js'
import { Route } from "react-router-dom";


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    };
  }

  componentDidMount() {
    getAllMovies().then(movieData => this.setState({movies: movieData.movies}))
    .catch(errorMessage => this.setState({error: errorMessage.toString()}))
  }

  sortMovieRatings = (sortedBy) => {
    if( sortedBy === "bw" ) {
    const sortedMoviesByRating = this.state.movies.sort((a, b) => b.average_rating - a.average_rating)
    console.log(sortedMoviesByRating)
    this.setState({movies: sortedMoviesByRating})
    } else {
      const sortedMoviesByRating = this.state.movies.sort(
        (a, b) => a.average_rating - b.average_rating
      );
      console.log(sortedMoviesByRating);
      this.setState({ movies: sortedMoviesByRating });
    }
  }

  render() {
    return (
      <main>
        <header tabIndex={0}>
          <h1 className="tomato">&#x1F345;</h1>
          <h1 className="title">RANCID TOMATILLOS</h1>
          <h1 className="tomato">&#x1F345;</h1>
          <button onClick={() => this.sortMovieRatings("bw")}>Ratings Best to Worst</button>
          <button onClick={() => this.sortMovieRatings("wb")}>Ratings Worst to Best</button>
        </header>

        <Route
          exact
          path="/"
          render={() => {
            return <MovieContainer movies={this.state.movies} />;
          }}
        />

        <Route
          exact
          path="/movie/:id"
          render={({ match }) => {
            return <MovieDetails id={match.params.id} key={match.params.id} />;
          }}
        />
      </main>
    );
  }
}

export default App;
