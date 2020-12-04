import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoviePoster from './MoviePoster';

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
})
