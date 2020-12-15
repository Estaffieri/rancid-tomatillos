import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App/App';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getAllMovies } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('Search', () => {
  const history = createMemoryHistory();
  let allMovies;

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

    getAllMovies.mockResolvedValueOnce(allMovies);
    render(<Router history={history}><App /></Router>)
  })

  it('displays the user input', () => {
    const searchField = screen.getByPlaceholderText("Search by Title")
    const userInput = "mulan"

    fireEvent.change(searchField, { target: { value: userInput } })

    expect(screen.getByDisplayValue(userInput)).toBeInTheDocument()
  })

})
