import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="text-center relative overflow-hidden py-10">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full blur-xl"/>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-xl"/>
      </motion.div>

      {/* Main content */}
      <motion.h1 
        className="text-4xl md:text-5xl font-bold pt-10 text-white relative z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Projects you can build to <span className="text-purple-500">improve</span> your <span className="text-purple-500">coding skills!</span>
      </motion.h1>

      {/* Avatar section with animation */}
      <motion.div 
        className="flex justify-center mt-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex -space-x-4">
          <img className="w-12 h-12 rounded-full border-2 border-white" src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg" alt="avatar1" />
          <img className="w-12 h-12 rounded-full border-2 border-white" src="https://th.bing.com/th/id/R.3bcbeff4ee0abb81ef150c9ea7e35730?rik=t3aMo1m4uUQi6g&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f05%2ffree-stock-photos-people_102217.jpg&ehk=vGjIrntn5QyP%2fIXY2Ei7Iiz4%2fy%2byXvP8I8j0XxemwjI%3d&risl=&pid=ImgRaw&r=0" alt="avatar2" />
          <img className="w-12 h-12 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="avatar3" />
          <img className="w-12 h-12 rounded-full border-2 border-white" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="avatar4" />
          <img className="w-12 h-12 rounded-full border-2 border-white" src="https://wallpapercave.com/wp/wp4051774.jpg" alt="avatar5" />
        </div>
      </motion.div>

      {/* Stats and features */}
      <motion.div 
        className="flex justify-center gap-8 mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="text-white">
          <h3 className="text-2xl font-bold">100+</h3>
          <p className="text-gray-400">Projects</p>
        </div>
        <div className="text-white">
          <h3 className="text-2xl font-bold">15+</h3>
          <p className="text-gray-400">Technologies</p>
        </div>
        <div className="text-white">
          <h3 className="text-2xl font-bold">24/7</h3>
          <p className="text-gray-400">Support</p>
        </div>
      </motion.div>

      <motion.p 
        className="mt-6 text-white text-lg max-w-2xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Join <span className="font-bold text-purple-500">1M+</span> developers supercharging their coding skills by building projects.
      </motion.p>

      <motion.button 
        className="bg-purple-500 text-white mt-6 px-8 py-3 rounded-lg text-lg hover:bg-purple-600 transition-colors duration-300 relative overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="codingMode" className="flex items-center gap-2">
          Start Coding
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </motion.button>
    </section>
  );
};

export default HeroSection;
