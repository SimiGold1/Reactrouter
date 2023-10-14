import React, { useState } from 'react';
import Navbars from './Components/Navbar';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'THE BLACK BOOK',
      description: 'Description of Movie 1',
      posterURL: 'Card1.jpg',
      rating: 8.5
    },
    {
      title: 'AFTER EVERYTHING',
      description: 'Description of Movie 2',
      posterURL: 'Card2.jpg',
      rating: 7.9
    },
    {
    title: 'BLOOD SISTERS',
    description: 'Description of Movie 2',
    posterURL: 'ThirdCard.jpg',
    rating: 6.9
    // Add more movies here...
    },
    {
      title: 'THE POLITICIAN',
      description: 'Description of Movie 2',
      posterURL: 'Card4.jpg',
      rating: 7.5
    },
    {
      title: 'SPIDER_MAN: FAR AWAY FROM HOME',
      description: 'Description of Movie 2',
      posterURL: 'Card5.jpeg',
      rating: 7.4
    },
    {
      title: 'PACT OF SILENCE',
      description: 'Description of Movie 2',
      posterURL: 'Card6.jpg',
      rating: 8.2
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState('');

  const handleTitleChange = event => {
    setFilterTitle(event.target.value);
  };

  const handleRateChange = event => {
    setFilterRate(event.target.value);
  };

  const addMovie = () => {
    const newMovie = {
      title: 'New Movie',
      description: 'Description of New Movie',
      posterURL: 'poster3.jpg',
      rating: 9.1
    };

    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRate === '' || movie.rating >= parseFloat(filterRate))
    );
  });

  return (
    <div className="App">
      <Navbars />
      <h1></h1>
      <Filter
        title={filterTitle}
        rate={filterRate}
        onTitleChange={handleTitleChange}
        onRateChange={handleRateChange}
      />
      <button style={{backgroundColor: '#61dafb'}} onClick={addMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;