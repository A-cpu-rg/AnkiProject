import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHome } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-600 to-gray-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">
          <span className="cursor-default">Anki Flashcards</span>
        </h1>

        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`md:flex items-center space-x-6 hidden ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link to="/" className="hover:text-gray-200 transition duration-300">
              <FaHome className="inline-block mr-1" /> Home
            </Link>
          </li>
          {!currentUser ? (
            <>
              <li>
                <Link to="/login" className="hover:text-gray-200 transition duration-300">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-gray-200 transition duration-300">Signup</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/create-deck" className="hover:text-red-200 transition duration-300">Create Deck</Link>
              </li>
              <li>
                <Link to="/review-deck" className="hover:text-green-200 transition duration-300">Review Deck</Link>
              </li>
              <li>
                <span onClick={handleLogout} className="cursor-pointer hover:text-red-400 transition duration-300">Logout</span>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-300 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {currentUser.email.charAt(0).toUpperCase()}
                  </div>
                  <span>{currentUser.email}</span>
                </div>
              </li>
            </>
          )}
        </ul>

        <div className={`absolute top-16 left-0 w-full bg-gray-700 text-white p-4 transition-transform duration-300 md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block hover:text-gray-200 transition duration-300">
                <FaHome className="inline-block mr-1" /> Home
              </Link>
            </li>
            {!currentUser ? (
              <>
                <li>
                  <Link to="/login" className="block hover:text-gray-200 transition duration-300">Login</Link>
                </li>
                <li>
                  <Link to="/signup" className="block hover:text-gray-200 transition duration-300">Signup</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/create-deck" className="block hover:text-gray-200 transition duration-300">Create Deck</Link>
                </li>
                <li>
                  <Link to="/review-deck" className="block hover:text-gray-200 transition duration-300">Review Deck</Link>
                </li>
                <li onClick={handleLogout} className="block cursor-pointer hover:text-red-400 transition duration-300">Logout</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
