import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
    const [movies, setMovies] = useState([
      { 
        id: 1, 
        title: 'Forrest Gump',
        image: 'https://m.media-amazon.com/images/I/41hDdj0+F1L._SY300_.jpg',
        description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        genre: 'Drama',
        director: 'Robert Zemeckis'
      },
      { 
        id: 2, 
        title: 'STAR TREK: Discovery',
        image: 'https://m.media-amazon.com/images/I/71bxUVHnQlL._SY445_.jpg',
        description: 'Star Trek description',
        genre: 'Science Fiction',
        director: 'Star Trek Director'
      },
      { 
        id: 3, 
        title: 'The Green Mile',
        image: 'https://m.media-amazon.com/images/I/71Ju7--kiiL._SY445_.jpg',
        description: 'Green Mile description',
        genre: 'Drama',
        director: 'Green Mile Director'
      },
      { 
        id: 4, 
        title: 'Der Soldat James Ryan',
        image: 'https://m.media-amazon.com/images/I/71mcZ2FHiBL._SY445_.jpg',
        description: 'Der Soldat James Ryan Description',
        genre: 'Drama',
        director: 'Der Soldat James Ryan Director'
      },
      { 
        id: 5, 
        title: '1917',
        image: 'https://m.media-amazon.com/images/I/71bKKb1wNKL._SY445_.jpg',
        description: '1917 Description',
        genre: 'Drama',
        director: '1917 Director'
      }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
      return (
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }
  
    if (movies.length === 0) {
      return <div>The list is empty!</div>;
    }
  
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }} 
          />
        ))}
      </div>
    );
};