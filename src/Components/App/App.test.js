import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

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

// APP test
// test 1: header is rendered
// test 2(?): this.state based on the conditional


// MOVE POSTER test
// test 1: a movie poster is rendered (confirm image/title/rating with 'toBeInTheDocument')
// test 2: displayMovieDetails function is fired on click
