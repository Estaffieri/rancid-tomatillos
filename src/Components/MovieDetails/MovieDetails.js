import React from "react";
import "./MovieDetails.css";
import MovieContainer from '../MovieContainer/MovieContainer';

const MovieDetails = ({ movieDetails, goBackToMain }) => {

    const details = (
      <section>
        <section className="macro-container">
          <section tabIndex={0} className="poster">
            <img
              src={movieDetails.poster_path}
              className="movie-image"
              alt={movieDetails.title}
            />
          </section>

          <section className="movie-info">
            <section className="go-back-section">
              <button onClick={() => goBackToMain()} className="back-button">Go Back</button>
            </section>

            <section className="movie-highlights">
              <h3>{movieDetails.title.toUpperCase()}</h3>
              <p className="tagline">{movieDetails.tagline}</p>
              <p>Average Rating: &#11088; {movieDetails.average_rating.toFixed(1)}</p>
            </section>

            <section className="movie-facts">
              <p id="i">Movie Runtime: {movieDetails.runtime} mins</p>
              <p id="i">Released: {movieDetails.release_date}</p>
              <p id="i">Genre: {movieDetails.genres[0].name}</p>
              <p>{movieDetails.overview}</p>

              <section className="movie-money-info">
              <p>Budget: ${movieDetails.budget}</p>
              <p>Revenue: ${movieDetails.revenue}</p>
            </section>
            </section>

          </section>
        </section>
        <section className="second-image-section">
          <img src={movieDetails.backdrop_path}
              className="backdrop-image"
              alt={movieDetails.title} />
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
