import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App/App';
import { getAllMovies } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('Movie Container', () => {
  it('should display all movies', async () => {

    getAllMovies.mockResolvedValueOnce({
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
        },
        {
          id: 3333,
          poster_path:
            "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
          backdrop_path:
            "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
          title: "Very Real Fake Movie",
          average_rating: 3.909090909090909,
          release_date: "2020-09-04",
          key: 3333,
        },
      ],
    });

    render(<App />);
    const movieTitle1 = await waitFor(() => screen.getByText("Super Fake Movie"));
    const movieTitle2 = await waitFor(() => screen.getByText("Very Real Fake Movie"))

    expect(movieTitle1).toBeInTheDocument()
    expect(movieTitle2).toBeInTheDocument();

  })
})
