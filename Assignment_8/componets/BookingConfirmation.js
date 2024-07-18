import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';

const BookingConfirmation = () => {
  const { state } = useLocation();
  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div className="booking-confirmation">
      <h1>Booking Confirmation</h1>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
    </div>
  );
};

export default BookingConfirmation;