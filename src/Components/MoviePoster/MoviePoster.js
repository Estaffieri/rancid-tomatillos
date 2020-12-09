import React from 'react';
import './MoviePoster.css'
import { Link } from 'react-router-dom';

const MoviePoster = ({ id, image, title, rating, displayMovieDetails }) => {
    return (
      <Link to={`/${id}`}
          tabIndex={0}
          className="poster"
>
          <img src={image} id={id} className="poster-image" alt={title} />

          <h3>{title}</h3>
          <p>&#11088;</p>
          <p>{rating.toFixed(1)}</p>
      </Link>
    );
}

export default MoviePoster;
