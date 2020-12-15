import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Header from './Header';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Header', () => {
  const history = createMemoryHistory();
  const mockSortMovieRatings = jest.fn();

  beforeEach(() => {
    render(
      <Router history={history}>
        <Header sortMovieRatings={mockSortMovieRatings} />
      </Router>)
  })

  it('should render a header', () => {
    expect(screen.getByText('Ratings Best to Worst')).toBeInTheDocument()
    expect(screen.getByText('Ratings Worst to Best')).toBeInTheDocument()
  })

  it('should fire sortMovieRatings with the best param', () => {
    const bestToWorstRatingButton = screen.getByText('Ratings Best to Worst')

    userEvent.click(bestToWorstRatingButton);

    expect(mockSortMovieRatings).toHaveBeenCalledWith('best');
  })

  it('should fire sortMovieRatings with the worst param', () => {
    const worstToBestRatingButton = screen.getByText('Ratings Worst to Best')

    userEvent.click(worstToBestRatingButton);

    expect(mockSortMovieRatings).toHaveBeenCalledWith('worst');
  })
})
