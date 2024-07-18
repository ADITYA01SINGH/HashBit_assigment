import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles.css';

const movies = [
  { id: 1, title: 'Bahubali', description: 'Price - $10' },
  { id: 2, title: 'Pushpa', description: 'Price - $12' },
  { id: 3, title: 'Jawan', description: 'Price - $15' },
  { id: 4, title: 'Kalki 2898 AD', description: 'Price - $12' },
  { id: 5, title: 'Avengers', description: 'Price - $20' },
  { id: 6, title: 'Superman vs Batman', description: 'Price - $18' },
  { id: 7, title: 'Captain America', description: 'Price - $20' },
  { id: 8, title: 'Black Widow', description: 'Price - $16' },
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`}>Book Seat</Link>
    </div>
  );
};

export default MovieDetails;