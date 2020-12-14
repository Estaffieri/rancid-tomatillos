import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import { getAllMovies } from '../../apiCalls.js'
import { Route } from "react-router-dom";
import Search from '../Search/Search';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      input: ''
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
  getUserInput = (inputValue) => {
    this.setState({input: inputValue})
  }

  get filterMoviesByTitle() {
   const filteredMovies = this.state.movies.filter(movie => {
     return movie.title.toLowerCase().includes(this.state.input)
    })

   return filteredMovies
  }

  render() {
    return (
      <main>
        <header tabIndex={0}>
          <section className="logo">
            <h1 className="tomato">&#x1F345;</h1>
            <h1 className="title">RANCID TOMATILLOS</h1>
            <h1 className="tomato">&#x1F345;</h1>
          </section>
          <section className="search">
            <Search inputValue={this.getUserInput} />
          </section>
          <section className="filtering-buttons">
            <button onClick={() => this.sortMovieRatings("bw")}>
              Ratings Best to Worst
            </button>
            <button onClick={() => this.sortMovieRatings("wb")}>
              Ratings Worst to Best
            </button>
          </section>
        </header>

        <Route
          exact
          path="/"
          render={() => {
            return <MovieContainer movies={this.filterMoviesByTitle}  />;
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
