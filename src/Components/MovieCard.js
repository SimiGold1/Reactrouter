import React from 'react';
import { CardHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    // <div style={{ display: 'flex' , justifyContent: 'space-between'}}>
    <Card style={{ width: '18rem', border:' 5px solid black',backgroundColor:'black' , color: 'white'}}>
        <CardHeader>RECENTLY ADDED</CardHeader>
      <Card.Img variant="top" src= {movie.posterURL} /> 
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.description}
        </Card.Text>
        <Button variant="primary">Rating: {movie.rating}</Button>
        <Link to={`/movies/${movie.title}`} className="btn btn-primary">View Details</Link>
      </Card.Body>
    </Card>
    // </div>
  );
}


export default MovieCard;