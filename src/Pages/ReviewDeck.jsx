import React, { useState } from 'react';
import { FaTrashAlt, FaEye, FaEyeSlash, FaChartLine } from 'react-icons/fa';
import SearchBar from '../Components/SearchBar';

const ReviewDeck = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [decks, setDecks] = useState(JSON.parse(localStorage.getItem('decks')) || []);
  const [showAnswers, setShowAnswers] = useState({});

  const filteredDecks = decks.filter((deck) =>
    deck.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleShowAnswers = (deckId) => {
    setShowAnswers((prev) => ({
      ...prev,
      [deckId]: !prev[deckId],
    }));
  };

  const handleRemoveDeck = (deckId) => {
    const updatedDecks = decks.filter((deck) => deck.id !== deckId);
    setDecks(updatedDecks);
    localStorage.setItem('decks', JSON.stringify(updatedDecks));
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center max-sm:mt-20">
        Review Your Decks
      </h2>
      
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredDecks.length > 0 ? (
          filteredDecks.map((deck) => (
            <div key={deck.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{deck.name}</h3>

              <div className="flex items-center space-x-2 mb-4">
                <FaChartLine className="text-xl text-blue-600" />
                <p className="text-gray-600 text-sm">Progress: <span className="font-bold">70%</span></p>
              </div>

              <button
                onClick={() => toggleShowAnswers(deck.id)}
                className="py-2 px-4 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
              >
                {showAnswers[deck.id] ? (
                  <>
                    <FaEyeSlash className="mr-2" />
                    Hide Answers
                  </>
                ) : (
                  <>
                    <FaEye className="mr-2" />
                    Show Answers
                  </>
                )}
              </button>

              {showAnswers[deck.id] && (
                <ul className="mt-4">
                  {deck.questions && deck.questions.length > 0 ? (
                    deck.questions.map((question, index) => (
                      <li key={index} className="mb-4 border-b border-gray-200 pb-2">
                        <p className="font-bold text-gray-700">Q: {question.question}</p>
                        <p className="text-gray-600">A: {question.answer}</p>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500">No questions available for this deck.</p>
                  )}
                </ul>
              )}

              <div className="flex justify-between mt-4 space-x-2">
                <button className="w-full py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300">
                  Review Deck
                </button>
                <button
                  onClick={() => handleRemoveDeck(deck.id)}
                  className="w-full py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300 flex items-center justify-center"
                >
                  <FaTrashAlt className="mr-2" /> Remove Deck
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No decks found. Try creating a new deck.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewDeck;
