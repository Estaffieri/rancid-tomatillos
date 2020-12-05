import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoviePoster from "./MoviePoster";
import { displayMovieDetails } from "../App/App";
import { getSelectedMovie } from '../../apiCalls';
jest.mock("../../apiCalls");

describe('Movie Poster', () => {
  it('should render a movie poster', () => {
    render(<MoviePoster
      id={ 1 }
      image="https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg"
      title= "Best Movie Ever"
      rating={ 9.544442 }
      displayMovieDetails = {jest.fn()}
      key = { 1 }
    />)

    expect(screen.getByText("Best Movie Ever")).toBeInTheDocument();
    expect(screen.getByAltText("Best Movie Ever")).toBeInTheDocument(); expect(screen.getByText(9.5)).toBeInTheDocument()
  })

  it('should call displayMovieDetails with the correct id', () => {
    const mockDisplayMovieDetails = jest.fn()

    render(<MoviePoster
      id={ 2 }
      image="https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg"
      title= "Worst Movie Ever"
      rating={ 1.5 }
      displayMovieDetails = {mockDisplayMovieDetails}
      key = { 1 }
    />)

    const posterImage = screen.getByAltText("Worst Movie Ever")
    fireEvent.click(posterImage)

    expect(mockDisplayMovieDetails).toHaveBeenCalledWith(2)

  })

  it ('should display a single movie', async () => {

    render(
      <MoviePoster
        id={694919}
        image="some-image"
        title="Money Plane"
        rating={6.666666666666667}
        displayMovieDetails={jest.fn()}
        key={694919}
      />
    );

    const posterImage = await waitFor(() => screen.getByAltText("Money Plane"));
    fireEvent.click(posterImage);    

        getSelectedMovie.mockResolvedValueOnce({
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
            tagline: "",
            average_rating: 6.666666666666667,
          },
        });

        expect(posterImage).toBeInTheDocument();


  })
})
