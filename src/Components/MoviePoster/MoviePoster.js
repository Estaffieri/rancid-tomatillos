import React from 'react';
import './MoviePoster.css'

const MoviePoster = ({ id, image, title, rating, displayMovieDetails }) => {
    return (
      <section tabIndex ={0} className="poster" onClick={ ()=> displayMovieDetails(id) }>
        <img src={ image } id ={ id } className="poster-image" alt={ title } />
        <h3>{ title }</h3>
        <p>&#11088;  { rating }</p>
      </section>
    );
}

export default MoviePoster;
