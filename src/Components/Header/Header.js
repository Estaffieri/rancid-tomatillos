import React from 'react';

const Header = (props) => {

  return(
    <section className="filtering-buttons">
      <button onClick={() => props.sortMovieRatings("best")}>
        Ratings Best to Worst
      </button>
      <button onClick={() => props.sortMovieRatings("worst")}>
        Ratings Worst to Best
      </button>
    </section>
  )
}

export default Header;
