import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const CreateDeck = () => {
  const [deckName, setDeckName] = useState('');
  const [flashcards, setFlashcards] = useState([{ question: '', answer: '', tags: '' }]);

  const handleAddFlashcard = () => {
    setFlashcards([...flashcards, { question: '', answer: '', tags: '' }]);
  };

  const handleRemoveFlashcard = (index) => {
    const updatedFlashcards = flashcards.filter((_, i) => i !== index);
    setFlashcards(updatedFlashcards);
  };

  const handleFlashcardChange = (index, field, value) => {
    const updatedFlashcards = flashcards.map((flashcard, i) =>
      i === index ? { ...flashcard, [field]: value } : flashcard
    );
    setFlashcards(updatedFlashcards);
  };

  const handleCreateDeck = () => {
    const decks = JSON.parse(localStorage.getItem('decks')) || [];
    const newDeck = {
      id: decks.length + 1,
      name: deckName,
      questions: flashcards.filter(flashcard => flashcard.question && flashcard.answer),
    };
    decks.push(newDeck);
    localStorage.setItem('decks', JSON.stringify(decks));
    setDeckName('');
    setFlashcards([{ question: '', answer: '', tags: '' }]);
    alert('Deck Created with Questions!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">Create New Deck</h2>

        <input
          type="text"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Deck Name"
        />

        {flashcards.map((flashcard, index) => (
          <div key={index} className="space-y-4">
            <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
              <input
                type="text"
                value={flashcard.question}
                onChange={(e) => handleFlashcardChange(index, 'question', e.target.value)}
                className="w-full md:flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Question ${index + 1}`}
              />
              <input
                type="text"
                value={flashcard.answer}
                onChange={(e) => handleFlashcardChange(index, 'answer', e.target.value)}
                className="w-full md:flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder={`Answer ${index + 1}`}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <input
                type="text"
                value={flashcard.tags}
                onChange={(e) => handleFlashcardChange(index, 'tags', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tags (optional)"
              />
              <button
                onClick={() => handleRemoveFlashcard(index)}
                className="flex items-center justify-center bg-red-500 p-2 rounded-md text-white shadow-md hover:bg-red-600 transition duration-300"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={handleAddFlashcard}
          className="w-full py-2 bg-indigo-500 text-white font-bold rounded-md shadow-md hover:bg-indigo-600 transition duration-300"
        >
          <FaPlus className="inline-block mr-2" /> Add Another Question
        </button>

        <button
          onClick={handleCreateDeck}
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Create Deck
        </button>
      </div>
    </div>
  );
};

export default CreateDeck;
