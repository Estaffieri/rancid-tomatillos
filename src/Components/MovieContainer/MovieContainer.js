import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MovieContainer.css';

const MovieContainer = ({ movies }) => {

  const posters = movies.map(movie => {
    return (
      <MoviePoster
        image={ movie.poster_path }
        title={ movie.title }
        rating={ movie.average_rating.toFixed(2) }
      />
    )
  })

  return (
    <section className="movies-container">
      {posters}
    </section>
  )
}

export default MovieContainer;
