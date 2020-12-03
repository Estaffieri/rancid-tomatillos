import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoviePoster from './MoviePoster';

describe('Movie Poster', () => {
  it('should render a movie poster', () => {
    render(<MoviePoster
      id={ 1 }
      image="https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg"
      title= "Best Movie Ever"
      rating={ 9.5 }
      displayMovieDetails = {jest.fn()}
      key = { 1 }
    />)

    expect(screen.getByText("Best Movie Ever")).toBeInTheDocument()
    expect(screen.getByAltText("Best Movie Ever")).toBeInTheDocument()
    // expect(screen.getByText("9.5")).toBeInTheDocument()
    // we are expecting to see the integer 9.5 rendered on the page as part of the movie posters
    // getByText is looking for STRINGS on the page, NOT integers which is our problem
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

  })
})





// MOVE POSTER test
// test 1: a movie poster is rendered (confirm image/title/rating with 'toBeInTheDocument')
// test 2: displayMovieDetails function is fired on click
