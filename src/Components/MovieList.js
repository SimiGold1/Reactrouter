import React from 'react';
import MovieCard from './MovieCard';
import Navbars from './Navbar';

const MovieList = ({ movies }) => {
  return (
    <div className="row">
      {movies.map(movie => (
        <div className="col-md-4" key={movie.title}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;