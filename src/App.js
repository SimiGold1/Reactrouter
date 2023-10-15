import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbars from './Components/Navbar';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import MovieDetails from './Components/MovieDetails'
import VideoPlayer from './Components/VideoPlayer';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'THE BLACK BOOK',
      description:'After his son is framed for  kidnapping, a bereaved deacon takes justice into his own hands and fights a corrupt police gang to absolve him.',
      posterURL: 'Card1.jpg',
      rating: 8.5,
      trailerLink: 'https://www.youtube.com/embed/6PPH4SOm9gk?'
    },
    {
      title: 'AFTER EVERYTHING',
      description: 'After breaking up with his true love, best-selling author Hardin Scott travels to Portugal in an attempt to make amends for his past behavior.',
      posterURL: 'Card2.jpg',
      rating: 7.9,
      trailerLink: 'https://www.youtube.com/embed/fR1VptShVmg?si=dfYYmd0ji-C6PaIi&amp;start=2'
    },
    {
      title: 'BLOOD SISTERS',
      description: 'Blood Sisters tells the story of two friends Sarah (Ini Dima-Okojie) and Kemi (Nancy Isime). Sarah is engaged to her dream man, Kola (Deyemi Okanlawon.) However, their seemingly idyllic union has a dark side.',
      posterURL: 'ThirdCard.jpg',
      rating: 6.9,
      trailerLink: 'https://www.youtube.com/embed/FcHcmqRysD4?si=oU5M168uRrMK4SVA&amp;start=2'
    },
    {
      title: 'THE POLITICIAN',
      description: 'Payton Hobart, a student from Santa Barbara, has known since age seven that he is going to be President of the United States. But first he will have to navigate the most treacherous political landscape of all: Saint Sebastian High School.',
      posterURL: 'Card4.jpg',
      rating: 7.5,
      trailerLink: 'https://www.youtube.com/embed/xKaCerqc0VQ?si=0wowL-1Wghma1mud&amp;start=5'
    },
    {
      title: 'SPIDER_MAN: FAR AWAY FROM HOME',
      description: 'Following the events of Avengers: Endgame, Peter Parker (Tom Holland) returns in Spider-Man: Far From Home. Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter’s plan to leave super heroics behind for a few weeks is quickly scrapped when he begrudgingly agrees to help Nick Fury (Samuel L. Jackson) uncover the mystery of several elemental creature attacks. Spider-Man and Mysterio (Jake Gyllenhaal) join forces to fight the havoc unleashed across the continent but all is not as it seems.',
      posterURL: 'Card5.jpeg',
      rating: 7.4,
      trailerLink: 'https://www.youtube.com/embed/Nt9L1jCKGnE?si=B9pPJz9EWV1bikYc&amp;start=5'
    },
    {
      title: 'PACT OF SILENCE',
      description: 'Thirsty for revenge, a big-time social media influencer infiltrates the lives of four women to discover which of them is the mother who abandoned her at birth and uncover why she was left alone.',
      posterURL: 'Card6.jpg',
      rating: 8.2,
      trailerLink: 'https://www.youtube.com/embed/U1vxVeyNcaE?si=brnL8POhXN8PUu07&amp;start=5'
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
      rating: 9.1,
      trailerLink: 'https://www.youtube.com/embed/newtrailer'
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
      <BrowserRouter>
        <Navbars />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>

                  <h1></h1>
                  <Filter
                    title={filterTitle}
                    rate={filterRate}
                    onTitleChange={handleTitleChange}
                    onRateChange={handleRateChange}
                  />
                  <button style={{ backgroundColor: '#61dafb' }} onClick={addMovie}>
                    Add Movie
                  </button>
               
                  <MovieList movies={filteredMovies} />
                </>
              }
            />
            <Route path="/movies/:title" element={<MovieDetails movies={movies} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;