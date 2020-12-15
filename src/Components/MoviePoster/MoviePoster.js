import React from 'react';
import './MoviePoster.css'
import { Link } from 'react-router-dom';

const MoviePoster = ({ id, image, title, rating, displayMovieDetails }) => {
    return (
      <Link to={`/movie/${id}`}
        tabIndex={0}
        className="poster">
          <img src={image} id={id} className="poster-image" alt={title} />
          <h3 className="title">{title}</h3>
          <p className="rating">Average Rating: &#11088;{rating.toFixed(1)}</p>
      </Link>
    );
}

export default MoviePoster;
