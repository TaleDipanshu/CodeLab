import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#2c2b3c] p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">
        <Link to="/">
          <span className="text-pink-500">Code</span>-lab
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-[#2c2b3c] md:bg-transparent md:p-0 p-6`}>
        <ul className="md:flex md:items-center md:space-x-4 text-center md:text-left">
          <li>
            <Link to="/codingMode" className="text-white block hover:underline py-2 md:py-0">
              Modes
            </Link>
          </li>
          <li>
            <Link to="/leaderBoard" className="text-white block hover:underline py-2 md:py-0">
              Leaderboard
            </Link>
          </li>
          <li>
            <Link to="/roadmap" className="text-white block hover:underline py-2 md:py-0">
              Roadmap
            </Link>
          </li>
        </ul>
        <div className="md:flex md:items-center md:space-x-4 mt-4 md:mt-0 text-center md:text-left">
          <Link to="/pro" className="bg-yellow-400 text-black px-4 py-2 rounded block w-full md:w-auto">
            Go PRO
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;