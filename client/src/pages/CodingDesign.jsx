import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Card from "../components/Card";

const DesignToCode = () => {
  const [difficulty, setDifficulty] = useState('All');
  const [hideCompleted, setHideCompleted] = useState(false);
  const [hasTutorial, setHasTutorial] = useState(false);

  const navigate = useNavigate();

  const challenges = [
    { title: 'Social Login', difficulty: 2, imgSrc: 'https://colorlib.com/wp/wp-content/uploads/sites/2/free-html5-and-css3-login-forms.jpg', completed: false, tutorial: true },
    { title: 'Mobile Menu', difficulty: 3, imgSrc: 'https://via.placeholder.com/300', completed: false, tutorial: true },
    { title: 'Cart Item', difficulty: 2, imgSrc: 'https://via.placeholder.com/300', completed: false, tutorial: false },
    { title: 'Friend Request', difficulty: 1, imgSrc: 'https://via.placeholder.com/300', completed: true, tutorial: true },
    { title: 'Birthday List', difficulty: 2, imgSrc: 'https://via.placeholder.com/300', completed: false, tutorial: false },
    { title: 'Christmas Promo', difficulty: 3, imgSrc: 'https://via.placeholder.com/300', completed: true, tutorial: false },
    { title: 'Profile Header', difficulty: 2, imgSrc: 'https://via.placeholder.com/300', completed: false, tutorial: true },
    { title: 'Collections List', difficulty: 3, imgSrc: 'https://via.placeholder.com/300', completed: false, tutorial: false },
    { title: 'Pricing Table', difficulty: 2, imgSrc: 'https://via.placeholder.com/300', completed: true, tutorial: true }
  ];

 
  const filteredChallenges = challenges.filter(challenge => {
    if (difficulty !== 'All' && challenge.difficulty !== parseInt(difficulty)) return false;
    if (hideCompleted && challenge.completed) return false;
    if (hasTutorial && !challenge.tutorial) return false;
    return true;
  });

 
  const handleAccessModeClick = (challenge) => {
   
    navigate('/code-editor', { state: { challenge } });
  };

  return (
    <div className="bg-[#0f0e17] py-10 min-h-screen text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Design to Code</h1>
        <p className="text-center mb-8">Get your hands dirty with our design to code challenges without the hassle of searching for new designs everytime you want to code, and jump right into practice. It’s the best way to sharpen your coding abilities!</p>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span>Difficulty</span>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="bg-gray-700 text-white rounded px-3 py-2">
              <option value="All">All</option>
              <option value="1">Easy</option>
              <option value="2">Medium</option>
              <option value="3">Hard</option>
            </select>
            <button
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors duration-300"
              onClick={() => alert('Filter by tags')}
            >
              Filter by tags
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div>
              <span className="mr-2">Hide Completed</span>
              <input
                type="checkbox"
                checked={hideCompleted}
                onChange={() => setHideCompleted(!hideCompleted)}
                className="toggle-checkbox"
              />
            </div>
            <div>
              <span className="mr-2">Has tutorial</span>
              <input
                type="checkbox"
                checked={hasTutorial}
                onChange={() => setHasTutorial(!hasTutorial)}
                className="toggle-checkbox"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredChallenges.map((challenge, index) => (
            <Card
              key={index}
              title={challenge.title}
              image={challenge.imgSrc}
              difficulty={challenge.difficulty}
              completed={challenge.completed}
              hasTutorial={challenge.tutorial}
              onClick={() => handleAccessModeClick(challenge)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignToCode;
