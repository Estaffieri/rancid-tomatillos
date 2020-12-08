import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MovieContainer.css';
import { Link } from 'react-router-dom';

const MovieContainer = ({ movies, displayMovieDetails}) => {

  const posters = movies.map(movie => {
    return (
      <Link to="/" style={{textDecoration: "none"}}>
        <MoviePoster
          id={movie.id}
          image={movie.poster_path}
          title={movie.title}
          rating={movie.average_rating}
          displayMovieDetails={displayMovieDetails}
          key={movie.id}
        />
      </Link>
    );
  })

  return (
    <section className="movies-container">
      { posters }
    </section>
  )
}

export default MovieContainer;
