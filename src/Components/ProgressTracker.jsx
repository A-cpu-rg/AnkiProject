import React from 'react';

const ProgressTracker = ({ totalCards, completedCards }) => {
  const progress = (completedCards / totalCards) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className="bg-blue-600 text-xs font-medium text-white text-center p-1 leading-none rounded-l-full"
        style={{ width: `${progress}%` }}
      >
        {completedCards}/{totalCards} Cards Reviewed
      </div>
    </div>
  );
};

export default ProgressTracker;
