import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.666666666666667,
        "release_date": "2020-09-29"
        },
        {
        "id": 337401,
        "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        "title": "Mulan",
        "average_rating": 4.909090909090909,
        "release_date": "2020-09-04"
        }
      ]
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
