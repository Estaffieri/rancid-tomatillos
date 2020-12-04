import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import movieData from '../../SampleMovieData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      movieDetails: []
    }
  }

  displayMovieDetails = (id) => {

    const selectedMovie = [{
      movie: {
        id: 1,
        title: "Fake Movie Title",
        poster_path:
          "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
        backdrop_path:
          "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
        release_date: "2019-12-04",
        overview:
          "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
        average_rating: 6,
        genres: [{ id: 18, name: "Drama" }],
        budget: 63000000,
        revenue: 100853753,
        runtime: 139,
        tagline: "It's a movie!",
      },
    }];
     this.setState({ movieDetails: selectedMovie });
  }

  render() {
    return (
      <main>
        <header tabIndex = {0}>
          <h1 className="tomato">&#x1F345;</h1>
          <h1 className="title">RANCID TOMATILLOS</h1>
          <h1 className="tomato">&#x1F345;</h1>
        </header>
        {this.state.movieDetails.length === 0 && <MovieContainer movies={this.state.movies} displayMovieDetails = {this.displayMovieDetails}/>}
        {this.state.movieDetails.length !== 0 && <MovieDetails movieDetails ={this.state.movieDetails} />}
      </main>
    );
  }
}

export default App;
