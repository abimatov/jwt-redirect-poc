import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Book() {
  const handleBookTravel = () => {
    // Navigate to /book route which will trigger the JWT generation and redirect
    window.location.href = '/book';
  };

  return (
    <div>
      <h1>Welcome to the Booking Page</h1>
      <button onClick={handleBookTravel}>Book Travel</button>
    </div>
  );
}
