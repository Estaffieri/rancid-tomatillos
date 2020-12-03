import React from "react";
import "./MovieDetails.css";
import MovieContainer from '../MovieContainer/MovieContainer';

const MovieDetails = ({ movieDetails }) => {
    console.log(movieDetails)
   
    const details = 
   
      <section
        tabIndex={0}
        className="poster"
        // onClick={() => displayMovieDetails(id)}
      >
        <img src={ movieDetails[0].movie.poster_path } className="poster-image" alt={movieDetails[0].movie.title} />
        <h3>{ movieDetails[0].movie.title }</h3>
        <p>&#11088; { movieDetails[0].movie.average_rating }</p>
      </section>
    
    

    return (
     <section className="movie-detail-view">
         { details }
    </section>
    )

}

export default MovieDetails;