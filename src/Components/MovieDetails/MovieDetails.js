import React from "react";
import "./MovieDetails.css";
import MovieContainer from '../MovieContainer/MovieContainer';

const MovieDetails = ({ movieDetails }) => {

    const details = (
      <section>
        <section className="macro-container">
          <section tabIndex={0} className="poster">
            <img
              src={movieDetails[0].movie.poster_path}
              className="poster-image"
              alt={movieDetails[0].movie.title}
            />
          </section>

          <section className="movie-info">
            <section className="back-button">
              <button>Go Back</button>
            </section>

            <h3>{movieDetails[0].movie.title.toUpperCase()}</h3>
            <p className="tagline">{movieDetails[0].movie.tagline}</p>
            <p>Average Rating: &#11088; {movieDetails[0].movie.average_rating}</p>
            <section className="movie-facts">
            <p>Movie Runtime: {movieDetails[0].movie.runtime} mins</p>
            <p>Released: {movieDetails[0].movie.release_date}</p>
            <p>Genre: {movieDetails[0].movie.genres[0].name}</p>
            <p>{movieDetails[0].movie.overview}</p>
            <p>Budget: {movieDetails[0].movie.budget}</p>
            <p>Revenue: {movieDetails[0].movie.revenue}</p>
            </section>
          </section>
        </section>
      </section>
    );


    return (
     <section className="movie-detail-view">
         { details }
    </section>
    )

}

export default MovieDetails;
