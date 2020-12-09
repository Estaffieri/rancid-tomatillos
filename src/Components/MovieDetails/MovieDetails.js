import React, { Component } from "react";
import "./MovieDetails.css";
import { getSelectedMovie, getMovieTrailers } from '../../apiCalls';
import {Link} from 'react-router-dom';


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      movieDetails: {},
      movieTrailers: [],
      error: ''
    }
  }
  componentDidMount() {
  getSelectedMovie(parseInt(this.state.id)).then(selectedMovie => this.setState({movieDetails: selectedMovie.movie}))
  .catch(errorMessage => this.setState({error: errorMessage.toString()}))

  getMovieTrailers(parseInt(this.state.id)).then(movieTrailers => this.setState({movieTrailers: movieTrailers})).catch(errorMessage => this.setState({error: errorMessage.toString()}))
  }

  goBackToMain = () => {
    this.setState({movieDetails: {}})
    // this.setState({movieTrailer: []})
  }

  render() {
  let details;

  if(!this.state.movieDetails.id) {
    return <h1>Loading...</h1>
  } else {
    details = (
      <section>
        <section className="macro-container">
          <section tabIndex={0} className="poster">
            <img
              src={this.state.movieDetails.poster_path}
              className="movie-image"
              alt={this.state.movieDetails.title}
            />
          </section>
          <section className="movie-info">
            <section className="go-back-section">
              <Link to="/">
              <button onClick={() => this.goBackToMain()} className="back-button">Go Back</button>
              </Link>
            </section>
            <section className="movie-highlights">
              <h3>{this.state.movieDetails.title.toUpperCase()}</h3>
              <p className="tagline">{this.state.movieDetails.tagline}</p>
              <p>Average Rating: &#11088; {this.state.movieDetails.average_rating.toFixed(1)}</p>
            </section>
            <section className="movie-facts">
              <p id="i">Movie Runtime: {this.state.movieDetails.runtime} mins</p>
              <p id="i">Released: {this.state.movieDetails.release_date}</p>
              <p id="i">Genre: {this.state.movieDetails.genres[0]}</p>
              <img src={this.state.movieDetails.backdrop_path}
                  className="backdrop-image"
                  alt={this.state.movieDetails.title} />
              <p>{this.state.movieDetails.overview}</p>
              <section className="movie-money-info">
              <p>Budget: ${this.state.movieDetails.budget}</p>
              <p>Revenue: ${this.state.movieDetails.revenue}</p>
            </section>
            </section>
          </section>
        </section>
        <section className="second-image-section">

      </section>
      </section>
    );

    return (
      <section className="movie-detail-view">
         { details }
      </section>
    )
  }
}
}

export default MovieDetails;
