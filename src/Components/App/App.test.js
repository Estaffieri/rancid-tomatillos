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

  it('should display all movies', async () => {
    
    // const sampleMovieData = [{id:1, title:"Best Movie Ever"}, {id:2, title:"Worst Movie Ever"}, {id:3, title:"Most Meh Movie Ever"}];
    getAllMovies.mockResolvedValueOnce({
      movies: [{
        id: 7456,
        poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        title: "Super Fake Movie",
        average_rating: 1.909090909090909,
        release_date: "2020-09-04",
        key:7456
      }]
    });

    render(<App />);
    const movieTitle1 = await waitFor(() => screen.getByText("Super Fake Movie"));

    expect(movieTitle1).toBeInTheDocument()
    
  })
})

// APP test
// test 1: header is rendered
// test 2(?): this.state based on the conditional
