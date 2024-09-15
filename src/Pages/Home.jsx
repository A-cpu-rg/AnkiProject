import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaBookOpen } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 p-2 sm:p-4">
      <div className="max-w-3xl w-full p-4 sm:p-6 bg-white rounded-xl shadow-2xl space-y-6 sm:space-y-8 transform hover:scale-105 transition-transform duration-300">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4 sm:mb-6">Anki Flashcards</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">Supercharge your learning with spaced repetition flashcards.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <Link to="/create-deck" className="bg-indigo-600 text-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg hover:bg-indigo-700 transition">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <FaPlusCircle className="text-2xl sm:text-3xl md:text-4xl" />
              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold">Create Deck</h2>
                <p className="text-xs sm:text-sm md:text-base">Create your custom flashcards.</p>
              </div>
            </div>
          </Link>

          <Link to="/review-deck" className="bg-purple-600 text-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg hover:bg-purple-700 transition">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <FaBookOpen className="text-2xl sm:text-3xl md:text-4xl" />
              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold">Review Decks</h2>
                <p className="text-xs sm:text-sm md:text-base">Review your flashcards.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-green-100 p-3 sm:p-4 md:p-6 rounded-xl shadow-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 mb-3 sm:mb-4">Your Deck Progress</h2>
          <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm md:text-lg text-gray-700 space-y-2 sm:space-y-0">
            <p>Decks Reviewed: <span className="font-bold">5</span></p>
            <p>Cards Mastered: <span className="font-bold">25</span></p>
            <p>Mastery Level: <span className="font-bold">70%</span></p>
          </div>
        </div>

        <div className="bg-blue-100 p-3 sm:p-4 md:p-6 rounded-xl shadow-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 mb-3 sm:mb-4">Recent Decks</h2>
          <ul className="list-disc pl-5 space-y-1 sm:space-y-2">
            <li className="text-xs sm:text-sm md:text-lg text-gray-700">DSA Concepts</li>
            <li className="text-xs sm:text-sm md:text-lg text-gray-700">JavaScript Concepts</li>
            <li className="text-xs sm:text-sm md:text-lg text-gray-700">History Timeline</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
