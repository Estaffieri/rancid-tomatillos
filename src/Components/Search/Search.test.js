import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Search from './Search';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getAllMovies } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('Search', () => {
  const history = createMemoryHistory();
  const mockInputValue = jest.fn();

  beforeEach(() => {
    render(
      <Router history={history}>
        <Search inputValue={mockInputValue}/>
      </Router>
      )
  })

  it('displays the user input', () => {
    const searchField = screen.getByPlaceholderText("Search by Title")
    const userInput = "mulan"

    fireEvent.change(searchField, { target: { value: userInput } })

    expect(screen.getByDisplayValue(userInput)).toBeInTheDocument()
  })

  it('should update input on change', () => {
    const searchField = screen.getByPlaceholderText('Search by Title')
    userEvent.type(searchField, "movie title")

    expect(mockInputValue).toHaveBeenCalled()
    expect(searchField.value).toContain("movie title")
  })

})
