import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import MovieDetails from '../MovieDetails/MovieDetails';
import MoviePoster from '../MoviePoster/MoviePoster';
import { getAllMovies, getSelectedMovie } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('App', () => {
  it('should render a header', () => {
    render(
    <header tabIndex = {0}>
      <h1 className="tomato">&#x1F345;</h1>
      <h1 className="title">RANCID TOMATILLOS</h1>
      <h1 className="tomato">&#x1F345;</h1>
    </header>
    )

    expect(screen.getByText("RANCID TOMATILLOS")).toBeInTheDocument()
  })

  it('should render movie details', async () => {
    getAllMovies.mockResolvedValueOnce({
      movies: [
      {
        id: 7456,
        poster_path:
          "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        backdrop_path:
          "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        title: "Super Fake Movie",
        average_rating: 1.909090909090909,
        release_date: "2020-09-04",
        key: 7456,
      }]
    })

    render(<App />)

    getSelectedMovie.mockResolvedValueOnce({
      movie: {
        id: 7456,
        title: "Super Fake Movie",
        poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        release_date:"2020-09-04",
        overview:"Watch this great movie!",
        genres:["Romance"],
        budget: 5,
        revenue:100000000,
        runtime: 45,
        tagline: "You will not regret watching!",
        average_rating: 1.909090909090909,
        key: 7456
      }
    })

    render(
    <MoviePoster
      id={ 7456 }
      image= "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg"
      title="Super Fake Movie"
      rating={1.909090909090909}
      displayMovieDetails = {jest.fn()}
      key = { 7456 }
      />)

    const posterImage = screen.getByAltText("Super Fake Movie")
    fireEvent.click(posterImage)

    const movieTitle = await waitFor(() => screen.getByText("Super Fake Movie"))
    expect(movieTitle).toBeInTheDocument()
  })
})
