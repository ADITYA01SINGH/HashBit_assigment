import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const movies = [
  { id: 1, title: 'Bahubali', imgSrc: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/51054826796257.5635a9602a829.jpg' },
  { id: 2, title: 'Pushpa', imgSrc: 'https://www.pinkvilla.com/images/2023-03/pushpa_795-l_727x409.jpg' },
  { id: 3, title: 'Jawan', imgSrc: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6pAhnOrmtZOhvmdcs-wMxgzTKPT1xPXtpPMw0sLl-2YB82vTwiNKOoc6yBTCRZ6c0AdUm0vUZGVbbBATMsIy2UJb1OdZs-o19iHyh5s_0--e92vW8nCDTIixuzPunJwjAkey2-Ic-SZ2UObtffst0mJER9ChyzgQeuCwEwePzaEXDLozPpa9_1YZMWw/s1600/Jawan-Hindi-Movie-Full-Cast-and-Crew-Wiki.webp' },
  { id: 4, title: 'Kalki 2898 AD', imgSrc: 'https://images.tv9telugu.com/wp-content/uploads/2024/07/kalki-2898-ad-poster-2.jpg' },
  { id: 5, title: 'Avengers', imgSrc: 'https://wallpapercave.com/wp/wp6041176.jpg' },
  { id: 6, title: 'Superman vs Batman', imgSrc: 'https://hdqwalls.com/wallpapers/batman-vs-superman-new.jpg' },
  { id: 7, title: 'Captain America', imgSrc: 'https://images.hdqwalls.com/wallpapers/avengers-4-captain-america-4k-5r.jpg' },
  { id: 8, title: 'Black Widow', imgSrc: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/10/Black-Widow-Avengers-1024x650.jpg' },
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <img src={movie.imgSrc} alt={movie.title} />
          <h3>{movie.title}</h3>
          <Link to={`/details/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;