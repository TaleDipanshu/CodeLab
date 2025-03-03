import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2c2b3c] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-pink-500">Code</span>-lab
            </h3>
            <p className="text-gray-400">
              Empowering developers to enhance their coding skills through practical projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/coding-mode" className="text-gray-400 hover:text-white">Coding Modes</a></li>
              <li><a href="/roadmap" className="text-gray-400 hover:text-white">Roadmap</a></li>
              <li><a href="/faqs" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="/leaderboard" className="text-gray-400 hover:text-white">Leaderboard</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="/documentation" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="/challenges" className="text-gray-400 hover:text-white">Challenges</a></li>
              <li><a href="/community" className="text-gray-400 hover:text-white">Community</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaGithub /></a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaDiscord /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Code-lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;