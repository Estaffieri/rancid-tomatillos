import MovieDetails from './MovieDetails';
import MoviePoster from '../MoviePoster/MoviePoster';
import { fireEvent, waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { displayMovieDetails } from "../App/App";
import { getAllMovies, getSelectedMovie } from "../../apiCalls";
import { MemoryRouter } from 'react-router-dom';
jest.mock("../../apiCalls");


describe('Movie Details', () => {
  it ('should display a single movie', async () => {
    render(
      <MemoryRouter>
        <MoviePoster
          id={694919}
          image="some-image"
          title="Money Plane"
          rating={6.666666666666667}
          displayMovieDetails={jest.fn()}
          key={694919}
        />
      </MemoryRouter>
    );

    const posterImage = await waitFor(() => screen.getByAltText("Money Plane"));
    fireEvent.click(posterImage);

        getSelectedMovie.mockResolvedValueOnce({
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
          },
        });

        expect(posterImage).toBeInTheDocument();
  })

  // it('should return to main page once clicked', () => {
  //
  //       const mockBackButton= jest.fn();
  //
  //       render(
  //         <MovieDetails
  //           id={694919}
  //           title= "Money Plane"
  //           poster_path=
  //             "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
  //           backdrop_path=
  //             "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"
  //           release_date= "2020-09-29"
  //           overview=
  //             "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."
  //           genres= {["Action"]}
  //           budget={0}
  //           revenue={0}
  //           runtime={82}
  //           tagline= ""
  //           average_rating={6.666666666666667}
  //         />
  //       );
  //
  //       const backButton = screen.getByAltText("Go Back");
  //       fireEvent.click(backButton);
  //
  //       expect(mockBackButton).toHaveBeenCalled(1);
  //       //movieDetails coming back as undef. on poster_path line.
  //       //Do we need to mock entire flow to test one button with apiCalls?
  //     });


})
