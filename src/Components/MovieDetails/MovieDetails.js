import React, { Component } from "react";
import "./MovieDetails.css";
import { getSelectedMovie, getMovieTrailers } from '../../apiCalls';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {},
      movieTrailers: [],
      error: ''
    }
  }

  componentDidMount() {
    getSelectedMovie(parseInt(this.props.id))
      .then(selectedMovie => {
        this.setState({movieDetails: selectedMovie.movie})
        this.getTrailers()
      })
      .catch(errorMessage => this.setState({error: errorMessage.toString()}))

  }

  getTrailers() {
    getMovieTrailers(parseInt(this.props.id))
    .then(movieTrailers => this.setState({movieTrailers: movieTrailers.videos}))
    .then(() => this.loadMovieTrailers())
    .catch(errorMessage => this.setState({error: errorMessage.toString()}))
  }

  goBackToMain = () => {
    this.setState({movieDetails: {}})
    this.setState({movieTrailer: []})
  }
  
  displayMovieTrailers = () => {
    const selectedMovieTrailers = this.state.movieTrailers.map(video => {
    return (<ReactPlayer key={video.id} 
    url={`https://www.youtube.com/embed/${video.key}`} />)
    })
    return selectedMovieTrailers
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
        <section className="movie-trailers">
          <Carousel>   
            {this.state.movieTrailers.map(video => {
                return (<ReactPlayer key={video.id} 
                url={`https://www.youtube.com/embed/${video.key}`} />)
    })}
          </Carousel>
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
