import React from 'react';
import './MoviePoster.css'

const MoviePoster = ({ image, title, rating }) => {
    return (
      <section tabIndex ={0} className="poster">
        <img src={ image } className="poster-image" alt={ title } />
        <h3>{ title }</h3>
        <p>&#11088;  { rating }</p>
      </section>
    );
}

export default MoviePoster;
