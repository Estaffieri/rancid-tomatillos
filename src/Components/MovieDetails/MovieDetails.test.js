import MovieDetails from './MovieDetails';
import { fireEvent, waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { displayMovieDetails } from "../App/App";
import { getSelectedMovie } from "../../apiCalls";
jest.mock("../../apiCalls");


describe('Back Button', () => {
  it('should return to main page once clicked', () => {
     
        const mockBackButton= jest.fn();

        render(
          <MovieDetails 
            id={694919}
            title= "Money Plane"
            poster_path=
              "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
            backdrop_path=
              "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"
            release_date= "2020-09-29"
            overview=
              "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."
            genres= {["Action"]}
            budget={0}
            revenue={0}
            runtime={82}
            tagline= ""
            average_rating={6.666666666666667}
          />
        );

        const backButton = screen.getByAltText("Go Back");
        fireEvent.click(backButton);

        expect(mockBackButton).toHaveBeenCalled(1);
        //movieDetails coming back as undef. on poster_path line.
        //Do we need to mock entire flow to test one button with apiCalls?
      });

  
})
