import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoviePoster from "./MoviePoster";
import { displayMovieDetails } from "../App/App";
import { getSelectedMovie } from '../../apiCalls';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
jest.mock("../../apiCalls");

describe('Movie Poster', () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router history={history}>
        <MoviePoster
        id={ 1 }
        image="https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg"
        title= "Best Movie Ever"
        rating={ 9.544442 }
        key = { 1 }
        />
      </Router>
    )
  })

  it('should render a movie poster', () => {
    expect(screen.getByText("Best Movie Ever")).toBeInTheDocument();
    expect(screen.getByAltText("Best Movie Ever")).toBeInTheDocument(); expect(screen.getByText(9.5)).toBeInTheDocument()
  })
})
