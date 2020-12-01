import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MovieContainer.css';

const MovieContainer = ({ movies }) => {

  const posters = movies.map(movie => {
    return (
      <section className="poster">
        <img src={ movie.poster_path } />
        <h3>{ movie.title }</h3>
        <p>{ movie.average_rating.toFixed(2) }</p>
      </section>
    )
  })

  return (
    <section className="movies-container">
      {posters}
    </section>
  )
}

export default MovieContainer;
