import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import App from './App';
import MovieDetails from '../MovieDetails/MovieDetails';
import MoviePoster from '../MoviePoster/MoviePoster';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getAllMovies, getSelectedMovie } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('App', () => {
  const history = createMemoryHistory();
  const mockSortMovieRatings = jest.fn();
  let allMovies;
  let selectedMovie;

  beforeEach(() => {
    allMovies = {
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
    }

    // selectedMovie = {
    //   movie: {
    //     id: 7456,
    //     title: "Super Fake Movie",
    //     poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
    //     backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
    //     release_date:"2020-09-04",
    //     overview:"Watch this great movie!",
    //     genres:["Romance"],
    //     budget: 5,
    //     revenue:100000000,
    //     runtime: 45,
    //     tagline: "You will not regret watching!",
    //     average_rating: 1.909090909090909,
    //     key: 7456
    //   }
    // }

    getAllMovies.mockResolvedValueOnce(allMovies);
    // getSelectedMovie.mockResolvedValueOnce(selectedMovie)

    render(<Router history={history}><App /></Router>)
  })

  it('should render a header', () => {
    expect(screen.getByText("RANCID TOMATILLOS")).toBeInTheDocument()
  })

  it('should render search field and sort buttons', () => {
    expect(screen.getByPlaceholderText("Search by Title")).toBeInTheDocument()
    expect(screen.getByText("Ratings Best to Worst")).toBeInTheDocument()
    expect(screen.getByText("Ratings Worst to Best")).toBeInTheDocument()
  })

  it('should render movie posters', async () => {
    expect(screen.getByText("Super Fake Movie")).toBeInTheDocument()
    expect(screen.getByAltText("Super Fake Movie")).toBeInTheDocument()
    expect(screen.getByText(1.9)).toBeInTheDocument()
  })

  it('should render movie details when a poster is clicked', async () => {
    const posterImage = screen.getByAltText("Super Fake Movie")
    fireEvent.click(posterImage)

    const movieTitle = await waitFor(() => screen.getByText("SUPER FAKE MOVIE"))
    expect(movieTitle).toBeInTheDocument()
  })

  it('sortMovieRatings sorts movies from best to worst rating', () => {
    const bestToWorstRatingButton = screen.getByText("Ratings Best to Worst")

    userEvent.click(bestToWorstRatingButton);

    expect(screen.getByText('SUPER FAKE MOVIE')).toBeInTheDocument()
  })

  it('sortMovieRatings sorts movies from worst to best rating', () => {
    const worstToBestRatingButton = screen.getByText("Ratings Worst to Best")

    userEvent.click(worstToBestRatingButton);

    expect(screen.getByText("Average Rating: ⭐ 1.9")).toBeInTheDocument()
  })
})
