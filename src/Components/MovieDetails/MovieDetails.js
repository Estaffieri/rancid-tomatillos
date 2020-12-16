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
      <section className="go-back-section">
        <Link to="/">
          <button onClick={() => this.goBackToMain()} className="back-button">GO BACK</button>
        </Link>
      </section>
      <section className="header-info">
        <h3>{this.state.movieDetails.title.toUpperCase()}</h3>
          <p className="tagline">{this.state.movieDetails.tagline}</p>
          <p className="tagline">Average Rating: &#11088; {this.state.movieDetails.average_rating.toFixed(1)}</p>
      </section>
        <section className="movie-details">
          <section className="movie-facts">
            <section>
              <img
               src={this.state.movieDetails.poster_path}
               className="movie-image"
               alt={this.state.movieDetails.title}/>
              </section>
              <section className="movie-highlights">
                <h4>Movie Summary:</h4>
                <p>{this.state.movieDetails.overview}</p>
                <h4>Movie Runtime:</h4>
                <p>{this.state.movieDetails.runtime} mins</p>
                <h4>Released:</h4>
                <p>{new Date(this.state.movieDetails.release_date).toLocaleDateString()}</p>
                <h4>Genre:</h4>
                <p> {this.state.movieDetails.genres[0]}</p>
                <h4>Budget:</h4>
                <p> ${new Intl.NumberFormat('en-US').format(this.state.movieDetails.budget)}</p>
                <h4>Revenue:</h4>
                <p> ${new Intl.NumberFormat('en-US').format(this.state.movieDetails.revenue)}</p>
              </section>
            </section>
          <section className="movie-info">
          <img src={this.state.movieDetails.backdrop_path}
           className="backdrop-image"
           alt={this.state.movieDetails.title} />
            <section className="movie-trailers">
              <Carousel showThumbs={false} width={650}>
                {this.state.movieTrailers.map(video => {
                    return (<ReactPlayer data-testid={video.id} key={video.id}
                    url={`https://www.youtube.com/embed/${video.key}`} />)
                  })
                }
              </Carousel>
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
}
}

export default MovieDetails;
