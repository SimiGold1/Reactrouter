import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Movie Trailer"
      ></iframe>
      <Link to="/" className="btn btn-primary">Back</Link>
    </div>
  );
};

export default MovieDetails;