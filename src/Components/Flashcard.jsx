import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p className="text-lg font-semibold mb-2">{question}</p>
      {showAnswer && <p className="text-gray-700">{answer}</p>}
      <button 
        onClick={() => setShowAnswer(!showAnswer)} 
        className="mt-2 text-blue-500 hover:underline"
      >
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
    </div>
  );
};

export default Flashcard;
