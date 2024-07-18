import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import BookSeat from './components/BookSeat';
import BookingConfirmation from './components/BookingConfirmation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/details/:id" element={<MovieDetails />} />
          <Route path="/book/:id" element={<BookSeat />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;