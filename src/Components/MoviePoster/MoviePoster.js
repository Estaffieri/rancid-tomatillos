import React from 'react';
import './MoviePoster.css'

const MoviePoster = ( {image, title, rating}) => {
    return(
      <section className="poster">
        <img src={ image } className="poster-image" />
        <h3>{ title }</h3>
        <p>{ rating }</p>
      </section>
    )
}

export default MoviePoster;
