import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MovieContainer.css';
import { Link } from 'react-router-dom';

const MovieContainer = ({ movies, displayMovieDetails}) => {

  const posters = movies.map(movie => {
    return (
        <MoviePoster
          id={movie.id}
          image={movie.poster_path}
          title={movie.title}
          rating={movie.average_rating}
          displayMovieDetails={displayMovieDetails}
          key={movie.id}
        />
    );
  })

  return (
       <Link to="/" className ="movies-container">
      { posters }
      </Link>
  )
}

export default MovieContainer;
