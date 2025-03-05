import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/coding.jpg'

const ChallengeSection = () => {
  const navigate = useNavigate();

  const handleStartChallenge = () => {
    navigate('/codingMode');
  };

  return (
    <section className="mt-20 p-8 text-center">
      
      <div className="mt-4 bg-[#2c2b3c] rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden relative group">
            <img 
              src={image} 
              alt="Coding Challenge"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white text-left">
                <h3 className="text-xl font-bold mb-2">Group Programming Challenge</h3>
                <p className="text-sm text-gray-300">
                  Collaborate with others to solve complex coding problems
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-left space-y-4">
            <h3 className="text-xl text-white font-bold">Ready to Test Your Skills?</h3>
            <p className="text-gray-300">
              Join our coding challenge and improve your:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">✓</span> Problem-solving abilities
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">✓</span> Team collaboration
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">✓</span> Code optimization skills
              </li>
            </ul>
            <button 
              onClick={handleStartChallenge}
              className="mt-6 bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center gap-2 w-full md:w-auto"
            >
              Take the Challenge
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;