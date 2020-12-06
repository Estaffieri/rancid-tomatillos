import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { getAllMovies } from '../../apiCalls';
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
})
