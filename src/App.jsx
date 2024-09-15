import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from '../src/Pages/Home';
import CreateDeck from './Pages/CreateDeck';
import ReviewDeck from './Pages/ReviewDeck';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import useAuth from './hooks/useAuth';

const App = () => {
  const { currentUser } = useAuth();

  const PrivateRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/create-deck"
          element={
            <PrivateRoute>
              <CreateDeck />
            </PrivateRoute>
          }
        />
        <Route
          path="/review-deck"
          element={
            <PrivateRoute>
              <ReviewDeck />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
