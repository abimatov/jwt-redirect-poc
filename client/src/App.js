import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

function Home({ onLogin }) {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

function Book() {
  const navigate = useNavigate();

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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!isLoggedIn ? <Home onLogin={handleLogin} /> : <Book />}
        />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;
