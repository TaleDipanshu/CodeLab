import React from 'react';

const Card = ({ title, image, difficulty, completed, hasTutorial, onClick }) => {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute top-0 right-0 bg-purple-600 text-white px-2 py-1">
          {title} {Array(difficulty).fill('⭐')}
        </div>
        {completed && (
          <div className="absolute bottom-0 left-0 bg-green-600 text-white px-2 py-1">
            Completed
          </div>
        )}
        {hasTutorial && (
          <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-2 py-1">
            Tutorial
          </div>
        )}
      </div>
      <div className="p-4">
        <button
          onClick={onClick}
          className="bg-yellow-400 text-black px-4 py-2 mt-4 rounded hover:bg-yellow-500 transition-colors duration-300"
        >
          Access Mode
        </button>
      </div>
    </div>
  );
};

export default Card;
