import MovieDetails from './MovieDetails';
import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getSelectedMovie, getMovieTrailers } from "../../apiCalls";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
jest.mock("../../apiCalls");


describe('Movie Details', () => {
  const history = createMemoryHistory();
  let currentMovie;
  let currentMovieTrailers;

  beforeEach(() => {

     currentMovie = {
      movie: {
        id: 694919,
        title: "Money Plane",
        poster_path:
          "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path:
          "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        release_date: "2020-09-29",
        overview:
          "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        genres: ["Action"],
        budget: 0,
        revenue: 0,
        runtime: 82,
        tagline: "Tagline goes here",
        average_rating: 6.666666666666667,
      }};

      currentMovieTrailers = {
          videos: [{
            id: 242,
            key: "01ON04CwKs",
            movie_id: 694919,
            site: "YouTube",
            type: "Teaser"
          }],
        }

      getSelectedMovie.mockResolvedValueOnce(currentMovie);
      getMovieTrailers.mockResolvedValueOnce(currentMovieTrailers)

      render(
        <Router history={ history }>
          <MovieDetails
            id={694919}
          />
        </Router>
      )
  })

  it('should display a single movie correctly', async () => {

    const movieDetailsTitle = await waitFor(() => screen.getByText("MONEY PLANE"));
    const movieDetailsTagline = await waitFor(() => screen.getByText("Tagline goes here"));
    const movieDetailsRating = await waitFor(() =>  screen.getByText("Average Rating: ⭐ 6.7"));
    const movieDetailsRuntime = await waitFor(() => screen.getByText("82 mins"));

    expect(movieDetailsTitle).toBeInTheDocument();
    expect(movieDetailsTagline).toBeInTheDocument();
    expect(movieDetailsRating).toBeInTheDocument();
    expect(movieDetailsRuntime).toBeInTheDocument();
  })

  it('should display a movies trailers', async () => {
    const movieTrailerId = await waitFor(() => screen.getByTestId(242))

    expect(movieTrailerId).toBeInTheDocument();
  })
})
