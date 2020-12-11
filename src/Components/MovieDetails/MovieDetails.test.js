import MovieDetails from './MovieDetails';
import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getSelectedMovie, getMovieTrailers } from "../../apiCalls";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
jest.mock("../../apiCalls");


describe('Movie Details', () => {
    let history;
    let currentMovie;
    let currentMovieTrailers;

  beforeEach(() => {
    history = createMemoryHistory()
     currentMovie = {
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
      }};

      currentMovieTrailers ={
          videos: [{
            id: 242,
            key: "01ON04CwKs",
            movie_id: 337401,
            site: "YouTube",
            type: "Teaser"
          }],
        }
       getSelectedMovie.mockResolvedValueOnce(currentMovie);
       getMovieTrailers.mockResolvedValueOnce(currentMovieTrailers)
  })
  it ('should display a single movie correctly', async () => {

    render(
      <Router history = {history}>
        <MovieDetails
           
            id ={ 694919 }
            title= "Money Plane"
            poster_path=
              "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
            backdrop_path=
              "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"
            release_date= "2020-09-29"
            overview=
              "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."
            genres= {["Action"]}
            budget={ 0 }
            revenue={ 0 }
            runtime={ 82}
            tagline= ""
            average_rating={ 6.666666666666667 }
        />
      </Router>
    );

    const movieDetailsTitle = await waitFor(() => screen.getByText("Money Plane"));
    const movieDetailsBudget = await waitFor(() => screen.getByText(0));
    const movieDetailsTagline = await waitFor(() => screen.getByText(""));
    const posterImage = await waitFor(() => screen.getByAltText("Money Plane"));


    expect(movieDetailsTitle).toBeInTheDocument();
    expect(movieDetailsBudget).toBeInTheDocument();
    expect(movieDetailsTagline).toBeInTheDocument();
    expect(posterImage).toBeInTheDocument();
  })

//   it ('should display a single movies trailer videos', async () => {
//     render(
//       <MemoryRouter>
//         <MoviePoster
//           id={694919}
//           image="some-image"
//           title="Money Plane"
//           rating={6.666666666666667}
//           displayMovieDetails={jest.fn()}
//           key={694919}
//         />
//       </MemoryRouter>
//     );

//     const movieTrailer = await waitFor(() => screen.getByTestId("242"));
//     fireEvent.click(movieTrailer);

      

//         getMovieTrailers.mockResolvedValueOnce({
//           videos: {
//             id: 242,
//             key: "01ON04CwKs",
//             movie_id: 337401,
//             site: "YouTube",
//             type: "Teaser"
//           },
//         });

//         expect(movieTrailer).toBeInTheDocument();

// })

})
