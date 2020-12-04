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
              className="movie-image"
              alt={movieDetails[0].movie.title}
            />
          </section>

          <section className="movie-info">
            <section className="back-button">
              <button>Go Back</button>
            </section>

            <section className="movie-highlights">
            <h3>{movieDetails[0].movie.title.toUpperCase()}</h3>
            <p className="tagline">{movieDetails[0].movie.tagline}</p>
            <p>Average Rating: &#11088; {movieDetails[0].movie.average_rating}</p>
            </section>

            <section className="movie-facts">
            <p id="i">Movie Runtime: {movieDetails[0].movie.runtime} mins</p>
            <p id="i">Released: {movieDetails[0].movie.release_date}</p>
            <p id="i">Genre: {movieDetails[0].movie.genres[0].name}</p>
            <p>{movieDetails[0].movie.overview}</p>

            <section className="movie-money-info">
            <p>Budget: ${movieDetails[0].movie.budget}</p>
            <p>Revenue: ${movieDetails[0].movie.revenue}</p>
            </section>
            </section>

          </section>
        </section>
        <section className="second-image-section">
          <img src={movieDetails[0].movie.backdrop_path}
              className="backdrop-image"
              alt={movieDetails[0].movie.title} />
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
